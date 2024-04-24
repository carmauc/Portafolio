// const BASE_URL = 'https://portafolio-production-90bc.up.railway.app'; // Reemplaza con la URL de tu servidor
const BASE_URL = 'http://localhost:3001'; // Reemplaza con la URL de tu servidor
const api = {
  enviarFormulario: (formData) => {
    return fetch(`${BASE_URL}/enviar-correo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(response => {
      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }
      return response.json();
    });
  },
};



export default api;


// const BASE_URL = 'http://localhost:3001'; // Cambia esto por la URL de tu servidor backend

// async function enviarFormulario(datosFormulario) {
//   try {
//     const response = await fetch(`${BASE_URL}/enviar-correo`, {
//       method: 'POST',
//       body: datosFormulario,
//     });

//     if (!response.ok) {
//       throw new Error('Error al enviar el formulario');
//     }

//     return response;
//   } catch (error) {
//     console.error('Error al enviar el formulario:', error);
//     throw error;
//   }
// }

// export default { enviarFormulario};
