// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista 
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); // Normalizar el nombre eliminando espacios innecesarios

    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Inserte un nombre, por favor.");
        return; // Detener la funcion su no se recibo un nombre
    }

    // Validar que el nombre no esté duplicado en la lista 
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre "${nombreAmigo}" ya está en la lista.`);
        return;
    }

    // Agregar el nombre al array de amigos utilizando el método push
    amigos.push(nombreAmigo); 

    // Limpiar el campo de entrada para poner un nuevo nombre
    inputAmigo.value = "";

    // Actualizar la lista de amigos en el interfaz (HTML)
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar el contenido actual de la lista para evitar duplicados en el interfaz
    listaAmigos.innerHTML = ""; 

    // Recorrer el array de amigos y crear elementos <li> para cada uno
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i]; // Asignar el nombre del amigo al elemento <li>
        listaAmigos.appendChild(li); //Agregar el elemnteo <li> a la lista en el HTML
    }
}

// Función para seleccionar un amigo aleatorio de la lista 
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) { 
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return; // Detener la función si no hay amigos en la lista
    }

    // Generar un índice aleatorio basado en la cantidad de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); 

    // Obtener el nombre del amigo seleccionado aleatoriamente "Amigo Secreto"
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado "Amigo Secreto" 
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo Secreto: ${amigoSecreto}`;
}