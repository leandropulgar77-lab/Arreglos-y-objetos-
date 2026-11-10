
//Introduccion a arreglos en JavaScript
function saludarAprendices() {
    alert("En este algoritmo estaremos saludando a los aprendices que escoja segun el numero sleccionado");
    let nombres = ["Juan Cedeño","David Rojas","Juan Esteban Tinoco.","Juan Jose Amarillo","Angely Gonzalez","Julian Vargas","Andres Martinez","Juan Diego Alayon","Yenmanuelys Montoya","Maria Paula","Juan Montoya","Santiago Triviño","Erith Santiago","Erika Escobar","Daniel Barbosa","Danny Julian Robles","Richard Arias","Andres Guillen","Juan Jose Hoyos","Juan Fernando Luna","Leandro Pulgar"]; 
    console.log("Mostrar el primer aprendiz");
    console.log(nombres[0]);
    console.log("Mostrar el tercer aprendiz");
    console.log(nombres[2]);
    console.log("Mostrar el ultimo aprendiz");
    console.log(nombres[nombres.length - 1]);
    console.log("Cantidad de estudiantes");
    console.log(nombres.length);
    for ( let i = 0; i < nombres.length; i++) {
        console.log("posicion " + i + ": " +nombres[i]);
    }
    let nuevo = prompt("Ingrese el nuevo estudiante:");
    nombres.push(nuevo);
    console.log("posicion "+ " :" + nombres)
    console.log("Nueva cantidad", nombres.length)
    let buscar = prompt("Ingrese el estudiante a buscar:");
    if (nombres.includes(buscar)) {
        console.log("El estudiante si esta registrado");
    }else {
        console.log("El estudiante no esta registrado");
    }
    console.log("Listado actualizado:");
    console.log(nombres);
}

function administracionProductos(){
    alert("Este algoritmo permite crear un arreglo con cinco nombres de productos de una tienda.");
    let productos = ["Queso","Gaseosa","Salchichon","Arepa","Kellogs"];
    console.log("Productos registrados en inventario");
    console.log(productos);
    
    //Modificare el segundo producto =)
    productos[1] = "Salchicha ranchera"
    
    //Agregar un producto final utilizando el push()
    productos.push("Carne");
    
    //agregar un producto al inicio untilizando el unshift()
    productos.unshift("Acetaminofen");
    
    //Actualizar valores 
    console.log("Inventario actualizado");
    console.log (productos);
    
    //Buscar un producto 
    let buscar = prompt("Ingrese el nombre del producto que desea buscar");
    
    //Mostrar la posicion del producto encontrado
    let posicion = productos.indexOf(buscar);
     
    if (productos.includes(buscar)) {
        console.log("El producto " + buscar + " se encuentra en la posicion: " + posicion);
    } else {
        console.log("El producto no se encuentra registrado");
    }
    
    //Modificar el nombre de otro producto indicando su posicion 
    productos[2] = posicion;

    productos.pop();
    console.log("Cantidad de productos:",productos.length);
    console.log("Listado final:");
    console.log(productos);
}

function eliminacionElementos(){
    let ciudades = ["Boyaca ","Bogota ","Medellin ","Manizales ","Cali ","Tolima"];
    console.log("Eliminar la ultima ciudad usando pop()");
    ciudades.pop();
    console.log("Mostrar el arreglo actualizado");
    console.log(ciudades);
    console.log("Eliminar la primera ciudad usando shift()");
    ciudades.shift()

    console.log(ciudades);
    ciudades.splice(3, 1);
    console.log(ciudades);

    ciudades.push("Barranquilla");
    ciudades.push("Villavicencio");
    console.log("cantidad", ciudades.length);
    for(let i = 0; i < ciudades.length; i++){
        console.log((i + 1) + ". "+ ciudades[i]);
    }
    let buscar = prompt("Ingrese una ciudad:");
    if (ciudades.includes(buscar)) {
        console.log("La ciudad si esta registrada");
    }else {
        console.log("La ciudad no esta registrada");
    }

}

function busquedaEstudiantes(){
    
    let estudiantes = ["Juan", "Carlos", "Camilo", "Andres", "Daniel", "Laura", "Camila", "Andrea"];
    let nombre = prompt("Ingrese un estudiante:");

    if (estudiantes.includes(nombre)) {
        console.log("El estudiante fue encontrado");
        console.log("posicion:", estudiantes.indexOf(nombre));
        
    }else{
        console.log("No fue encontrado");
    }
    let nombre2 = prompt("Ingrese otro estudiante");
    
    if (estudiantes.includes(nombre2)) {
        console.log("Encontrado");
    }else{
        console.log("No encontrado")
    }
    let letra =  prompt("Ingrese una letra:");
    let contador = 0;

    for(let estudiante of estudiantes){
        if(estudiante.startsWith(letra)){
            contador++;
        }
    }
    console.log("Cantidad de estudiantes que comienzan por esa letra:", contador);
    console.log("Listado:");
    for(let estudiante of estudiantes){
        console.log(estudiante);
    }
    let nuevo = prompt ("Nuevo estudiante:");
    if (!estudiantes.includes(nuevo)){
        estudiantes.push(nuevo);
        console.log("Estudiante agregado");
    }else{
        console.log("Ya existe");
    }
    console.log(estudiantes);
    console.log("Cantidad total:", estudiantes.length)
} 

function proyectoInmobiliaria(){
    //Crear arreglo de inmuebles 
    let inmuebles = ["Casas en el centro", "Apartamentos en Villeta", "Finca en Payande", "Lote en Cayunda", "Casa en  San Jorge", "Finca en Bagazal", "Lote  en la zona urbana", "Apartamento en Opalo" ];
    console.log("Inmuebles disponibles");
    
    //Mostrar arreglo de inmuebles
    for(let i = 0; i < inmuebles.length; i++){
        console.log(i + "." + inmuebles[i]);
    }
    
    //Consultar un inmueble por su posicion
    let posicion =  parseFloat(prompt("Ingrese la posicion del inmueble que desea consultar"));

    if (posicion>=0 && posicion<inmuebles.length) {
        console.log("inmueble "+ inmuebles[posicion]);
    }else{
        console.log("Posicion invalida");
    }

    console.log("Cantidad de inmuebles disponibles "+ inmuebles.length)
   
   //Mostrar informacion de los inmuebles 
    let inmuebles2 = ["Casas en el centro - 3 habitaciones ", "Apartamentos en Villeta - 2 habitaciones", "Finca en Payande - piscina y zonas verdes ", "Lote en Cayunda - 200 mts2", "Casa en  San Jorge - 2 banos", "Finca en Bagazal - amplia zona rural ", "Lote  en la zona urbana - 150 mts2 ", "Apartamento en Opalo - habitacion"]
    console.log("Recorrido de inmuebles");
    for (let i = 0; i < inmuebles.length; i++) {
        console.log("inmuebeles: " + i + ":" + inmuebles2[i]);
    }
    
    //Agregar un inmueble 
    nuevo = prompt("Ingrese el inmueble que desea vender o arrendar");
    inmuebles.push(nuevo)
    for (let i=0;i<inmuebles.length;i++ ){
        console.log(i + ". " + inmuebles[i]);
        
    }
    console.log("Inmueble agregado correctamente");

    inmuebles[0] = "Finca las palmas";
    for (let i=0;i<inmuebles.length;i++ ){
        console.log(i + ". " + inmuebles[i]);
    }

    //Eliminacion de un inmubele 
    console.log("Eliminacion de un inmueble en el indice 5");
    inmuebles.splice(5,1);
    for(let i = 0;i<inmuebles.length;i++){
        console.log(i + ". " + inmuebles[i]);
    }

    //Buscar inmuebles 
    console.log("Busqueda de inmuebles");
    let buscar = prompt("Ingrese el inmueble que desee buscar:");

    if(inmuebles.includes(buscar)){
        console.log("inmueble "+ buscar + " se encuentra registrado");
    }else{
        console.log("Inmueble " + buscar+ "no se encuentra registrado");
    }
    console.log("Listado actualizado");
    for (let i=0;i<inmuebles.length;i++ ){
        console.log(i + ". " + inmuebles[i]);
    }
   
   //Ordenar inmuebles 
    inmuebles.sort();
    console.log("Inmuebles ordenados alfabeticamente");
    for (let i=0;i<inmuebles.length;i++ ){
        console.log(inmuebles[i]);
    }

    //Unir los elementos de arreglo 
    console.log("Listado de inmuuebles");
    let listadoInmuebles = inmuebles.join(",");
    console.log("Lista de inmuebles "+ listadoInmuebles);

}



//Introduccion a objetos en JavaScript 

function inventarioProductos(){
    let nombre, marca, precio, cantidad;
    nombre1: "Pc portatil";
    marca1:"Asus";
    precio1:  3800000;
    cantidad1: 15
    
    
    nombre2: "Iphone 17 Pro Max";
    marca2: "Apple";
    precio2: 4200000
    cantidad2: 5

    //Demostracion de objetos 
    const producto = {
        nombre: "Pc portatil",
        marca: "Asus",
        precio: 3800000,
        cantidad: 15
    }
    console.log(producto.nombre);
    console.log(producto.marca);
    console.log(producto.precio);
    console.log(producto.cantidad);

    console.log("Producto2");
    const producto2 = {
        nombre2: "Iphone 17 Pro Max",
        marca2: "Apple",
        precio2: 4200000,
        cantidad2 : 5
    }
    console.log(producto2.nombre2);
    console.log(producto2.marca2);
    console.log(producto2.precio2);
    console.log(producto2.cantidad2);

    console.log(producto);

}

function registroEstudiante(){
    const estudiante={
        nombre : "Leandro",
        apellido : "Pulgar",
        edad : 17,
        programa : "Analisis y desarrollo de software",
        ficha : 3593362,
        correo : "leandropulgar77@gmail.com",
    }
    //Mostrar el objeto completo
    console.log(estudiante);
    //Consultar nombre y apellido utilizando la notacion de punto 
    console.log(estudiante.nombre);
    console.log(estudiante.apellido);
    //Consultar el programa de formacion utilizando corchetes 
    console.log(estudiante["programa"]);
    //Modificar edad del estudiante 
    estudiante.edad = 23,
    console.log(estudiante.edad);
    // Agregar una propiedad llamada ciudad
    estudiante.ciudad = ("Bogota");
    console.log(estudiante.ciudad);
    //Eliminar la propiedad llamada correo 
    delete estudiante.correo;
    console.log(estudiante);
    for (let propiedad in estudiante){
        console.log(propiedad);
        console.log(estudiante[propiedad]);
    }
    for(let i = 0;i<estudiante.length;i++){
        console.log(i + ". " + estudiante[i]);
    }
}

function registroProducto(){
    const producto = {
        codigo : 85,
        nombre : "mouse",
        categoria : "tecnologia",
        precio : 510000,
        cantidadDisponible : 5,
        
    }
    //Mostrar la información completa del producto.
    console.log(producto);
    //Calcular el valor total del inventario multiplicando el precio por la cantidad disponible.
    let  valortotal  = producto.precio*producto.cantidadDisponible;
    console.log("El valor total del producto es: " + valortotal);
    //Modificar el precio del producto
    producto.precio = 500000,
    console.log(producto.precio);
    //Actualizar la cantidad disponible
    for(let i = 0;i<producto.length;i++){
        console.log(i + ". " + producto[i]);
    }
    //Agregar una propiedad llamada marca
    producto.marca = ("LogiTech");
    console.log(producto.marca);
}


function gestionarPersonas(){
    const persona = {
        nombre : "Leandro",
        edad : 17,
        genero : "masculino",
        saludar : function (){
            console.log("Hola soy: " + this.nombre + " tengo : " + this.edad + "años "+ " mi genero es: " + this.genero );
        }
    }
    console.log(persona);
    persona.saludar();
}

function gestionarProductos(){
    const producto = {
        nombre : "cuaderno",
        precio : 2500,
        cantidad : 7,
        mostrarInfo : function (){
            console.log("Producto: " + this.nombre);
            console.log("precio: " + this.precio);
            console.log("disponible: " + this.cantidad);
            console.log("Valor total del inventario: " + this.precio*this.cantidad);
        }
    }
    producto.mostrarInfo();
}

function gestionarEmpleado(){
    const empleado = {
        nombre : "Camilo",
        cargo : "Gerente",
        salarioMensual : 2800000,
        diasTrabajados : 20,
        porcentajeDescuento : 4/100,

        consultarSalario : function(){
            let salarioDia = this.salarioMensual/30;
            let salarioSd = salarioDia*this.diasTrabajados;
            return  parseInt(salarioSd);
            
        },
        calcularDescuento: function(){
            let descuento = (this.consultarSalario() * this.porcentajeDescuento)/100;
            return parseInt(descuento);
        },
        calcularTotalPagar: function(){
            let total = this.consultarSalario() - this.calcularDescuento() ;
            console.log("El total a pagar sin descuento es: " + this.consultarSalario());
            console.log("El total del descuento es de: " + this.calcularDescuento());
            console.log("El total neto a pagar (con descuento): " + total);
        }
    }
    empleado.calcularTotalPagar();
}

function gestionarEmpleado2(){
    const empleado = {
        nombre : prompt("Ingrese el nombre"),
        cargo : prompt("Ingrese el cargo que ocupa"),
        salarioMensual : parseInt(prompt("Ingrese el salario mensual")),
        diasTrabajados : parseInt(prompt("Ingrese el numero de dias trabajados")),
        porcentajeDescuento : 0.04,

        consultarSalario : function(){
            let salarioDia = this.salarioMensual/30;
            let salarioSd = salarioDia*this.diasTrabajados;
            return  parseInt(salarioSd);
            
        },
        calcularDescuento: function(){
            let descuento = (this.consultarSalario() * this.porcentajeDescuento);
            return parseInt(descuento);
        },
        calcularTotalPagar: function(){
            let total = this.consultarSalario() - this.calcularDescuento() ;
            alert("El total a pagar sin descuento es: " + this.consultarSalario());
            alert("El total del descuento es de: " + this.calcularDescuento());
            alert("El total neto a pagar (con descuento): " + total);
        }
    }
    empleado.calcularTotalPagar();
}