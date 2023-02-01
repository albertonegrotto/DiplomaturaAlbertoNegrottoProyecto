var express = require('express');
var router = express.Router();
var clientesModel = require('./../models/clientesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/clientes', async function (req, res, next) {
    let clientes = await clientesModel.getClientes();

    clientes = clientes.map(clientes => {
        if (clientes.img_id) {
            const imagen = cloudinary.url(clientes.img_id, {
                width: 100,
                height: 50,
                crop: 'fill'
            });
            return {
                ...clientes,
                imagen
            }
        } else {
            return {
                ...clientes,
                imagen: ''
            }
        }
    });

    res.json(clientes);
})

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'anegrotto@gmail.com',
        subject: 'Contacto BusquedasIT',
        html: `${req.body.nombre} se contacto a traves de
        la web y quiere más informacion a este correo:
        ${req.body.email} <br> Ademas hizo el siguiente
        comentario: ${req.body.mensaje}</br> Su TEL es:
        ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }     

    }); // Cierra transp

    try {
        await transport.sendMail(mail)

        res.status(201).json({
            error: false,
            message: 'Mensaje Enviado'
        });
    } catch (error) {
        throw error;
    }
});

module.exports = router;