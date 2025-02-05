// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar la lista de amigos
let amigos = [];

// Función para formatear el nombre (primera letra mayúscula, el resto minúscula)
function formatearNombre(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

// Función para validar que el nombre solo contenga letras y espacios
function validarNombre(nombre) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s$%`~!@#$^&*()_+=-]+$/; // Permite letras, espacios y caracteres especiales en español
    return regex.test(nombre);
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    let nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre valido.");
        return;
    }

    // Validar que el nombre no contenga caracteres especiales ni números
    if (!validarNombre(nombre)) {
        alert("Los nombres no pueden contener números ni caracteres especiales.");
        return;
    }

    // Formatear el nombre (primera letra mayúscula, el resto minúscula)
    nombre = formatearNombre(nombre);

    // Validar que el nombre no esté repetido
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre al array y limpiar el campo de entrada
    amigos.push(nombre);
    input.value = "";

    // Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array de amigos y agregar cada uno a la lista
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear los amigos de manera aleatoria
function sortearAmigo() {
    // Validar que haya al menos 2 amigos en la lista
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para hacer el sorteo.");
        return;
    }

    // Crear una copia del array y mezclarlo aleatoriamente
    const amigosMezclados = [...amigos].sort(() => Math.random() - 0.5);

    // Crear parejas de amigos secretos
    const resultado = [];
    for (let i = 0; i < amigosMezclados.length; i++) {
        const amigo = amigosMezclados[i];
        const amigoSecreto = amigosMezclados[(i + 1) % amigosMezclados.length]; // Circular: el último se empareja con el primero
        resultado.push(`${amigo} ➔ ${amigoSecreto}`);
    }

    // Mostrar el resultado en la interfaz
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ""; // Limpiar resultados anteriores

    resultado.forEach((res) => {
        const li = document.createElement('li');
        li.textContent = res;
        resultadoElement.appendChild(li);
    });
}

// Enfocar el campo de entrada al cargar la página
window.onload = function () {
    document.getElementById('amigo').focus();
};

// Agregar evento para detectar la tecla "Enter" en el campo de entrada
document.getElementById('amigo').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        agregarAmigo(); // Llamar a la función para agregar un amigo
    }
});
