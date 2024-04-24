require('dotenv').config();

const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Configurar bodyParser para analizar las solicitudes POST
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
    
  // Manejo de solicitudes POST desde tu aplicación de React
  app.post('/enviar-correo', (req, res) => {
    try {
    const {nombre,correo,asunto,mensaje} = req.body;
    console.log(nombre, correo, asunto, mensaje);
      const mailOptions = {
        from: 'carmauc339@gmail.com',
        to: 'carmauc339@outlook.com',
        subject: `${asunto}`,
        text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`
        };
    

         transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Correo enviado con éxito' });
        }
        // });} 
        catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al enviar el correo' });
        }
        });

// Inicia el servidor
app.listen(PORT, () => {
console.log(`Servidor escuchando en el puerto ${PORT}`);
});
