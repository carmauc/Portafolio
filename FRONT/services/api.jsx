const BASE_URL = import.meta.env.VITE_API_URL;

const ENDPOINTS = {
  enviarCorreo: '/enviar-correo',
};

function validarFormulario(formData) {
  const { nombre, correo, asunto, mensaje } = formData;
  const errores = {};

  if (!nombre?.trim()) errores.nombre = 'El nombre es obligatorio';
  if (!correo?.trim()) {
    errores.correo = 'El correo es obligatorio';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    errores.correo = 'Correo no válido';
  }
  if (!asunto?.trim()) errores.asunto = 'El asunto es obligatorio';
  if (!mensaje?.trim()) errores.mensaje = 'El mensaje es obligatorio';

  if (Object.keys(errores).length > 0) {
    const error = new Error('Datos del formulario inválidos');
    error.errores = errores;
    throw error;
  }

  return {
    nombre: nombre.trim(),
    correo: correo.trim(),
    asunto: asunto.trim(),
    mensaje: mensaje.trim(),
  };
}

async function parseError(response) {
  try {
    const data = await response.json();
    return data.error || data.message || 'Error al enviar el formulario';
  } catch {
    return `Error ${response.status}: ${response.statusText}`;
  }
}

async function fetchConTimeout(url, options = {}, timeoutMs = 15000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('La solicitud tardó demasiado. Inténtalo de nuevo.');
    }
    throw new Error('No se pudo conectar con el servidor.');
  } finally {
    clearTimeout(id);
  }
}

const api = {
  enviarFormulario: async (formData) => {
    if (!BASE_URL) {
      throw new Error('URL del servidor no configurada');
    }

    const datos = validarFormulario(formData);

    const response = await fetchConTimeout(
      `${BASE_URL}${ENDPOINTS.enviarCorreo}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos),
      }
    );

    if (!response.ok) {
      throw new Error(await parseError(response));
    }

    return response.json();
  },
};

export default api;
