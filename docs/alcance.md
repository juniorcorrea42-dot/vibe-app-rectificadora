Alcance del Proyecto
1. Idea y Objetivo General
Problema que resuelve: Actualmente, el control de los motores que ingresan a la rectificadora, el seguimiento de en qué máquina se encuentran y la cotización de repuestos y mecanizado pueden desorganizarse al llevarse en papel o de forma fragmentada. Esto genera cuellos de botella en la administración y el taller.

Objetivo General: Desarrollar un sistema de gestión centralizado para optimizar el flujo de trabajo del taller de rectificación de motores en La Banda.

Público objetivo: Uso interno. El equipo de administración y los operarios del taller (recepción, rectificado de cigüeñales, cilindros, armado y entrega).

2. Objetivos Principales (Funcionalidades Clave)
Funcionalidades mínimas (MVP):

Módulo de Clientes: Registro y búsqueda de datos de contacto e historial.

Módulo de Ingreso de Motores: Carga de los datos del motor (marca, modelo) y de las piezas recibidas (tapa de cilindros, block, cigüeñal, bielas).

Tablero de Estados (Workflow): Seguimiento visual del estado del trabajo ("En espera", "En lavado", "En máquina", "En banco de armado", "Terminado").

Generador de Presupuestos: Creación de planillas de cotización claras que sumen los costos de mecanizado y los repuestos (metales, válvulas, juntas) para entregar al cliente.

Flujo básico del usuario:
El usuario (administrador) registra al cliente en el sistema.
Se crea una nueva "Orden de Trabajo" detallando qué piezas del motor ingresaron.
Se genera un presupuesto estimado combinando repuestos y mano de obra de mecanizado.
A medida que el motor avanza en el taller, el usuario actualiza su estado hasta marcarlo como "Terminado" para la entrega.

3. Límites y Fuera de Alcance
Para mantener el desarrollo acotado y manejable en esta fase inicial con IA, la versión no abarcará:
Conexión con sistemas de facturación electrónica fiscal (AFIP).
Despliegue en servidores en la nube complejos (la base de datos operará de manera local).
Una aplicación móvil nativa para que los clientes consulten el estado desde sus casas (el sistema será de uso 100% interno para el personal del taller).
Gestión avanzada de sueldos o contabilidad general de la empresa.

4. Stack Técnico Inicial
Estructura y Contenido (Frontend): HTML (para definir los formularios de ingreso, tablas de repuestos y órdenes).
Diseño y Estilos (Frontend): CSS (para dar un aspecto visual profesional, ordenado y moderno al panel de administración).
Interactividad (Frontend): JavaScript (para validaciones de campos de texto, alertas y menús dinámicos).
Lógica de Negocio y Backend: Python (para procesar los datos de las cotizaciones y el inventario).
Base de Datos: SQLite (para almacenar los clientes, órdenes y piezas de forma local, ligera y sin configuraciones complejas).
Herramientas de IA: Vibe Coding para la generación asistida de la interfaz y la lógica.