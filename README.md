# Sistema de Gestión para Taller y Rectificadora de Motores ⚙️ (APP-RECTIFICADORA)

## Descripción
Esta es una aplicación diseñada para optimizar y administrar el flujo de trabajo de un taller mecánico y rectificadora de motores. El sistema permite llevar un control ordenado de la entrada y salida de trabajos, gestionar la información de los clientes, y administrar el stock de repuestos y presupuestos en un solo lugar.

## Objetivos SMART
- **Específico y Medible:** Desarrollar e implementar el módulo principal de registro de órdenes de trabajo mediante una interfaz web interactiva y almacenamiento local.
- **Alcanzable y Relevante:** Eliminar el uso de papel en el registro de motores ingresados (sector de lavado, cilindros, armado y administración), digitalizando el tablero de control del taller.
- **Tiempo:** Tener un Prototipo Mínimo Viable (MVP) con interfaz funcional en un plazo de 4 semanas.

## Límites del Proyecto
En esta fase inicial, el proyecto **NO** incluirá:
- Conexión a bases de datos o servidores en la nube (todo operará en entorno local).
- Autenticación de múltiples usuarios con roles y contraseñas.
- Facturación fiscal electrónica ni conexión con entidades gubernamentales/bancarias.

## Tecnologías utilizadas
Para el desarrollo de este proyecto se utilizarán:
- **Frontend (Interfaz):** HTML5, CSS3 y JavaScript (ES6).
- **Backend y Datos (Próxima fase):** Python 3.14.2 y SQLite (`sqlite3`).
- **Metodología:** Vibe Coding (Desarrollo asistido por IA).

---

## Características Principales (Roadmap)
El proyecto se construirá de forma modular y contempla las siguientes funcionalidades:
- **Gestión de Clientes:** Registro de datos, historial de trabajos y contacto.
- **Registro de Motores y Trabajos:** Seguimiento de piezas ingresadas (tapas de cilindro, cigüeñales, blocks, etc.), marca y modelo.
- **Órdenes de Trabajo (Workflows):** Control de estado de las tareas por sector (Lavadero, Cilindros, Armado, Administración).
- **Inventario de Repuestos:** Control de stock (metales, válvulas, juntas, etc.), ingresos y egresos.
- **Presupuestos:** Generación de cotizaciones combinando costo de mecanizado/mano de obra y lista de repuestos requeridos.

## Estructura del Proyecto
```text
APP-RECTIFICADORA/
│
├── index.html               # Interfaz principal (Dashboard de órdenes)
├── README.md                # Documentación principal del proyecto
├── ai-context.md            # Contexto y lineamientos de estilo para la IA
│
├── css/                     # Estilos visuales modulares
│   └── styles.css           # Diseño industrial del panel
│
├── js/                      # Lógica funcional del Frontend
│   └── script.js            # Interactividad y carga dinámica de órdenes
│
└── docs/                    # Documentación de planificación
    └── alcance.md           # Definición de alcance y MVP
```
    ## 🔄 Bitácora de Iteración y Pruebas con IA (Vibe Coding)

Durante el desarrollo del MVP para la rectificadora, el código generado por la IA fue sometido a pruebas locales en navegador, dando lugar a las siguientes iteraciones correctivas:

### Iteración 1: Alineación de estructura modular y rutas de archivos ###
* **Prompt Inicial:** Solicitud de generación de estructura base (`index.html`, hoja de estilos y lógica JS) para el tablero de órdenes de trabajo de los sectores del taller (Lavadero con Lucas/Nico, Cilindros con Máximo, Armado con Álvaro y Administración con Tomás).
* **Prueba y Problema Detectado:** Al organizar el repositorio en carpetas modulares (`css/styles.css`) y probar en el navegador, los estilos y la captura del formulario fallaban debido a discrepancias entre los nombres/rutas generados por defecto (`style.css` vs `styles.css` y ubicación de `script.js`). Además, el `README.md` inicial mencionaba una app de consola, contradiciendo la nueva interfaz web.
* **Ajuste Realizado:** Se auditaron las etiquetas `<link>` y `<script>` en `index.html` para apuntar a las rutas reales del árbol del proyecto y se actualizó la documentación de alcance a una arquitectura Frontend Web.

### Iteración 2: Persistencia de datos en el navegador (`localStorage`) ###
* **Prompt Inicial:** Generación del evento `submit` en `script.js` para capturar los datos del motor e insertarlos en la tabla del DOM.
* **Prueba y Problema Detectado:** Al probar la carga de órdenes en Chrome, los registros inicialmente no se guardaban o desaparecían por completo al recargar la página (`F5`), ya que el primer script de la IA solo manipulaba el DOM en memoria volátil sin almacenamiento.
* **Prompt de Ajuste:** *"A la hora de probar la aplicación no se guardan los nuevos registros"*.
* **Solución Técnica:** Se refactorizó `script.js` incorporando `localStorage.getItem` y `localStorage.setItem` con serialización JSON (`ordenes_taller`), logrando que las órdenes ingresadas persistan al cerrar o refrescar el navegador, y calculando el `contadorId` de forma dinámica según el último registro guardado.

### Iteración 3: Usabilidad (UX) y visibilidad de encabezados en la tabla ###
* **Prueba y Problema Detectado:** Con la persistencia funcionando, al insertar múltiples órdenes de motores en la tabla, los datos aparecían apilados sin referencia visual clara de qué representaba cada columna.
* **Prompt de Ajuste:** *"Ahora sí se agregan los registros pero no sé qué columna representa qué dato"*.
* **Solución Técnica:** 
  1. Se verificó la estructura semántica de `<thead>` en `index.html` con las 5 columnas clave (`ID Orden`, `Cliente`, `Motor / Vehículo`, `Sector Asignado`, `Estado Actual`).
  2. Se ajustó la regla `th` en `css/styles.css` aplicando un fondo de alto contraste (`#2d3748`) con tipografía blanca en mayúsculas.
  3. Se enriqueció el renderizado en `script.js` con formato visual e íconos por celda para facilitar la lectura rápida en el taller.