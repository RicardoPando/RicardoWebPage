// Función para cambiar entre modos claro y oscuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Almacenar la preferencia del usuario en localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
}

// Obtener la preferencia de modo almacenada en localStorage
const savedMode = localStorage.getItem('dark-mode');

if (savedMode === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Manejar eventos de cambio de conmutador
const modeSwitch = document.getElementById('mode-switch');
modeSwitch.addEventListener('change', toggleDarkMode);

// Selecciona el elemento de etiqueta (label) por su ID
const modeSwitchLabel = document.querySelector('.switch-label');

// Agrega un evento de escucha al cambio del interruptor
document.querySelector('#mode-switch').addEventListener('change', function() {
  // Verifica si el interruptor está activado o desactivado
  if (this.checked) {
    // Cambia el contenido del elemento a "🌙" cuando está activado
    modeSwitchLabel.textContent = "🌙";
    const menu = document.getElementById('menu')
    menu.style.color = 'black'; 

    const barras_menu = document.getElementById('icon_menu'); // Obtén el elemento SVG por su ID
// Luego, puedes acceder a los elementos rect dentro del SVG utilizando querySelectorAll
    const rects = barras_menu.querySelectorAll('rect');
    // Ahora, puedes trabajar con los elementos rects como una colección NodeList
    // Por ejemplo, cambiar su color de fondo a blanco
    rects.forEach(rect => {
        rect.setAttribute('fill', 'white');
    });
  } else {
    // Cambia el contenido del elemento a "☀️" cuando está desactivado
    modeSwitchLabel.textContent = "☀️";
    const barras_menu = document.getElementById('icon_menu'); // Obtén el elemento SVG por su ID
    // Luego, puedes acceder a los elementos rect dentro del SVG utilizando querySelectorAll
        const rects = barras_menu.querySelectorAll('rect');
        // Ahora, puedes trabajar con los elementos rects como una colección NodeList
        // Por ejemplo, cambiar su color de fondo a blanco
        rects.forEach(rect => {
            rect.setAttribute('fill', 'black');
        });
  }
});


document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".Menu").classList.toggle("mostrar_menu");
    
}