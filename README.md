# APP-RECTIFICADORA
# Sistema de Gestión para Taller y Rectificadora de Motores ⚙️

## Descripción del Proyecto
Esta es una aplicación desarrollada en Python diseñada para optimizar y administrar el flujo de trabajo de un taller mecánico y rectificadora de motores. El sistema permite llevar un control ordenado de la entrada y salida de trabajos, gestionar la información de los clientes, y administrar el stock de repuestos y presupuestos en un solo lugar.

## Características Principales (Roadmap)
El proyecto se construirá de forma modular y contempla las siguientes funcionalidades:

- **Gestión de Clientes:** Registro de datos, historial de trabajos y contacto.
- **Registro de Motores y Trabajos:** Seguimiento de piezas ingresadas (tapas de cilindro, cigüeñales, blocks, etc.), números de motor, marca y modelo.
- **Órdenes de Trabajo (Workflows):** Control de estado de las tareas (En espera, En máquina, En banco de armado, Terminado).
- **Inventario de Repuestos:** Control de stock (ej. metales, válvulas, aceite, etc.), ingresos y egresos, alertas de stock bajo.
- **Presupuestos:** Generación de cotizaciones combinando costo de mecanizado/mano de obra y lista de repuestos requeridos.

## Tecnologías Utilizadas
- **Lenguaje:** Python 3.14.2
- **Base de Datos:** SQLite (mediante la librería `sqlite3` para un almacenamiento local ligero y eficiente).
- **Arquitectura:** Separación de responsabilidades (Datos, Lógica de Negocio e Interfaz).

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
