function AgregarUsuario() {
    // Obtén los valores de los campos de entrada
    var nombre = document.getElementById("Nombre").value;
    var apellido = document.getElementById("Apellido").value;
    var email = document.getElementById("Email").value;
    var contraseña = document.getElementById("Contraseña").value;

    // Obtén una referencia a la tabla
    var tabla = document.getElementById("dataTable").getElementsByTagName('tbody')[0];

    // Crea una nueva fila
    var fila = tabla.insertRow();

    // Crea celdas para la fila
    var celdaNombre = fila.insertCell(0);
    var celdaApellido = fila.insertCell(1);
    var celdaEmail = fila.insertCell(2);
    var celdaContraseña = fila.insertCell(3);

    // Agrega los valores de entrada a las celdas
    celdaNombre.innerHTML = nombre;
    celdaApellido.innerHTML = apellido;
    celdaEmail.innerHTML = email;
    celdaContraseña.innerHTML = contraseña;

    // Borra los valores de los campos de entrada
    document.getElementById("Nombre").value = "";
    document.getElementById("Apellido").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Contraseña").value = "";
}
