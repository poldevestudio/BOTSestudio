# BOTS · Radio & Stream (Vicente López)

> **Maqueta Web Oficial desarrollada por Poldev Estudio**  
> Estilo: **Quiet Luxury Audiovisual Streaming** · One-Page fluida, limpia y con presencia visual de alto impacto.

---

## 🧭 Dirección de Diseño & Experiencia
Inspirada en las mejores referencias del streaming profesional nacional (como Luzu TV) pero con la identidad genuina y potente de **BOTS en vivo**:

1. **Intro Loader Cinematográfico (2 Segundos)**:
   - Al ingresar a la web, la pantalla se sumerge en negro mate profundo.
   - El **logo central de BOTS late con efecto de pulso / latido cardíaco (heartbeat)** con un aura de luz durante 2 segundos con barra de progreso mínima.
   - Transición suave que disuelve la intro y revela el contenido principal con animación escalonada (GSAP).

2. **Estilo "Quiet Luxury"**:
   - Fondo negro obsidiana (`#090a0f`) con superficies en grafito oscuro (`#10121a`).
   - Cero recargo cyberpunk, sin consolas saturadas ni elementos visuales innecesarios.
   - Tipografía refinada: **Syne** para titulares contundentes, **Plus Jakarta Sans** para lectura impecable y **Space Grotesk** para badges y metadatos.
   - Toques sutiles de color: blanco puro, azul hielo (`#38bdf8`) y pulso rojo discreto para el estado en directo (`#ff3355`).

3. **Estructura One-Page con Contenido Estratégico**:
   - **Header Glassmorphism**: Logo BOTS, menú limpio (`En Vivo`, `Programación`, `Sessions`, `El Estudio`), indicador de señal y accesos a YouTube, Twitch, Kick e Instagram.
   - **Hero Cinema Stage**:
     - Titular editorial: *"El canal de streaming donde vos elegís qué mirar"*.
     - Marco cinematográfico 16:9 con preview visual, estado en vivo, programa destacado y botón central para sintonizar en directo (abre reproductor oficial en modal).
     - Fila rápida de canales oficiales con enlaces directos a cada plataforma.
   - **Grilla de Programación**:
     - Filtros por día (`Todos`, `Miércoles`, `Jueves`, `Viernes`, `Domingos`).
     - Tarjetas de diseño editorial para los ciclos:
       - **Peligro Vos Elegís** (Miércoles 19 a 21 hs · Gustavo "El Pela" Silvero, Fabi Silvero & equipo).
       - **Falta de Todo** (Jueves 19 a 21 hs · Braian Burgos, Cattrize y Delni Ondaspot).
       - **La Promoción** (Viernes 19 a 21 hs · Hernán Leyva, Roderick Mac Lean, Nicolás La Rocca & Julieta Liapchuc).
       - **Estamos Más Allá** (Domingos 15 a 17 hs · Cultura urbana & chill).
   - **BOTS Sessions**:
     - Spotlight visual para las sesiones de música en vivo (Caras de Liebre / Redondos, Mili Soso / Amy Winehouse).
   - **El Estudio (Vicente López)**:
     - Ficha técnica de calidad de producción: microfonía Shure SM7B, cámaras 4K, switcher vMix y sala insonorizada.
     - Botón de conversión directa a WhatsApp para alquilar horas de estudio o transmitir nuevos ciclos.
   - **Footer & Floating WhatsApp Pill**:
     - Botón flotante siempre accesible en móviles y desktop con animación de pulso.

---

## 📱 100% Mobile Responsive
- Probado y optimizado meticulosamente para pantallas de smartphones (iPhone / Android) y tablets.
- Menú lateral deslizante (Drawer) para navegación rápida en pantallas pequeñas.
- Videos y tarjetas en proporciones fluidas que evitan cualquier tipo de desborde horizontal.
- Botones de acción y enlaces a WhatsApp accesibles al pulgar con un solo toque.

---

## 📂 Archivos del Proyecto
```
WEBSMAQUETAS/BOTS/
├── index.html            # Estructura limpia One-Page con Intro Loader
├── style.css             # Estilos Quiet Luxury, Glassmorphism y Mobile Responsive
├── app.js                # Lógica de intro (2s), reloj BA, filtros y modal
├── README.md             # Documentación estratégica
└── assets/
    ├── logos/            # Logos transparentes de BOTS y de cada ciclo
    └── miniaturas/       # Miniaturas oficiales en formato WebP de alta velocidad
```
