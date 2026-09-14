# Actualización visual sobria y profesional

## Objetivo
Reemplazar la estética HUD/cyberpunk de las tarjetas de servicios y los CTA relacionados por un lenguaje más limpio, sobrio y cercano a Lovable, conservando el fondo oscuro y el violeta de AgaruCorp como acento.

## Cambios
- Rediseñar las tarjetas de servicios con superficies oscuras suaves, bordes discretos, esquinas moderadamente redondeadas, jerarquía tipográfica clara y sombras mínimas.
- Eliminar de esas tarjetas los cortes de esquina, scanlines, glitch, numerales decorativos, códigos técnicos y brillos neón.
- Mantener intactos los textos, iconos, detalles desplegables y comportamiento de apertura/cierre.
- Unificar los CTA compartidos con botones modernos: tipografía legible, formato normal, radio moderado, contraste claro y transiciones sutiles.
- Aplicar el mismo criterio a los CTA directos que todavía replican la estética anterior, incluidos los accesos a casos de estudio.
- Conservar el violeta principal únicamente para foco, selección y acciones destacadas, sin efectos futuristas.

## Verificación
- Comprobar tarjetas cerradas y abiertas, estados hover/focus y enlaces.
- Revisar el resultado en escritorio y móvil para evitar desbordes o saltos de tamaño.
- Confirmar que la vista compila sin errores.

## Detalles técnicos
- Reutilizar los tokens semánticos existentes (`background`, `card`, `border`, `primary`, `muted`) en lugar de colores incrustados.
- Centralizar el nuevo aspecto de CTA en el botón compartido y ajustar únicamente los CTA equivalentes que no lo usan.
- Respetar `prefers-reduced-motion` y limitar las transiciones a color, borde, sombra y desplazamientos mínimos.
