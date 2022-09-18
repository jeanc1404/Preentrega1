//Array Origenes y Destinos
let ciudades = [
    {id: 1,ciudad: "Buenos Aires" , iniciales: "BUE"},
    {id: 2,ciudad: "Mendoza", iniciales: "MDZ" },
    {id: 3,ciudad: "Jujuy", iniciales: "JUJ"},
    {id: 4,ciudad: "Cordoba" , iniciales: "COR" },
]

//Array Pasajero
class pasajeros {
    constructor (id,nombre,edad,precio) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.precio = PbaseBoleto;
        
    }
}

//Funcion Origen
function origen () {
    tamañoArray = Number(ciudades.length);
    texto = "Por favor seleccione el lugar de origen:\n";
    for (let i=0; i!=tamañoArray; i++) {
        texto = texto + `${ciudades[i].id}- ${ciudades[i].ciudad} \n`;
    }
    let opcion1 = Number(prompt(texto));
    return(opcion1);
}
    
//Funcion Destino
function destino (opcion1) {
    tamañoArray = Number(ciudades.length);
    texto = "Por favor seleccione el lugar de destino:\n";
    let id2 = 1;    
    for (let i=0; i!=tamañoArray; i++) {
        if (i!=opcion1) {
        texto = texto + `${id2}- ${ciudades[i].ciudad} \n`;
        id2 = id2+ 1;
        }
        
    }
    opcion2 = Number(prompt(texto));  
    return(opcion2);
}
    


//Funcion ingresar cantidad de pasajeros
function numeroPasajeros () {
    let nPasajeros = Number(prompt("Ingrese la cantidad de boletos que desea comprar: "));
    return(nPasajeros);
}

//Funcion Ingreso de pasajeros
function ingresoPasajeros (nPasajeros) {
    let desc = Number(PbaseBoleto);
    for (let i=0; i != nPasajeros; i++) {
        let nombreApellido = prompt(`Por favor ingrese el nombre y apellido del pasajero ${i+1}: `);
        let edadPasajero = Number(prompt(`Por favor ingrese la edad del pasajero ${i+1}: `));        
        if (edadPasajero <= 12) {
            desc = desc * 0.95;
            console.log("Se volvio verdad a menos 12 ", desc);
        } else if (edadPasajero >= 65)  {
            desc = desc * 0.90;
            console.log("Se volvio verdad mayo 65");
        }
        id = i;
        pasajero.push(new pasajeros(id,nombreApellido, edadPasajero,desc,));

    }
}

//Funcion retornar Total

function salidaDatos (total) {
    let texto = "";
    for (let i = 0; i != pasajero.length; i++) {
        texto = texto +  `Nombre y Apellido: ${pasajero[i].nombre}` + "\n";        
    }
    return(`Los datos de su compra son:\n` + texto + `El total de los boletos es de $${total}`);
}
/*
//Porcentaje de descuento
function porcentajeDescuento(edad) {
    let descuento = 0;
    if (edad<=12) {
        
        descuento = 0.05;
        return  descuento;
        alert(descuento);              
    } else if(edad>=65) {
        
        descuento = 0.1;
        return descuento;
        alert(descuento);
    } 
}
    
/*
//Calculo del descuento
function calculoDescuento(descuento, precioBase) {
    let precioFinal = precioBase - (precioBase*descuento);
    return precioFinal;
}

//Simulador
let precioBase = 12000;
let edad = Number(prompt("Por favor ingrese la edad del pasajero: " ));
let descuento = porcentajeDescuento(edad);
let precio = calculoDescuento(descuento, precioBase);
alert(`El descuento aplicado al pasajero es del ${descuento*100}% y el total del boleto es de ${precio}`);


*/



//Simulador
PbaseBoleto = Number(5000);
const pasajero = [];
oDestino = origen();
oDestino = destino (oDestino);
console.log(oDestino);
nPasajeros = numeroPasajeros();
ingresoPasajeros(nPasajeros);
prompt(pasajero[0].precio);
const total = pasajero.reduce((acumulador, calculoPrecio) => acumulador + calculoPrecio.precio,0);
alert(salidaDatos(total));


