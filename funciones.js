const form = document.querySelector('form');
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', (e) => {
        if (nombre.value === '' ) {
            e.preventDefault();
            alert('Por favor complete el nombre.');
        }
    });
    form.addEventListener('submit', (e) => {
        if (correo.value === '' ) {
            e.preventDefault();
            alert('Por favor complete el correo.');
        }
    });
    form.addEventListener('submit', (e) => {
        if (mensaje.value === '') {
            e.preventDefault();
            alert('Por favor complete el mensaje.');
        }
    });
