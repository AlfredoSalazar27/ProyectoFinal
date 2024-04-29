// Función para enviar una solicitud POST al backend para iniciar sesión
function iniciarSesion(nombreUsuario, contrasena) {
    // Datos del usuario a enviar al backend
    const datosUsuario = {
        username: nombreUsuario,
        password: contrasena
    };

    // Realizar la solicitud POST al backend
    fetch('http://localhost:27017/iniciar_sesion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosUsuario)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Si las credenciales son válidas, mostrar un mensaje de bienvenida
            const usuario = data.usuario; // Aquí deberías tener los datos del usuario desde la API
            console.log('¡Bienvenido, ' + usuario.nombre + '! Has iniciado sesión correctamente.');
        } else {
            // Si las credenciales no son válidas, mostrar un mensaje de error
            console.error('Error: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error al iniciar sesión:', error);
    });
}

// Ejemplo de uso: llamada a la función iniciarSesion con los datos ingresados por el usuario
const nombreUsuario = document.getElementById('nombreUsuario').value;
const contrasena = document.getElementById('contrasena').value;

iniciarSesion(nombreUsuario, contrasena);


