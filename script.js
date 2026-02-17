
/* 1. CONFIGURACIÓN DEL NEGOCIO (¡El único lugar que vas a tocar!) */
const config = {
    // Datos Generales
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
});