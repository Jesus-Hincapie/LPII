//Alcance de var,let y const
function suma(parametroUno, parametroDos){
    var x=10;
    if (parametroUno>parametroDos){
        let x=20;
    }
    return parametroUno + parametroDos + x;
}
console.log(suma(7,6));