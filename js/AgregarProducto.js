function AgregarProducto() {
    // Obtén los valores de los campos de entrada
    var marca = document.getElementById("Marca").value;
    var modelo = document.getElementById("Modelo").value;
    var pantalla = document.getElementById("TamañoPantalla").value;
    var procesador = document.getElementById("Procesador").value;
    var ram = document.getElementById("Ram").value;
    var precio = document.getElementById("Precio").value;

    // Obtén una referencia a la tabla
    var tabla = document.getElementById("dataTable").getElementsByTagName('tbody')[0];

    // Crea una nueva fila
    var fila = tabla.insertRow();

    // Crea celdas para la fila
    var celdaMarca = fila.insertCell(0);
    var celdaModelo = fila.insertCell(1);
    var celdaPantalla = fila.insertCell(2);
    var celdaProcesador = fila.insertCell(3);
    var celdaRAM = fila.insertCell(4);
    var celdaPrecio = fila.insertCell(5);

    // Agrega los valores de entrada a las celdas
    celdaMarca.innerHTML = marca;
    celdaModelo.innerHTML = modelo;
    celdaPantalla.innerHTML = pantalla;
    celdaProcesador.innerHTML = procesador;
    celdaRAM.innerHTML = ram;
    celdaPrecio.innerHTML = precio;

    // Borra los valores de los campos de entrada
    document.getElementById("Marca").value = "";
    document.getElementById("Modelo").value = "";
    document.getElementById("TamañoPantalla").value = "";
    document.getElementById("Procesador").value = "";
    document.getElementById("Ram").value = "";
    document.getElementById("Precio").value = "";
}
