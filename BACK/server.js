require('dotenv').config();

const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Configurar bodyParser para analizar las solicitudes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

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
    const { nombre, correo, asunto, mensaje } = req.body;

      const mailOptions = {
        from: 'carmauc339@gmail.com',
        to: 'carmauc339@outlook.com',
        subject: asunto,
        text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`
        

        };
    

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.log('Error al enviar el correo electrónico:', error);
              res.status(500).send('Hubo un error al enviar el correo electrónico');
          } else {
              console.log('Correo electrónico enviado:', info.response);
              res.status(200).send('¡Correo electrónico enviado con éxito!');
          }
      });
  });

// Inicia el servidor
app.listen(PORT, () => {
console.log(`Servidor escuchando en el puerto ${PORT}`);
});



