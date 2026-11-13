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