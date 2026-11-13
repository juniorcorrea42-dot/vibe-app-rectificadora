// Capturamos los elementos del DOM
const formIngreso = document.getElementById('form-ingreso');
const listaOrdenes = document.getElementById('lista-ordenes');
let contadorId = 1;

// Evento principal: Registrar nuevo motor
formIngreso.addEventListener('submit', function(evento) {
    // Prevenimos que la página se recargue al enviar el formulario
    evento.preventDefault();

    // Capturamos los valores de los inputs
    const cliente = document.getElementById('cliente').value;
    const motor = document.getElementById('motor').value;
    const trabajo = document.getElementById('trabajo').value;
    const presupuesto = document.getElementById('presupuesto').value;

    // Creamos una nueva fila para la tabla
    const nuevaFila = document.createElement('tr');

    nuevaFila.innerHTML = `
        <td>#00${contadorId}</td>
        <td><strong>${cliente}</strong></td>
        <td>${motor}</td>
        <td>${trabajo}</td>
        <td>$${parseFloat(presupuesto).toFixed(2)}</td>
        <td><span class="badge">En Proceso</span></td>
    `;

    // Añadimos la fila a la tabla
    listaOrdenes.appendChild(nuevaFila);

    // Limpiamos el formulario para el siguiente ingreso y aumentamos el ID
    formIngreso.reset();
    contadorId++;
});