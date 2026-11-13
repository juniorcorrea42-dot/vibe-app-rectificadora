# Sistema de Gestión para Taller y Rectificadora de Motores ⚙️ (APP-RECTIFICADORA)

## Descripción
Esta es una aplicación desarrollada en Python diseñada para optimizar y administrar el flujo de trabajo de un taller mecánico y rectificadora de motores. El sistema permite llevar un control ordenado de la entrada y salida de trabajos, gestionar la información de los clientes, y administrar el stock de repuestos y presupuestos en un solo lugar.

## Objetivos SMART
*   **Específico y Medible:** Desarrollar e implementar el módulo principal de registro de clientes y órdenes de trabajo (CRUD completo) utilizando SQLite.
*   **Alcanzable y Relevante:** Eliminar el uso de papel en el registro de motores ingresados, centralizando la información en una base de datos local.
*   **Tiempo:** Tener un Prototipo Mínimo Viable (MVP) funcional por consola en un plazo de 4 semanas.

## Límites del Proyecto
En esta fase inicial, el proyecto **NO** incluirá:
- Una Interfaz Gráfica de Usuario (GUI) o entorno web (se operará inicialmente a través de un menú de consola).
- Conexión a bases de datos en la nube (todo será local).
- Facturación fiscal electrónica ni conexión con entidades gubernamentales/bancarias.

## Tecnologías utilizadas
Para el desarrollo de este proyecto se utilizarán:
- Python 3.14.2, HTML, CSS, JS y Vibe Coding
---

## Características Principales (Roadmap Futuro)
El proyecto se construirá de forma modular y contempla las siguientes funcionalidades:
- **Gestión de Clientes:** Registro de datos, historial de trabajos y contacto.
- **Registro de Motores y Trabajos:** Seguimiento de piezas ingresadas (tapas de cilindro, cigüeñales, blocks, etc.), números de motor, marca y modelo.
- **Órdenes de Trabajo (Workflows):** Control de estado de las tareas (En espera, En máquina, En banco de armado, Terminado).
- **Inventario de Repuestos:** Control de stock (ej. metales, válvulas, aceite, etc.), ingresos y egresos, alertas de stock bajo.
- **Presupuestos:** Generación de cotizaciones combinando costo de mecanizado/mano de obra y lista de repuestos requeridos.

## Estructura del Proyecto (Propuesta inicial)
```text
gestion_taller/
│
├── main.py              # Archivo de entrada y ejecución principal
├── README.md            # Documentación del proyecto
│
├── database/            # Módulo de base de datos
│   ├── __init__.py
│   ├── conexion.py      # Conexión a SQLite y creación de tablas
│   └── consultas.py     # Funciones CRUD (Crear, Leer, Actualizar, Borrar)
│
├── logica/              # Módulo de operaciones y reglas de negocio
│   ├── __init__.py
│   ├── clientes.py
│   ├── motores.py
│   ├── inventario.py
│   └── presupuestos.py
│
└── interfaz/            # Módulo de interacción con el usuario
    ├── __init__.py
    └── menu.py          # Menú de consola (próximamente migrable a GUI)