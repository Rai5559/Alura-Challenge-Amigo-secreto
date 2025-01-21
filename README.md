🎉 Amigo Secreto

Este proyecto es una aplicación interactiva desarrollada en HTML, CSS y JavaScript que permite gestionar y sortear nombres de amigos para jugar al "Amigo Secreto". La interfaz es dinámica, atractiva y fácil de usar.

✨ Características Principales

📝 1. Agregar Nombres

Los usuarios pueden agregar nombres escribiéndolos en un campo de texto.

Validación incluida para garantizar que el nombre sea válido (sin caracteres especiales no permitidos).

Los nombres se añaden dinámicamente a una lista visible.

🖌️ 2. Renderizado Dinámico de la Lista

Los nombres agregados se muestran como una lista ordenada.

Cada nombre tiene botones para editar o eliminar.

✏️ 3. Editar Nombres

Actualiza un nombre de la lista haciendo clic en el botón de edición.

Reemplaza el nombre actual por un campo de entrada editable.

Botón "✔" para guardar cambios con validación.

Solo se puede editar un nombre a la vez.

❌ 4. Eliminar Nombres

Elimina un nombre de la lista con un solo clic.

La lista se actualiza dinámicamente para reflejar los cambios.

🎲 5. Sortear un Amigo Secreto

Selecciona un nombre al azar de la lista.

El nombre del ganador se muestra en un diseño destacado.

Si no hay nombres, se muestra un mensaje de alerta.

🔄 6. Reiniciar la Aplicación

Después de sortear, aparece un botón "Reiniciar" para recargar la aplicación.

Limpia la lista de nombres y permite empezar desde cero.

📂 Estructura del Proyecto

Archivos y Carpetas

index.html: Contiene la estructura principal del proyecto.

style.css: Define los estilos visuales.

app.js: Gestiona la lógica, validaciones y manipulación del DOM.

Componentes Principales

Lista de Nombres:

Campo de entrada y botones de acción (editar y eliminar).

Contenedor del Ganador:

Destaca el nombre sorteado con un botón para reiniciar.

🚀 Instrucciones para Usar

Abre index.html en tu navegador.

Agrega nombres usando el campo de texto.

Edita o elimina nombres según sea necesario.

Haz clic en "Sortear amigo" para seleccionar un ganador.

Usa "Reiniciar" para comenzar de nuevo.

⚙️ Funciones Clave

🔹 1. addFriend

Valida y agrega un nombre al arreglo friendsArray, actualizando la lista en el DOM.

🔹 2. renderList

Renderiza la lista de nombres en el DOM, incluyendo los botones de acción.

🔹 3. deleteFriend

Elimina un nombre del arreglo y actualiza la lista.

🔹 4. updateFriend

Permite editar un nombre mediante un campo de entrada y validación.

🔹 5. drawFriend

Selecciona un nombre al azar, lo muestra como ganador y oculta la lista.

🔹 6. resetAll

Limpia la lista y reinicia el estado de la aplicación.

🎨 Estilo y Diseño

🌟 1. Contenedor del Ganador

Fondo llamativo: Colores claros y bordes resaltados.

Título "¡Seleccionado!": Diseñado con fuentes estilizadas.

🌟 2. Botones Interactivos

Efectos hover para mejorar la experiencia del usuario.

Colores diferenciados para cada acción.

📋 Requisitos

Navegador web moderno (Chrome, Firefox, Edge, etc.).

🌟 Futuras Mejoras

Animación para mostrar al ganador.

Mejorar la experiencia en dispositivos móviles.

🏆 Contribuciones

¡Se agradecen sugerencias y mejoras para este proyecto!
Si deseas contribuir, puedes clonar el repositorio y enviar un pull request. 😊

Disfruta usando esta aplicación para tus eventos de Amigo Secreto. 🎁

