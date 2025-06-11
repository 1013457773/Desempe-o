const URL_API = "/api"; 

// Obtener todos los usuarios (para login o validación)
export async function obtenerUsuarios() {
  const res = await fetch(`${URL_API}/users`);
  return res.json();
}

// Registrar nuevo usuario (agregar a datos.json)
export async function registrarUsuario(nuevoUsuario) {
  const usuariosExistentes = await obtenerUsuarios();
  const correoYaExiste = usuariosExistentes.some(
    (u) => u.email === nuevoUsuario.email
  );

  if (correoYaExiste) {
    throw new Error("Este correo ya está registrado.");
  }

  const res = await fetch(`${URL_API}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoUsuario),
  });
  return res.json();
}

// Obtener todos los videojuegos
export async function obtenerVideojuegos() {
  const res = await fetch(`${URL_API}/games`);
  return res.json();
}

// Crear nuevo videojuego con validación
export async function crearVideojuego(data) {
  // Validar campos obligatorios
  if (!data.titulo || !data.genero || !data.precio || !data.fecha) {
    throw new Error("Todos los campos del videojuego son obligatorios.");
  }

  // Validar que no exista ya por título (opcional)
  const juegos = await obtenerVideojuegos();
  const yaExiste = juegos.some(
    (j) => j.titulo.toLowerCase().trim() === data.titulo.toLowerCase().trim()
  );

  if (yaExiste) {
    throw new Error("Ya existe un videojuego con ese título.");
  }

  const res = await fetch(`${URL_API}/games`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Actualizar videojuego existente
export async function actualizarVideojuego(id, data) {
  const res = await fetch(`${URL_API}/games/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Eliminar videojuego
export async function eliminarVideojuego(id) {
  const res = await fetch(`${URL_API}/games/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
