//Funciones
function sumar(numeroUno,numeroDos){ //Normalmente los nombres de las funciones deben ser en infinitivo
    return numeroUno+numeroDos;
}
let sumaVersionDos=function (numeroUno,numeroDos){
    return numeroUno+numeroDos
};//a través de funcion 
let funcionUno=function(numeroUno,numeroDos,funcionDos){
    console.log("Estoy dentro de la funcion Uno")
    return funcionDos(numeroUno,numeroDos)
}
let funcionTres=(numeroUno,numeroDos)=>{
    console.log("Voy a restar");
    return numeroUno-numeroDos;
}

let SumaVersionTres=(numeroUno,numeroDos)=>{
    console.log("Soy el" (parameter), numeroDos, any)
    return numeroUno+numeroDos;
}//Arrow Function / tambien es de forma anonima
console.log(sumar(5,8));
console.log(sumar("hola", "mundo"));
console.log(sumaVersionDos(10,20));
console.log(SumaVersionTres(40,50.8));
console.log(funcionUno(5,6,sumaVersionDos));