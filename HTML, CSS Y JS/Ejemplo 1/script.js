//Destructuring

function crearServicio({titulo,descripcion}){
    return `
        <div class="servicios">
            <h1>${titulo}</h1>
            <p>${descripcion}</p>
        </div>
    `;
}

function crearModal(){
    return`
        <div class="contenedor-modal">
            <div class="modal">
                <h2>Bienvenido</h2>
                <button id="botton-cerrar">Cerrar</button>
            </div>
        </div>
    `;
}

const data=[
    {titulo: "Sección uno", descripcion: "Descripción de la sesión uno"},
    {titulo: "Sección dos", descripcion: "Descripción de la sesión dos"},
    {titulo: "Sección tres", descripcion: "Descripción de la sesión tres"},
    {titulo: "Sección cuatro", descripcion: "Descripción de la sesión cuatro"},
    {titulo: "Sección cinco", descripcion: "Descripción de la sesión cinco"},
    {titulo: "Sección seis", descripcion: "Descripción de la sesión seis"},
    {titulo: "Sección siete", descripcion: "Descripción de la sesión siete"}
];

function crearServicioconObjetos({titulo,descripcion}){
    const contenedorServicio=document.createElement('div');
    const parrafo=document.createElement('p');
    parrafo.innerText=descripcion;
    const heading=document.createElement('h3');
    heading.innerText=titulo;
    contenedorServicio.appendChild(heading);
    contenedorServicio.appendChild(parrafo);
    contenedorServicio.classList.add("servicios");
    return contenedorServicio;
}

const contenedor= document.querySelector('.contenedor-servicios');

for(servicio of data){
    const {descripcion}=servicio;
    console.log(descripcion);
    const servicioHtml=crearServicioconObjetos(servicio);
    contenedor.appendChild(servicioHtml);
    //contenedor.insertAdjacentHTML('beforeend',servicioHtml);

}
document.body.insertAdjacentHTML('beforeend', crearModal());
const botonCerrar=document.getElementById("botton-cerrar");
const modal =document.querySelector(".contenedor-modal");
botonCerrar.addEventListener('click', ()=>modal.remove());