# Para mi Shinita — Kimberly

Experiencia web de cumpleaños creada como una carta de amor digital.

## Estructura

- `index.html` — narrativa y contenido.
- `styles.css` — dirección visual, responsive y animaciones.
- `script.js` — reveals, progreso de lectura y scroll-driven image movement.
- `assets/kimberly-bastian.jpg` — fotografía central proporcionada para la experiencia.

## Ejecutar

No requiere framework ni build step. Abre `index.html` directamente en un navegador o sirve la carpeta con cualquier servidor estático.

Ejemplo:

```bash
python -m http.server 8080
```

Luego abre `http://localhost:8080`.

## Notas de diseño

- Sin librerías externas ni dependencias de runtime.
- Sin reproducción automática de audio.
- `prefers-reduced-motion` incluido.
- Mobile-first en la composición fotográfica y el cierre.
- La fotografía se utiliza como hilo narrativo, no como tarjeta decorativa.
