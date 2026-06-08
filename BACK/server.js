require('dotenv').config();

const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/enviar-correo', async (req, res) => {
  try {
    const { nombre, correo, asunto, mensaje } = req.body;

    if (!nombre?.trim() || !correo?.trim() || !asunto?.trim() || !mensaje?.trim()) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'carmauc339@outlook.com',
      replyTo: correo.trim(),
      subject: asunto.trim(),
      text: `Nombre: ${nombre.trim()}\nCorreo: ${correo.trim()}\nMensaje: ${mensaje.trim()}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al enviar el correo' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
