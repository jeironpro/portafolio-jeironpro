document.addEventListener("DOMContentLoaded", function() {
    const habilidades = [
        {
            "titulo": "HTML",
            "nivel": "Avanzado",
            "bgColor": "#FFDDD2"

        },
        {
            "titulo": "CSS",
            "nivel": "Intermedio",
            "bgColor": "#D2E4FF"

        },
        {
            "titulo": "JavaScript",
            "nivel": "Básico",
            "bgColor": "#FFF7C2"

        },
        {
            "titulo": "Python",
            "nivel": "Intermedio",
            "bgColor": "#DDEFFF"

        },
        {
            "titulo": "Java",
            "nivel": "Intermedio",
            "bgColor": "#F8D1D1"

        },
        {
            "titulo": "MySQL",
            "nivel": "Intermedio",
            "bgColor": "#D2F4FF"

        },
        {
            "titulo": "Git",
            "nivel": "Intermedio",
            "bgColor": "#FFE0D4"

        }
    ];
    
    const contenedorHabilidades = document.getElementById("contenedor-habilidades");
    
    habilidades.forEach(hab => {
        const habilidad = document.createElement("div");
        habilidad.classList.add("tarjeta");
        habilidad.style.backgroundColor = hab.bgColor;
    
        habilidad.innerHTML = `
            <div class="titulo-imagen">
                <h3>${hab.titulo}</h3>
                <figure>
                    <img src="icons/lenguajes/${hab.titulo.toLowerCase()}.png" alt="Logo de ${hab.titulo}">
                </figure>
            </div>
            <p>${hab.nivel}</p>
        `;
    
        contenedorHabilidades.appendChild(habilidad);
    });
});