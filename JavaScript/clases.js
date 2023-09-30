class Persona{
    #nombre;
    #apellido;
    #age;
    constructor(nombre,apellido){
        this.#nombre=nombre;
        this.#apellido=apellido;
    }

    get nombre(){
        return this.#nombre + " otra cosa";
    }

    set nombre(nombre){
        this.#nombre=nombre+ " Modificado"
    }
}
// # se utiliza para privatizar
let persona=new Persona("Jesus", "Hincapie");
//persona.nombre="Bryan";
//persona.apellido="Ayala";
console.log(persona);
console.log(persona.nombre);