var express = require('express');
var router = express.Router();
var clientesModel = require('./../../models/clientesModel');

router.get('/', async function (req, res, next) {
   var clientes = await clientesModel.getClientes();
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
      if (req.body.nombre != "" && req.body.actividad != "" && req.body.comentario != "") {
         await clientesModel.insertCliente(req.body);
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
   try {
      let obj = {
         nombre: req.body.nombre,
         actividad: req.body.actividad,
         comentario: req.body.comentario
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