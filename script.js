
/* 1. CONFIGURACIÓN DEL NEGOCIO (¡El único lugar que vas a tocar!) */
const config = {
    fondo: "img/fondoMYF.jpeg",
    negocio: "Mate y Folclore",
    slogan: "Personalizá tus momentos con láser",
    whatsapp: "5491100000000", // TU NÚMERO REAL (sin + ni espacios)
    
    // Colores (Esto sobrescribe al CSS si quisieras, pero por ahora lo dejamos simple)
    
    // CATÁLOGO DE PRODUCTOS (Tu Vidriera)
    productos: [
        {
            id: 1,
            titulo: "Mate 'Maravilla' Martinez",
            precio: 20000,
            foto: "img/mateMaravilla.jpeg", // Asegurate que la foto exista
            descripcion: "Virola de alpaca y cuero crudo."
        },
        {
            id: 2,
            titulo: "Vaso Fernetero",
            precio: 6000,
            foto: "img/vasosFerneteros.jpeg",
            descripcion: "Acero inoxidable, grabado láser."
        },
        {
            id: 3,
            titulo: "Mate camionero",
            precio: 22000,
            foto: "img/mateMarron.jpeg",
            descripcion: "Virola de alpaca, con grabado laser."
        },
        // ¡Acá podés copiar y pegar para agregar más!
    ]
};

/* 2. LÓGICA DEL SISTEMA (No hace falta tocar esto seguido) */

document.addEventListener('DOMContentLoaded', () => {

    // Definís la ruta de la imagen (puede venir de una variable o base de datos)
    const hero = document.getElementById('hero');
    const opacidad = 0.6; // Para que el texto se lea bien sobre la foto

    // Aplicamos el estilo
    hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,${opacidad}), rgba(0,0,0,${opacidad})), url("${config.fondo}")`;
    
    // A. Cargar datos del Negocio
    document.getElementById('nombre-negocio').innerText = config.negocio;
    document.getElementById('slogan-negocio').innerText = config.slogan;
    document.title = config.negocio; // Cambia la pestaña del navegador

    // B. Cargar Productos (El Bucle Mágico)
    const contenedor = document.getElementById('contenedor-productos');

    config.productos.forEach(producto => {
        // Creamos el HTML de cada tarjeta usando "Template String" (las comillas torcidas ``)
        const tarjetaHTML = `
            <article class="producto-card">
                <img src="${producto.foto}" alt="${producto.titulo}">
                <div class="info-producto">
                    <h3>${producto.titulo}</h3>
                    <p>${producto.descripcion}</p>
                    <span class="precio">$${producto.precio}</span>
                    
                    <a href="https://wa.me/${config.whatsapp}?text=Hola! Me interesa el ${producto.titulo} de $${producto.precio}" 
                       target="_blank" 
                       class="boton-compra">
                       Lo Quiero
                    </a>
                </div>
            </article>
        `;

        // Inyectamos la tarjeta en el contenedor
        contenedor.innerHTML += tarjetaHTML;
    });

    /* --- PEGAR ESTO ADENTRO DEL addEventListener('DOMContentLoaded', ...) --- */

// 1. Buscamos el botón y el menú en el HTML
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    // 2. Chequeamos si existen (Esto es para evitar errores)
    if (menuToggle && navMenu) {
        console.log("✅ Botón Hamburguesa Encontrado");

        // 3. Escuchamos el Clic
        menuToggle.addEventListener('click', () => {
            console.log("🖱️ Hiciste Clic en el menú!");
            
            // Agregamos/Quitamos la clase 'active' al menú
            navMenu.classList.toggle('active');
            
            // (Opcional) Animación del ícono
            menuToggle.classList.toggle('is-active');
        });
    } else {
        console.log("❌ ERROR: No encuentro el botón con id 'mobile-menu'");
    }
});