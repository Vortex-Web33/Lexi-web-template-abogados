---
target: Landing page LexCore (src/pages/[lang]/index.astro)
total_score: 18
max_score: 32
na_heuristics: 7,9
p0_count: 2
p1_count: 3
timestamp: 2026-08-20T16-24-21Z
slug: src-pages-lang-index-astro
---

# Critica de Diseño / UX — LexCore Landing Page

**Method: dual-agent**

## Design Health Score

| #         | Heuristica                | Puntaje         | Problema clave                                                                  |
| --------- | ------------------------- | --------------- | ------------------------------------------------------------------------------- |
| 1         | Visibilidad del estado    | 2               | Badge "SCROLL TO EXPLORE" sin progreso real; sin indicador de posicion          |
| 2         | Match con el mundo real   | 2               | Watermark "LAWYER" sin traducir en /es/; "6K+"; registro informal               |
| 3         | Control y libertad        | 3               | Esc y links cierran el menu, sin focus trap                                     |
| 4         | Consistencia y estandares | 2               | Numeros contradictorios; marca duplicada; icono CTA header SVG inline vs lucide |
| 5         | Prevencion de errores     | 3               | Sin formularios en el home; stats contradictorios                               |
| 6         | Reconocimiento            | 3               | Badge circular parece boton pero es pointer-events-none                         |
| 7         | Flexibilidad y eficiencia | n/a             | Superficie persuasiva de una pantalla                                           |
| 8         | Estetica minimalista      | 2               | Hero atestado (6 objetos focales)                                               |
| 9         | Recuperacion de errores   | n/a             | Nada puede fallar en el home                                                    |
| 10        | Ayuda y documentacion     | 1               | Footer help es texto muerto; sin FAQ                                            |
| **Total** |                           | **18/32 (56%)** | **Aceptable**                                                                   |

## Verdicto de Especificidad de Diseño

Categoria-intercambiable con identidad criminal pegada al andamiaje equivocado. Todo el contenido penal vive en el hero; footer y servicios son corporativos y no listan defensa penal. El H1 es generico. El watermark "LAWYER" es la palabra menos especifica posible.

Detector: 1 hallazgo (overused-font, Inter) — falso positivo parcial (body font intencional). Browser visualization no disponible.

## Impresion General

Paleta y tipografia disciplinadas, i18n/SEO impecable. El hero es una pelea entre dos textos gigantes, el marco fino del diseno no esta renderizado, y la pagina termina en un footer sin acciones funcionales. Mayor problema: dos conjuntos de numeros que se contradicen en el mismo viewport.

## Lo que Funciona

1. Sistema de color editorial cohesivo (ivory→ink + bronce/mocha).
2. Motion accesible (prefers-reduced-motion, Lenis stop con menu, Esc, focus-visible).
3. Infraestructura i18n/SEO completa (hreflang, canonical, OG).

## Problemas Prioritarios

[P0-1] Footer texto muerto, no enlaces (Footer.astro:27) — <li> sin <a>/<href> con hover falso. Fix: mapear rutas reales, mailto, tel.
[P0-2] Contradicciones numericas e identidad (hero 30+/12,000 penal vs metrics 18+/100+/6K+; penal vs footer corporativo). Fix: set canonico de stats y posicionamiento unico.
[P1-3] Marco fino del hero invisible (Hero.astro:47-52) — div vacio sin borde/fondo. Fix: anadir border + fondo.
[P1-4] Watermark hardcodeado "LAWYER" sin traducir (index.astro:29). Fix: mover a i18n, traducir ("ABOGADOS").
[P1-5] Menu movil sin focus trap ni inert (Header.astro:139-163). Fix: inert + mover/restaurar foco.

## Red Flags por Persona

Jordan: numeros contradictorios matan la confianza; identidad ambivalente; watermark como plantilla.
Riley: sin telefono/confidencialidad/tiempo de respuesta en el landing; footer muerto en la decision; "95%" sin metodologia.
Casey: fondo enfocable con menu abierto; 8.5px ilegible; watermark reducido en movil; badge medio fuera.

## Observaciones Menores

- CTA header desktop aun SVG inline (Header.astro:65) vs astro-icon en el resto.
- alt="Lady Justice" sin localizar.
- og.jpg duplica a dama-justicia.jpg.
- Sin skip-to-content.
- Sin aria-current en nav; switcher idioma sin aria-label.
- Formulario contacto no funcional (action="#", sin autocomplete, sin errores).
- Imagenes sin pipeline responsivo; office.jpg 305KB.
- 404 hardcodea /en.
- FOUC por gsap.from.

## Preguntas para Considerar

1. Sin los numeros, ¿sabrías que hace la firma?
2. ¿Acusado penal del hero o consejo corporativo del footer?
3. ¿El presupuesto de animación esta bien gastado (watermark invisible en movil, badge muerto)?
