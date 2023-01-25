var express = require('express');
var router = express.Router();
var clientesModel = require('./../../models/clientesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function (req, res, next) {
   var clientes = await clientesModel.getClientes();
   clientes = clientes.map(cliente => {
      if (cliente.img_id) {
         const imagen = cloudinary.image(cliente.img_id, {
            width: 100,
            height: 50,
            crop: 'fill'
         });
         return {
            ...cliente,
            imagen
         }
      }
      else {
         return {
            ...cliente,
            imagen: ''
         }
      }
   });
   res.render('admin/clientes', {
      layout: 'admin/layout',
      usuario: req.session.nombre,
      clientes
   });
});

router.get('/agregar', (req, res, next) => {
   res.render('admin/agregar', {
      layout: 'admin/layout'
   });
});

router.get('/eliminar/:id', async (req, res, next) => {
   var id = req.params.id;

   let cliente = await clientesModel.getClienteById(id);
   if (cliente.img_id) {
      await (destroy(cliente.img_id));
   }

   await clientesModel.deleteClienteById(id);
   res.redirect('/admin/clientes')
});

router.get('/modificar/:id', async (req, res, next) => {
   let id = req.params.id;
   let cliente = await clientesModel.getClienteById(id);
   res.render('admin/modificar', {
      layout: 'admin/layout',
      cliente
   });
});

router.post('/agregar', async (req, res, next) => {
   try {
      var img_id = '';
      if (req.files && Object.keys(req.files).length > 0) {
         imagen = req.files.imagen;
         img_id = (await uploader(imagen.tempFilePath)).public_id;
      }
      if (req.body.nombre != "" && req.body.actividad != "" && req.body.comentario != "") {
         await clientesModel.insertCliente({
            ...req.body,
            img_id
         });
         res.redirect('/admin/clientes')
      } else {
         res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'Todos los campos son requeridos'
         })
      }
   } catch (error) {
      console.log(error)
      res.render('admin/agregar', {
         layout: 'admin/layout',
         error: true, message: 'No se cargó el Cliente'
      });
   }
});

router.post('/modificar', async (req, res, next) => {
   var img_id = null;   
   var imagen_id = null;
   try {
      let img_id = req.body.img_original; 
      let borrar_img_vieja = false;
      if (req.body.img_delete === "1") {
         img_id = null;
         borrar_img_vieja = true;
      } else {
         if (req.files && Object.keys(req.files).length > 0) {            
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
            borrar_img_vieja = true;
            imagen_id = img_id;           
         }
         else{
            console.log('No hay Archivos');
            imagen_id = img_id; 
         }
      }
      if (borrar_img_vieja && req.body.img_original) {
         await (destroy(req.body.img_original));
      }
   }
   catch (error) {
      console.log(error)
      res.render('admin/modificar', {
         layout: 'admin/layout',
         error: true, message: 'Error al procesar Imagen'
      })
   }

   console.log(imagen_id);

   try {
      let obj = {
         nombre: req.body.nombre,
         actividad: req.body.actividad,
         comentario: req.body.comentario,
         img_id: imagen_id
      }
      await clientesModel.modificarClienteById(obj, req.body.id);
      res.redirect('/admin/clientes');
   }
   catch (error) {
      console.log(error)
      res.render('admin/modificar', {
         layout: 'admin/layout',
         error: true, message: 'No se modificó el Cliente'
      })
   }

})


module.exports = router;