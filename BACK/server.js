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



// require('dotenv').config();

// const nodemailer = require('nodemailer');
// const cors = require('cors');

// const multer = require('multer');  // Import multer
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//   // Configurar multer para manejar la carga de archivos
//   const storage = multer.memoryStorage();
//   const upload = multer({ storage: storage });

//   const transporter = nodemailer.createTransport({
//     service: "Gmail",
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });
    
//   // Manejo de solicitudes POST desde tu aplicación de React
// app.post('/enviar-correo', upload.fields([
//   { name: 'archivo1', maxCount: 1 },
// ]), async (req, res) => {
//     try {
//       const {mascota, correo, asunto, raza, mensaje, meses, sexo, numero, peso, color, esterilizado, ident, nombre, microchip, nacimiento, fecha, numeroid, direcciond, ciudadd, estadod, paisd, postal, telefonod, direcciono, ciudado, telefonoo, paisP, nombre2, correo2, numeroid2, paisP2, direccion2, ciudad2, estado2, postal2, telefonod2, fecha2, puerto, aeropuerto, ruta } = req.body;  
//           console.log(nombre, correo, asunto, mensaje);
//       const mailOptions = {
//                 from: 'carmauc339@gmail.com',
//                 to: 'carmauc339@outlook.com',
//                 subject: `${asunto}`,
//                 text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`
//                 };


// await transporter.sendMail(mailOptions);

// res.status(200).json({ message: 'Correo enviado con éxito' });
// }
// // });} 
// catch (error) {
// console.error(error);
// res.status(500).json({ error: 'Error al enviar el correo' });
// }
// });

// // Inicia el servidor
// app.listen(PORT, () => {
// console.log(`Servidor escuchando en el puerto ${PORT}`);
// });



