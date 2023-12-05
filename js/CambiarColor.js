function CambiarColor() {
    var recomendados = document.getElementById("recomendados");
    var producto = document.getElementById("productos");
    var titulo = document.getElementById("titulo");
    var subtitulo = document.getElementById("subtitulo");

    var textRecomendados = "Recomendados";
    var textProductos = "Productos";
    var textTitulo = "Phonetech";
    var textSubtitulo = "Elije uno";

    var index = 0;
    var interval = 100;// Velocidad de escritura en milisegundos

    function animarTexto() {
        recomendados.textContent = textRecomendados.substring(0, index);
        producto.textContent = textProductos.substring(0, index);
        titulo.textContent = textTitulo.substring(0, index);
        subtitulo.textContent = textSubtitulo.substring(0, index);

        if (index === textRecomendados.length) {
            clearInterval(intervalId);
            // Cambiar el color después de la animación
            recomendados.classList.add("blue-text");
            producto.classList.add("blue-text");
            titulo.classList.add("blue-text");
            subtitulo.classList.add("blue-text");
        }

        index++;
    }

    var intervalId = setInterval(animarTexto, interval);
}

CambiarColor();