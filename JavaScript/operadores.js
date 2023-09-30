//Operador Ternario
function cualquiera (cualquiervalor){
    return cualquiervalor> 0 ? 10 : 20;
}

//console.log(cualquiera(30));

//Operador opcional
let persona={
    nombre:"Jesus",
    apellido:"Hincapie",
    hijos:{    }
}

//console.log(persona?.hijos?.numeroHijos);

//?? Operador nullish
//Retorna "Valorpor defecto" si la propiedad está nula o undefined
console.log(persona.hijos ?? "Valor por defecto");

//=== y ===
//=== valida valor y tipo.
//== valida unicamente el valor

console.log(5=='5');
console.log(5==='5')