document.getElementById('registrationLink').addEventListener('click', function() {
    // Verificar qué opción está seleccionada
    const userRadio = document.getElementById('user');
    const companyRadio = document.getElementById('company');

    if (userRadio.checked) {
        // Redirigir al index de usuario si la opción de usuario está seleccionada
        window.location.href = 'index.html';
    } else if (companyRadio.checked) {
        // Redirigir al index de empresa si la opción de empresa está seleccionada
        window.location.href = 'empresa.html';
    } else {
        // Mostrar un mensaje de error si ninguna opción está seleccionada
        alert('Selecciona una opción antes de registrarte.');
    }
});

// JavaScript para controlar el carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Oculta todas las diapositivas
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    // Muestra la diapositiva actual
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Muestra la primera diapositiva al cargar la página
showSlide(currentSlide);

// Cambia a la siguiente diapositiva cada 5 segundos (5000 milisegundos)
setInterval(nextSlide, 5000);

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.querySelector('input[name="role"]:checked').value;
    // Verificar si el usuario existe en el localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === username && storedUser.password === password && storedUser.role === role) {
        // Mostrar mensaje de bienvenida
        alert('¡Bienvenido, ' + username + '!');
    } else {
        // Si el usuario no existe o los datos no coinciden, mostrar mensaje de error
        alert('Usuario o contraseña incorrectos.');
    }
}
