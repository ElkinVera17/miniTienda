Mini Tienda Online
Descripción

Mini Tienda Online es una aplicación web que simula una tienda básica integrando distintas APIs externas. La aplicación carga automáticamente una imagen de perfil, consume usuarios y productos desde servicios REST, permite registrar usuarios locales que se conservan en el navegador mediante localStorage, y muestra datos curiosos de gatos bajo demanda. Todo el flujo está construido con HTML, Bootstrap y JavaScript, utilizando fetch, async/await y manejo de errores con try...catch.

Tecnologías usadas
HTML5
CSS3
Bootstrap 5
JavaScript (Vanilla)
Fetch API
localStorage
APIs consumidas
JSONPlaceholder — usuarios simulados
DummyJSON — productos simulados
Dog CEO API — imagen de perfil
Cat Fact API — datos curiosos de gatos
Estructura del proyecto
miniTienda/
├── 
├── 
├── 
└──
Instalación y ejecución
Clonar el repositorio:
   git clone https://github.com/ElkinVera17/miniTienda.git
Ingresar a la carpeta del proyecto:
   cd miniTienda
Abrir el archivo index.html directamente en el navegador (doble clic o arrastrarlo a una ventana del navegador).
Alternativamente, para evitar restricciones del navegador con las peticiones fetch, abrir el proyecto con la extensión Live Server de Visual Studio Code:
Instalar la extensión "Live Server".
Clic derecho sobre index.html.
Seleccionar "Open with Live Server".
No se requiere instalar dependencias ni ejecutar comandos de npm; el proyecto funciona con archivos estáticos.
Autor

Vera Elkin
