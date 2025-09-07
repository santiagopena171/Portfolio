# Portafolio — versión responsiva

## Qué cambié y por qué
1. Tipografías fluidas con `clamp()` en los títulos para que el encabezado y los h2 escalen de forma proporcional.
2. Contenido centrado y con límite de ancho: `main` ahora tiene `max-width: 1100px` y `margin: 0 auto` para verse igual en pantallas grandes sin “estirar” los bloques.
3. Corrección del selector del encabezado: antes había un `header { font-size: 2.5rem; }` que no afectaba al título. Se cambió a `header h1` para que el tamaño se aplique correctamente.
4. Formularios más adaptables: `max-width: 600px` y `width: 100%` para que ocupen todo el ancho disponible en móvil y se mantengan contenidos en desktop.
5. Imagen 100% fluida: la imagen ya respetaba `max-width: 100%`; se mantiene para que no desborde y conserve el estilo original.
6. Ajustes móviles: media query a 480px para reducir padding en tarjetas y hacer el botón de ancho completo, manteniendo el look original pero optimizado para pantallas chicas.

## Qué no toqué
- El HTML mantiene la misma estructura y textos.
- La paleta con degradados azules en `header` y `footer`, y los fondos de secciones se mantienen tal cual.

## Cómo probar
1. Abre `index.html` en el navegador.
2. Usa las DevTools: cambia entre 320×568, 375×667, 768×1024 y 1440×900 para validar que el diseño se ve igual de prolijo en móvil, tablet y desktop.
3. Verifica que el botón “Motivame” muestre frases aleatorias y que el formulario muestre el alert al enviar.
