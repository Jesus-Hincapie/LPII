let persona ={ 
    Nombre:"Jesus",
    id:1234,
    apellido:"Hincapie",
    esIngeniero:true,
    empleados:[
        {
            id:1,
            Nombre: "Santiago Echavarria"
        },
        {
            id:2,
            nombre:"Bryan Ayala"
        }
    ]
}
/*console.log(persona);
console.log(persona.empleados[0]);
console.log(persona.empleados[1]);
console.log(persona.apellido);
let personaAsString = JSON.stringify(persona);
console.log(personaAsString);
console.log(JSON.parse(personaAsString));*/

//fuction constructor
function Persona(nombre,apellido,esIngeniero){
    this.nombre=nombre;
    this.apellido=apellido;
    this.esIngeniero=esIngeniero;
}
let personaDos=new Persona("Jesus","Hincapie",true);
personaDos.id=1234
console.log(personaDos)
