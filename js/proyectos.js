document.addEventListener("DOMContentLoaded", function() {
    const botonPython = document.getElementById("btn-python");
    const botonHCJ = document.getElementById("btn-hcj");
    const contenedorProyectos = document.getElementById("contenedor-proyectos");

    const datosPython = [
        {
            "titulo": "Alpha Inventory",
            "descripcion": "Gestión de clientes, suplidores, encargados y compra y venta de productos.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Prestamos Taveras",
            "descripcion": "Gestión de préstamos a clientes y control del inventario.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Ejercicios PJC",
            "descripcion": "Ejercicios de Python, Java y Los C (C, C++, C#), con pruebas a completar permitiendo ejecución y validación.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "EchoTest (Inspirado en PrgTest)",
            "descripcion": "Sistema automatizado de evaluación desde la terminal que verifica programas Java mediante pruebas de entrada/salida y pruebas unitarias.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Preguntas y respuestas (Inspirado en Preguntados)",
            "descripcion": "Juego interactivo de preguntas y respuestas dividido en categorías temáticas como ciencia, historia, arte, entretenimiento, deportes y geografía. El jugador debe responder correctamente para avanzar y ganar puntos.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Gestor de tasques (En catalán)",
            "descripcion": "Gestió de tasques que permet organitzar i fer un seguiment de les activitats pendents. També permet l'establiment de terminis i marcat de tasques completades.",
            "enlace": "https://github.com"
        }
    ];

    const datosHCJ = [
        {
            "titulo": "Ejercicios PyJa",
            "descripcion": "Web de ejercicios de Python y Java desde elementos básicos hasta programación orientada a objetos.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Calculadora (Inspirado en la de IOS)",
            "descripcion": "Calculadora moderna y minimalista con funciones básicas y diseno inspirado en la calculadora de iOS.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Memoriza carta",
            "descripcion": "Juego de memoria en el que debes encontrar las parejas de cartas iguales volteándolas una a una.",
            "enlace": "https://github.com"
        }, 
        {
            "titulo": "Serpiente",
            "descripcion": "Juego clásico donde controlas una serpiente que crece al comer. Evita chocar contigo mismo o con los bordes para seguir jugando.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Reproductor de musica",
            "descripcion": "Reproductor de música con controles básicos para escuchar canciones integradas de forma sencilla.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Convertidor de monedas",
            "descripcion": "Herramienta para convertir entre diferentes monedas con tasas de cambio.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Sopa de letras",
            "descripcion": "Juego clásico de sopa de letras donde debes encontrar palabras escondidas en una cuadrícula.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Tic Tac Toe",
            "descripcion": "Juego clásico de Tic Tac Toe donde dos jugadores se turnan para colocar X o O. El primero en conseguir tres en línea gana.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Pokemon",
            "descripcion": "Página que muestra todos los Pokémon desde la generación 1 hasta la última, con información detallada y actualizada de cada uno.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Calculadora de edad",
            "descripcion": "Calculadora sencilla que te permite conocer tu edad exacta en años, meses y días a partir de tu fecha de nacimiento.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Generador de código QR",
            "descripcion": "Generador de códigos QR personalizados. Convierte enlaces en un código QR para compartir de forma sencilla y segura.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Gestor de presupuesto",
            "descripcion": "Aplicación para crear, organizar y controlar tus presupuestos. Permite registrar ingresos, gastos y visualizar balances.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Redimesiona imagen",
            "descripcion": "Herramienta en línea que permite redimensionar imágenes de forma rápida y sencilla, ajustando ancho y alto según tus necesidades.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Lista de tareas",
            "descripcion": "Aplicación para gestionar tus tareas diarias. Añade, marca como completadas y elimina tareas fácilmente para mantener tu día organizado.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Error 403",
            "descripcion": "Una página personalizada que informa al usuario cuando no tiene permisos para acceder a un recurso restringido, con diseño claro y mensaje directo.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Error 404",
            "descripcion": "Una página personalizada que muestra al usuario que la página solicitada no fue encontrada, con diseño claro y mensaje directo.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Error 405",
            "descripcion": "Una página personalizada que notifica al usuario que el método HTTP utilizado no es válido para el recurso, con diseño claro y mensaje directo.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Generador de contraseñas",
            "descripcion": "Herramienta simple y eficaz que crea contraseñas seguras y aleatorias, personalizables por longitud y tipo de caracteres.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Login",
            "descripcion": "Formulario simple para que los usuarios ingresen su usuario y contraseña y accedan a su cuenta.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Login con verificación",
            "descripcion": "Formulario de autenticación que, además del usuario y contraseña, incluye un paso extra de verificación para aumentar la seguridad del acceso.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Menu acordeon",
            "descripcion": "Interfaz interactiva que permite expandir y contraer secciones para mostrar u ocultar contenido.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Modal",
            "descripcion": "Ventana emergente que aparece sobre el contenido principal para mostrar información, formularios o alertas sin salir de la página actual.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Menu de navegación",
            "descripcion": "Barra de enlaces que facilita el acceso rápido a las diferentes secciones o páginas de un sitio web.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Panel de control",
            "descripcion": "Interfaz centralizada donde el usuario puede gestionar configuraciones, visualizar datos y controlar diferentes aspectos de una aplicación o sistema.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Side bar",
            "descripcion": "Barra lateral fija que contiene enlaces para navegar por diferentes páginas de un sistema.",
            "enlace": "https://github.com"
        },
        {
            "titulo": "Validador de contraseñas",
            "descripcion": "Herramienta que verifica la fortaleza y cumplimiento de reglas de seguridad en las contraseñas ingresadas.",
            "enlace": "https://github.com"
        }
    ];

    function proyectosActivos(botonActivo, datos, bgColor) {
        [botonPython, botonHCJ].forEach(boton => boton.classList.remove("activo"));
        botonActivo.classList.add("activo");
        contenedorProyectos.innerHTML = "";

        datos.forEach(proyectoData => {
            const proyecto = document.createElement("div");
            proyecto.classList.add("tarjeta");
            proyecto.style.backgroundColor = bgColor;

            proyecto.innerHTML = `
                <h3>${proyectoData.titulo}</h3>
                <p>${proyectoData.descripcion}</p>
                <a href="${proyectoData.enlace}" target="_blank">
                    <i class="fab fa-github"></i> Ver
                </a>
            `;

            contenedorProyectos.appendChild(proyecto);
        });
    }

    botonPython.addEventListener("click", function() {
        proyectosActivos(botonPython, datosPython, "#FFEB99");
    });

    botonHCJ.addEventListener("click", function() {
        proyectosActivos(botonHCJ, datosHCJ, "#FF9A6E");
    });

    proyectosActivos(botonPython, datosPython, "#FFEB99");
});