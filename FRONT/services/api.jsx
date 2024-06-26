const BASE_URL = 'https://portafolio-production-90bc.up.railway.app'; // Reemplaza con la URL de tu servidor
// const BASE_URL = 'http://localhost:3001'; // Reemplaza con la URL de tu servidor
const api = {
  enviarFormulario: async (formData) => {
    const response = await fetch(`${BASE_URL}/enviar-correo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (!response.ok) {
      throw new Error('Error al enviar el formulario');
    }
    return await response.json();
  },
};



export default api;