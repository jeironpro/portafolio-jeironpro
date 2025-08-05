document.addEventListener("DOMContentLoaded", function () {
    const certificaciones = [
        {
            "titulo": "Bachillerato",
            "descripcion": "Certificado de finalización de Bachillerato en República Dominicana en el Centro Educativo El Laurel.",
            "institucion": "Centro Educativo EL Laurel",
            "pais": "DO"
        },
        { 
            "titulo": "Desarrollando Apps",
            "descripcion": "Certificado de desarrollo de aplicaciones móviles sin codigo en Infotep Virtual.", 
            "institucion": "Infotep", 
            "pais": "DO" 
        },
        { 
            "titulo": "Catalán Básico 1",
            "descripcion": "Certificado de catalan basico 1 en el CPNL.", 
            "institucion": "CPNL", 
            "pais": "ES" 
        },
        { 
            "titulo": "Catalán Básico 2",
            "descripcion": "Certificado de catalan basico 2 en el CPNL.", 
            "institucion": "CPNL", 
            "pais": "ES" 
        },
        { 
            "titulo": "Industria 4.0",
            "descripcion": "Certificado de introducción a la industria 4.0 en Infotep Virtual.", 
            "institucion": "Infotep", 
            "pais": "DO" 
        },
        { 
            "titulo": "Catalán Básico 3",
            "descripcion": "Certificado de catalan basico 3 (Nivel A2) en el CPNL.", 
            "institucion": "CPNL", 
            "pais": "ES" 
        },
        { 
            "titulo": "Programación de Bases de Datos SQL",
            "descripcion": "Certificado oficial en programación de bases de dados SQL en Oracle Academy.", 
            "institucion": "Oracle", 
            "pais": "ES" 
        },
        { 
            "titulo": "Introducción a la Programación con Python",
            "descripcion": "Certificado de introducción a la programación con Python en Open Academy Santander.", 
            "institucion": "Open Academy Santander", 
            "pais": "ES" 
        },
        { 
            "titulo": "Fundamentos de Python",
            "descripcion": "Certificado de Fundamentos de Python en Cisco Networking Academy.", 
            "institucion": "Cisco Networking Academy", 
            "pais": "ES" 
        }
    ];

    const limpiarCadena = str =>
    str.normalize("NFD")
       .replace(/[\u0300-\u036f]/g, "")
       .replace(/ /g, "_")
       .replace(/\./g, "_")
       .toLowerCase();

    const contenedorCertificaciones = document.getElementById("contenedor-certificaciones");

    certificaciones.forEach(cert => {
        const certificacion = document.createElement("div");
        certificacion.classList.add("tarjeta");
        certificacion.style.backgroundColor = "#aadaff";

        certificacion.innerHTML = `
            <h3>${cert.titulo}</h3>
            <p>${cert.descripcion}</p>
            <a href="#" class="previsualizar" data-img="certs/certificado_${limpiarCadena(cert.titulo)}_${limpiarCadena(cert.institucion)}.jpg">
                <i class="fa-solid fa-eye"></i> Ver
            </a>
        `;

        contenedorCertificaciones.appendChild(certificacion);
    });
});