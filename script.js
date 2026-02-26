
/* 1. CONFIGURACIÓN DEL NEGOCIO (¡El único lugar que vas a tocar!) */
const config = {
    fondo: "img/fondosIconos/fondoMYF.jpeg",
    negocio: "Mate y Folclore",
    slogan: "Personalizá tus momentos con láser",
    whatsapp: "5491100000000", // TU NÚMERO REAL (sin + ni espacios)
    
    // Colores (Esto sobrescribe al CSS si quisieras, pero por ahora lo dejamos simple)

    urlScriptGoogle: "https://script.google.com/macros/s/AKfycbyEeEvN45Vq5dFRtx-vRLVgDaQzggABQhEZgMVH3jGaMqqhvjMMK-PqBwQ6iIJfAda2/exec",
    
    // CATÁLOGO DE PRODUCTOS (Tu Vidriera)
    productos: [
        {
            id: 1,
            titulo: "Mate 'Maravilla' Martinez",
            precio: 20000,
            foto: "img/mates/mateMaravilla.jpeg", // Asegurate que la foto exista
            descripcion: "Virola de alpaca y cuero crudo.",
            categoria: "mates"
        },
        {
            id: 2,
            titulo: "Vaso Fernetero 'Racing Club'",
            precio: 6000,
            foto: "img/vasos/racingVASO.png",
            descripcion: "Acero inoxidable, grabado láser.",
            categoria: "vasos"
        },
        {
            id: 3,
            titulo: "Vaso Fernetero 'Boca Juniors'",
            precio: 6000,
            foto: "img/vasos/bocaVASO.png",
            descripcion: "Acero inoxidable, grabado láser.",
            categoria: "vasos"
        },
        {
            id: 4,
            titulo: "Vaso Fernetero 'River Plate'",
            precio: 6000,
            foto: "img/vasos/riverVASO.png",
            descripcion: "Acero inoxidable, grabado láser.",
            categoria: "vasos"
        },
        {
            id: 5,
            titulo: "Vaso Fernetero 'Independiente'",
            precio: 6000,
            foto: "img/vasos/independienteVASO.png",
            descripcion: "Acero inoxidable, grabado láser.",
            categoria: "vasos"
        },
        {
            id: 6,
            titulo: "Vaso Fernetero 'San Lorenzo'",
            precio: 6000,
            foto: "img/vasos/caslaVASO.png",
            descripcion: "Acero inoxidable, grabado láser.",
            categoria: "vasos"
        },
        {
            id: 7,
            titulo: "Vaso Fernetero 'Velez Sarsfield'",
            precio: 6000,
            foto: "img/vasos/velezVASO.png",
            descripcion: "Acero inoxidable, grabado láser.",
            categoria: "vasos"
        },
        {
            id: 8,
            titulo: "Vaso Fernetero 'Estudiantes de la plata'",
            precio: 6000,
            foto: "img/vasos/edlpVASO.png",
            descripcion: "Acero inoxidable, grabado láser.",
            categoria: "vasos"
        },
        {
            id: 9,
            titulo: "Vaso Fernetero 'Huracan'",
            precio: 6000,
            foto: "img/vasos/huracanVASO.png",
            descripcion: "Acero inoxidable, grabado láser.",
            categoria: "vasos"
        },
        {
            id: 10,
            titulo: "Mate camionero",
            precio: 22000,
            foto: "img/mates/mateMarronCamion.jpeg",
            descripcion: "Virola de alpaca, con grabado laser.",
            categoria: "mates"
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

    // ==========================================
    // B. Cargar Productos y Filtros (NUEVO DÍA 9)
    // ==========================================
    const contenedor = document.getElementById('contenedor-productos');

    // Esta función dibuja los productos según la categoría
    window.mostrarProductos = function(categoriaSeleccionada) {
        contenedor.innerHTML = ""; // Limpiamos la pantalla primero

        // Filtramos la lista de productos
        let productosFiltrados;
        if (categoriaSeleccionada === 'todos') {
            productosFiltrados = config.productos; 
        } else {
            productosFiltrados = config.productos.filter(producto => producto.categoria === categoriaSeleccionada);
        }

        // Dibujamos las tarjetas filtradas
        productosFiltrados.forEach(producto => {
            // NOTA: Le agregamos 'fade-in visible' a la tarjeta para que aparezcan de una al filtrar
            const tarjetaHTML = `
                <article class="producto-card fade-in visible">
                    <img src="${producto.foto}" alt="${producto.titulo}">
                    <div class="info-producto">
                        <h3>${producto.titulo}</h3>
                        <p>${producto.descripcion}</p>
                        <span class="precio">$${producto.precio}</span>

                        <a href="https://wa.me/${config.whatsapp}?text=Hola! Me interesa el ${producto.titulo}" 
                            target="_blank" 
                            class="boton-compra"
                            onclick="registrarVenta('${producto.titulo}', '${producto.precio}')">
                            Lo Quiero
                        </a>
                    </div>
                </article>
            `;
            contenedor.innerHTML += tarjetaHTML;
        });
    };

    // Esta función se activa al tocar los botones de filtro
    window.filtrarProductos = function(categoria, botonTocado) {
        mostrarProductos(categoria); // Llama a la función de arriba
        
        // Le sacamos la clase 'activo' a todos los botones
        document.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('activo'));
        // Y se la ponemos solo al que acabás de tocar
        botonTocado.classList.add('activo'); 
    };

    // Al cargar la página por primera vez, mostramos 'todos'
    mostrarProductos('todos');
    // ==========================================


    // C. LÓGICA DEL MENÚ HAMBURGUESA
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

    // D. ANIMACIONES AL SCROLLEAR
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez que apareció
            }
        });
    }, observerOptions);

    // Seleccionamos qué queremos animar. 
    // (Le saqué .producto-card porque ahora se crean dinámicamente, animamos solo las secciones y títulos)
    const elementosAnimados = document.querySelectorAll('section, h2');
    elementosAnimados.forEach(el => {
        el.classList.add('fade-in'); // Agregamos la clase base
        observer.observe(el);
    });
});

/* F. FUNCIÓN PARA MANDAR DATOS A GOOGLE SHEETS */
function registrarVenta(producto, precio) {
    // Creamos el paquete de datos
    const datos = {
        producto: producto,
        precio: precio
    };

    // Enviamos el paquete al script de Google
    fetch(config.urlScriptGoogle, {
        method: 'POST',
        mode: 'no-cors', // Importante para evitar errores de seguridad del navegador
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
        console.log("Venta enviada a Google Sheets!");
    }).catch(error => {
        console.error("Error al registrar venta:", error);
    });
    
    // NOTA: El enlace de WhatsApp se abrirá igual porque está en el href
}