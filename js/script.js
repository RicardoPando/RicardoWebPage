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
  } else {
    // Cambia el contenido del elemento a "☀️" cuando está desactivado
    modeSwitchLabel.textContent = "☀️";
  }
});


document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".Menu").classList.toggle("mostrar_menu");
    
}