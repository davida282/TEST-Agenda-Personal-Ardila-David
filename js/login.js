import { localStorage } from "./register";
const form = document.getElementById('form');
const emailInput = localStorage.getItem('email');
const contrasenaInput = localStorage.getItem('contrasena');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const contrasena = contrasenaInput.value.trim();

    if (email === "" || contrasena === "") {
        alert("Porfavor, complete los campos vacios para avanzar");
    }

    try {
        for (let nombre in usuarios) {
            const usuario = usuarios[nombre]

            if (usuario.email === email && usuario.contrasena === contrasena) {
                accesoConcedido = true;

                localStorage.setItem ('usuarioActivo', JSON.stringify({
                    id: nombre,
                    nombre: usuario.nombre,
                    email: usuario.email,
                    contrasena : usuario.contrasena
                }));

                window.location.href = 'dashboard.js';
                break;
            };

            if (!accesoConcedido) {
                alert("Correo o contraseña incorrectos, ingrese los datos nuevamente.");
            } else {
            alert("No hay usuarios registrados en el sistema con ese correo.");
            }
            
        }
    } catch (error) {
        console.error("Error durante el login:", error);
        alert("Ocurrió un error al iniciar sesión.");
      }
})