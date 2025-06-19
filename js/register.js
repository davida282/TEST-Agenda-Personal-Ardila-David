const form = document.getElementById('registroForm');
const usuario = new Object;

form.addEventListener('submit', async (e) => {

    
    e.preventDefault();
    

     const nombre = document.getElementById('nombre').value.trim();
     const contrasena = document.getElementById('contrasena').value.trim();
     const email = document.getElementById('email').value.trim();

     

     if (
        nombre === "" || contrasena === "" || email === "") 
        {
        alert("Todos los campos deben ser completados");
        
        
      }

      
    else {

        
        usuario.nombre = nombre;
        usuario.email = email;
        usuario.contrasena = contrasena;

        alert(`\nUsuario ${usuario.nombre} registrado exitosamente`);
        form.reset();
        usuarios[nombre] = usuarioRegistrado
    
        localStorage.setItem('usuarios', JSON.stringify({
            nombre: usuario.nombre,
            email: usuario.email,
            contrasena: usuario.contrasena
          }));
    }
    
    


})

