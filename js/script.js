// 1. Captura de elementos del DOM
const formIngreso = document.getElementById('form-ingreso');
const listaOrdenes = document.getElementById('lista-ordenes');

// 2. Estado inicial desde localStorage
const STORAGE_KEY = 'ordenes_taller';
let ordenes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Calcula el próximo ID correlativo de forma segura
let contadorId = ordenes.length > 0
    ? Math.max(...ordenes.map(o => Number(o.id) || 0)) + 1
    : 1;

// Función de seguridad para prevenir inyección HTML (XSS)
function sanitizarTexto(texto) {
    const div = document.createElement('div');
    div.textContent = texto || '';
    return div.innerHTML;
}

// 3. Renderizado de la tabla completa (6 columnas alineadas con thead)
function renderizarTabla() {
    if (!listaOrdenes) return;
    listaOrdenes.innerHTML = '';

    ordenes.forEach((orden, index) => {
        const fila = document.createElement('tr');
        const idFormateado = String(orden.id || index + 1).padStart(3, '0');
        const monto = parseFloat(orden.presupuesto);
        const presupuestoFormateado = !isNaN(monto)
            ? `$${monto.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
            : '$0,00';

        fila.innerHTML = `
            <td><strong>#${idFormateado}</strong></td>
            <td><strong>${sanitizarTexto(orden.cliente)}</strong></td>
            <td>${sanitizarTexto(orden.motor)}</td>
            <td>⚙️ ${sanitizarTexto(orden.trabajo || orden.sector)}</td>
            <td><span class="badge">${presupuestoFormateado}</span></td>
            <td>
                <button type="button" class="btn-delete" data-index="${index}">
                    Eliminar
                </button>
            </td>
        `;

        listaOrdenes.appendChild(fila);
    });
}

// 4. Eliminar orden por índice y sincronizar localStorage
function eliminarOrden(index) {
    ordenes.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ordenes));
    renderizarTabla();
}

// Delegación de eventos para los botones "Eliminar"
if (listaOrdenes) {
    listaOrdenes.addEventListener('click', (evento) => {
        if (evento.target.classList.contains('btn-delete')) {
            const index = Number(evento.target.dataset.index);
            eliminarOrden(index);
        }
    });
}

// 5. Evento submit para registrar nuevas órdenes
formIngreso.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const cliente = document.getElementById('cliente').value.trim();
    const motor = document.getElementById('motor').value.trim();
    const trabajo = document.getElementById('trabajo').value.trim();
    const presupuestoInput = parseFloat(document.getElementById('presupuesto').value);

    if (!cliente || !motor || !trabajo || isNaN(presupuestoInput) || presupuestoInput < 0) {
        alert('Por favor, completa todos los campos con valores válidos.');
        return;
    }

    const nuevaOrden = {
        id: contadorId++,
        cliente: cliente,
        motor: motor,
        trabajo: trabajo,
        presupuesto: presupuestoInput.toFixed(2),
        fecha: new Date().toLocaleDateString('es-AR')
    };

    ordenes.push(nuevaOrden);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ordenes));

    renderizarTabla();
    formIngreso.reset();
});

// 6. Inicializar tabla al abrir la página
renderizarTabla();