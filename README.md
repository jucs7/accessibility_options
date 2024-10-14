# Accessibility Options

The **Accessibility Options** module provides users with the ability to enhance website accessibility by adjusting font size and switching to high contrast mode. This module includes a block that can be placed anywhere in the interface and provides buttons for easy interaction with these options.

## Features

- **Increase and decrease font size** in adjustable increments.
- **High contrast mode** to improve readability.
- **Simple interface** with easy-to-use buttons.
- **Customizable styles** via CSS.

## Installation

1. **Download the module**:
   - Clone the repository or download the source code and place it in the custom modules directory of Drupal:
     ```
     modules/custom/accessibility_options/
     ```

2. **Enable the module**:
   - Access the Drupal administration interface and go to **Extend**.
   - Search for "Accessibility Options" in the list and enable the module.

3. **Configure the module**:
   - Once enabled, go to the block administration page.
   - Add the "Accessibility Options" block to the **Content** region of your theme.

## Usage

Once installed and enabled, the block will appear on the right side of the screen. Users will be able to:

- **Increase font size** by clicking the corresponding button.
- **Decrease font size** by clicking its respective button.
- **Activate high contrast mode** for easier reading in low-light environments.

## Customization

- You can modify the module's styles by editing the `css/accessibility_options.css` file to suit the needs of your website.
- Change colors, font sizes, or any other styles to your liking.

## Code

The module includes the following files:

- **accessibility_options.module**: The main module file.
- **accessibility_options.libraries.yml**: Definition of CSS and JavaScript libraries.
- **css/accessibility_options.css**: Styles for the block and buttons.
- **js/accessibility_options.js**: JavaScript logic for handling events.
- **templates/accessibility-options-block.html.twig**: Twig template for the accessibility block.

---

# Accessibility Options

El módulo **Accessibility Options** proporciona a los usuarios la capacidad de mejorar la accesibilidad del sitio web mediante el ajuste del tamaño de la fuente y el cambio al modo de alto contraste. Este módulo incluye un bloque que puede ser colocado en cualquier parte de la interfaz y proporciona botones para interactuar fácilmente con estas opciones.

## Características

- **Aumentar y disminuir el tamaño de la fuente** en incrementos ajustables.
- **Modo de alto contraste** para mejorar la legibilidad.
- **Interfaz simple** con botones fáciles de usar.
- **Estilo personalizable** a través de CSS.

## Instalación

1. **Descargar el módulo**:
   - Clona el repositorio o descarga el código fuente y colócalo en el directorio de módulos personalizados de Drupal:
     ```
     modules/custom/accessibility_options/
     ```

2. **Habilitar el módulo**:
   - Accede a la interfaz de administración de Drupal y ve a **Extend** (Extender).
   - Busca "Accessibility Options" en la lista y habilita el módulo.

3. **Configurar el módulo**:
   - Una vez habilitado, dirígete a la página de administración de bloques.
   - Agrega el bloque "Accessibility Options" a la región **Contenido** de tu tema.

## Uso

Una vez instalado y habilitado, el bloque aparecerá en el lado derecho de la pantalla. Los usuarios podrán:

- **Aumentar el tamaño de la fuente** haciendo clic en el botón correspondiente.
- **Disminuir el tamaño de la fuente** haciendo clic en su botón respectivo.
- **Activar el modo de alto contraste** para facilitar la lectura en entornos con poca luz.

## Personalización

- Puedes modificar los estilos del módulo editando el archivo `css/accessibility_options.css` para adaptarlo a las necesidades de tu sitio web.
- Cambia los colores, los tamaños de fuente, o cualquier otro estilo a tu gusto.

## Código

El módulo incluye los siguientes archivos:

- **accessibility_options.module**: Archivo principal del módulo.
- **accessibility_options.libraries.yml**: Definición de bibliotecas de CSS y JavaScript.
- **css/accessibility_options.css**: Estilos para el bloque y los botones.
- **js/accessibility_options.js**: Lógica de JavaScript para el manejo de eventos.
- **templates/accessibility-options-block.html.twig**: Plantilla Twig para el bloque de accesibilidad.
