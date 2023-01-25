var express = require('express');
var router = express.Router();
var clientesModel=require('./../models/clientesModel');
var cloudinary = require('cloudinary').v2;

router.get('/clientes', async function (req,res, next){
    let clientes = await clientesModel.getClientes();

    clientes = clientes.map(clientes => {
        if (clientes.img_id){
            const imagen = cloudinary.url(clientes.img_id,{
                width: 100,
                height: 50,
                crop: 'fill'
            });
            return {
                ...clientes,
                imagen
            }
        }else{
            return {
                ...clientes,
                imagen: ''
            }
        }
    });

    res.json(clientes);
})

module.exports = router;