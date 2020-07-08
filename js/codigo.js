//Variables globales
var precioproducto = objeto[i].value;
var nombreproducto = objeto[i].id;
var preciocombo = radio[i].value
var nombrecombo = radio[i].id;



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

        }
        else {
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

//Funcion para esconder el div de sugerencias
function esconderDIV() {
    var txtsugerencias = document.getElementById("sugerencias");
    txtsugerencias.style.display = 'none';
}

//Funcion para mostrar div de sugerencia
function mostrarDIV() {
    var txtsugerencias = document.getElementById("sugerencias");
    txtsugerencias.style.display = 'block';
}


//Imprimir Productos y combos seleccionados por el usuario
function LeerArreglo() {

    //Variable que lee el nombre de los Radio Buttons
    var radio = document.getElementsByName('combo');

    //Arreglo que lee todos los radio button con el mismo name
    for (var i = 0; i < radio.length; i++) {

        //Evalua si el radio button esta con check
        if (radio[i].checked) {

            //variable que guarda el valor del radio button con check que se encontro en el arreglo
            // var preciocombo = radio[i].value;

            //variable que guarda el nombre del radio button con check que se encontro en el arreglo
            //var nombrecombo = radio[i].id;

            //Imprime el costo del radio button seleccionado
            // document.getElementsByName('txtleercombo')[0].value = ("$ " + preciocombo);

            //Imprime el nombre del combo seleccionado
            //document.getElementsByName('txtleercombos')[0].value = nombrecombo;

            contenido = "";
            contenido += "<h3 id='elh3'><span id='ordende'>Factura Restaurante San Salvador</span></h3>\n";
            contenido += "<h4>Combo seleccionado</h4>";
            contenido += "<p>-" + nombrecombo + "$" + preciocombo + "</p>";
            factura.innerHTML = contenido;
        }
    }

}

function mostrarcombos() {




}


function productosCB() {
    mostrarCB = document.getElementsByName("txtCB").value;

    var objeto = document.form2["indi"];

    var totalchecks = objeto.length;



    for (i = 0; i < totalchecks; i++) {

        valor = objeto[i]

        if (objeto[i].checked == true) {
            //   var precioproducto = objeto[i].value;
            //alert("hay objetos seleccionados")
            // var nombreproducto = objeto[i].id;
            //  document.getElementsByName("txtCBprecio")[0].value = ("$ " + precioproducto);
            //  document.getElementsByName("txtCB")[0].value = ("El nombre es: " + nombreproducto);
            contenido = "";
            contenido += "<h3 id='elh3'><span id='ordende'>Factura Restaurante San Salvador</span></h3>\n";
            contenido += "<h4>Combo seleccionado</h4>";
            contenido += "<p>-" + nombrecombo + "$" + preciocombo + "</p>";
            contenido += "<h4>Productos seleccionados</h4>";
            contenido += "<p>-" + nombreproducto + "$" + precioproducto + "</p>";
            factura.innerHTML = contenido;
        }
        else {

        }

    }
}