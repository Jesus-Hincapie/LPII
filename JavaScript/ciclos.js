//For
for(let i=0; i<10; i++){
    //console.log(i)
}

let variable=0;
//console.log(variable++); //0
//console.log(++variable); //2

//While
/*variable=0
while (variable<=0){
    variable++
    console.log("Estoy en el white")
}

//do/
//Hago y despues pregunto
do{
    console.log("Estoy en el do/while")
} while(variable==0);*/

//for of
let arreglo =["Hola", "Chao", "Mundo", "Cualquiera"];

for (elemento of arreglo){
    console.log(elemento);
}

//For in
//Se utiliza para recorrer objetos 
let persona ={
    nombre:"Jesus",
    apellido:"Hincapie",
    Edad:20
}

for (key in persona){
    console.log(key+" -> "+ persona[key]);
}