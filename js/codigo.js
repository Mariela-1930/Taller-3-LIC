var textosugerencia, boolsugerencia = false;

//Muestra el valor del combo seleccionado
function Mostrar() {

    //Manda a llamar por propiedad name a los radio button
    var radios = document.getElementsByName('combo');

    //Arreglo que lee todos los radio button con el mismo name
    for (var i = 0; i < radios.length; i++) {

        //Evalua si el radio button esta con check
        if (radios[i].checked) {

            //variable que guarda el radio button con check que se encontro en el arreglo
            var total = radios[i].value;
            
            
            //Imprime en el input del total a pagar el valor del radio button seleccionado
            document.getElementsByName('txttotal')[0].value = total;
        }
    }
}

//Suma los check y radio buttons
function sumaproducto() {

    //Se manda a llamar por medio de la variable al input que imprime el total a pagar
    totalCombo = document.getElementById("total").value;

    //se manda a llamar al formulario que tiene todos los check box
    var objeto = document.form2["indi"];

    //Suma los checkbox que fueron leidos con la variable objeto
    var totalchecks = objeto.length;


    totalPagar = 0;

    //Se le dice al arreglo que inicie en el primer valor del arreglo y que haga el recorrido
    //aunque no esten seleccionados todos y vaya de uno en uno
    for (i = 0; i < totalchecks; i++) {

        //Lee los valores de los check box habilitados que se encontraron en el arreglo
        valor = objeto[i];

        //Evalua si esos checkbox estan seleccionados
        if (objeto[i].checked == true) {

            //Le da un valor a los objetos seleccionados en el arreglo
            valor = objeto[i].value;

            //Suma los valores de los check box
            totalPagar = parseFloat(totalCombo) + parseFloat(valor);

            //Imprime en el input la suma de los valores de los check box
            document.getElementsByName("txttotal")[0].value = totalPagar

        } else {
            //El total a pagar es la resta de el valor que esta en el input menos
            //los que no estan seleccionados en el arreglo
            totalPagar = parseFloat(totalCombo) - parseFloat(valor);

            //Imprime el total a pagar en el input 
            document.getElementsByName("txttotal").value = totalPagar;
        }
    }
}

//Funcion que resta un check box si el usuario ya no quiere algun producto
//Se llama al parametro check en especifico
function restaProducto(check) {

    //Llamamos a la variable que guarda el total del combo
    totalCombo = document.getElementById("total").value;

    //Condicion que verifica si los elementos Check estan seleccionados
    if (check.checked == true) {

        //Si estan seleccionados llamamos al metodo suma
        sumaproducto();

    } else {

        //Convierte una cadena de texto a float para poder hacer los calculos matematics
        valorCheck = parseFloat(check.value);

        //Si el usuario retira productos opera lo que ya se habia sumado anteriormente
        //menos lo que el usuario va quitando 
        nuevoTotal = parseFloat(totalCombo) - parseFloat(valorCheck);

        //Imprime la resta
        document.getElementsByName("txttotal")[0].value = nuevoTotal;
    }
}

//Funcion que lee l nombre y valor del radio button (Combos) para imprimir la factura
function LeerArreglo() {

    //Variable que toma los radio button
    var radio = document.getElementsByName('combo');


    //Arreglo que recorre todos los radio button
    for (var i = 0; i < radio.length; i++) {

        //Variable que guarda el costo del combo
        var preciocombo = radio[i].value

        //Variable que guarda el nombre del combo
        var nombrecombo = radio[i].id;

        //Evalua si el radio button esta con check
        if (radio[i].checked) {

            //Imprimir el nombre y precio del combo seleccionado
            document.getElementById("factura").innerHTML += "<h3 id='elh3'>FACTURA RESTAURANTE SAN SALVADOR</h3>"
            document.getElementById("filas").innerHTML += "<tr class='encabezado'><td>Producto</td><td>Precio</td></tr>";
            document.getElementById("filas").innerHTML += "<tr><td>" + nombrecombo + "</td><td>$" + preciocombo + "</td></tr>";
        }
    }
}


//Funcion que lee l nombre y valor del check box (Productos) para imprimir la factura
function productosCB() {

    //Variable que lee los check box del formulario 2 con el nombre indi 
    var objeto = document.form2["indi"];

    //Variable que almacena todos los checkbox y se convierte en arreglo 
    var totalchecks = objeto.length;

    //Se le dice al array que inicie en el primer valor del arreglo y que haga el recorrido
    //aunque no esten seleccionados todos y vaya de uno en uno
    for (i = 0; i < totalchecks; i++) {

        //Asignamos una variable para el arreglo
        valor = objeto[i]

        //Verifica los productos que esten con check
        if (objeto[i].checked == true) {

            //Variable que almacena los precios de todos los check box seleccionados
            var precioproducto = objeto[i].value;

            //Variable que almacena los nombres de todos los check box seleccionados
            var nombreproducto = objeto[i].id;

            //Imprimimos los productos seleccionados con su nombre y precio
            document.getElementById("filas").innerHTML += "<tr><td>" + objeto[i].id + "</td><td>  $ " + objeto[i].value + "</td></tr>";
        }
    }
}

//Funcion que imprime la factura
function factura() {

    //Llamamos al metodo que lee los combos
    LeerArreglo();

    //Llamamos al metodo que lee los productos
    productosCB();

    //Le damos una variable al objeto que esta almacenando la suma de la venta
    Total = document.getElementById("total").value;

    //Imprimimos el total de la compra
    document.getElementById("filas").innerHTML += "<tr class='pagar'><td>Total a pagar </td><td>  $ " + Total + "</td></tr>";

    //Si hay sugerencia se imprime en la factura
    if (boolsugerencia) {
        document.getElementById("filas").innerHTML += "<tr><td><span id='titulosugerencia'>Sugerencia: </span>" + textosugerencia + "</td><td></td></tr>";
    }
}

//Funcion para mostrar div de sugerencia
function mostrarTextSugerencia() {

    //Se aplica la propiedad display block que hace visible el input de sugerencias
    document.getElementById("sugerencias").style.display = 'block';

    //Se aplica la propiedad display none que hace invisable el div
    document.getElementById("divsugerencias").style.display = 'none';
}

//Se ejecuta al cargar la página
window.addEventListener("load", function() {

    //Esconde el text donde se escribirá la sugerencia
    document.getElementById("sugerencias").style.display = 'none';

    //Llamada de método Mostrar
    Mostrar();
});

//Combinaciones de teclas

//Muestra el text sugerencias
$(document).bind('keydown', 'ctrl+e', function() {

    //Llamada de método MostrarTextSugerencia
    mostrarTextSugerencia();
});

//Guarda la sugerencia
$(document).bind('keydown', 'ctrl+s', function() {

    //Bool que indica que sí hay una sugerencia
    boolsugerencia = true;

    //Se guarda la sugerencia del txt sugerencias
    textosugerencia = document.getElementById("sugerencias").value;

    //Se esconde el text de la sugerencia
    document.getElementById("sugerencias").style.display = 'none';

    //Se cambia el valor del label por un agradecimiento
    document.getElementById('advertenciaid').innerHTML = '¡Gracias por tus sugerencias!';

    //Se muestra el div
    document.getElementById('divsugerencias').style.display = 'block';
});