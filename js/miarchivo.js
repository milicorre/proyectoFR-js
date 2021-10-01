const tienda =[];
const carrito = [];


class Servicio {
    constructor(servicio) {
        this.id = servicio.id;
        this.nombre = servicio.nombre;
        this.precio = servicio.precio;
        this.tiempo = servicio.tiempo;
        this.zona = servicio.zona;
        this.descripcion= servicio.descripcion;
    }
}

const lifting = new Servicio({ id:1, nombre:"Lifting de pestañas", precio: 1400, tiempo: "Duración del tratamiento: el procedimiento lleva aproximadamente 2h e incluye tintura y dura 4 a 6 semanas, dependiendo del tipo de pelo y cuidados en casa.", zona:"pestañas", descripcion: ' Es un tratamiento que ayuda a mejorar la forma de las pestañas naturales. Las alisa y levanta. Crea la apariencia de pestañas mas largas y rellenas. Un tratamiento que hará que tu mirada se vea mas abierta y juvenil.'});
const extensiones = new Servicio({id:2,nombre:"Extensiones pelo por pelo", precio: 2400, tiempo: "Duración del tratamiento: el procedimiento lleva de 2 a 3hs, dependiendo de la cantidad y tipo de pelo del cliente. Y pasados 15/20 días, será necesario realizar un service para retocarlas.", zona:"pestañas", descripcion:'Es un servicio que mejora la estetica de la mirada, puede corregir pequeños defectos segun el diseño que se elija para cada tipo de ojo. Logra aumentar la longuitud, el volumen y la curvatura de las pestañas naturales.'});
const serviceDeExtensiones = new Servicio({id:3,nombre:"Service de extensiones", precio: 1700, tiempo: "Duracion del servicio: 2 hs aproximadamente, se realiza cada 15/20 días, dependiendo de la cantidad de extensiones que se conserven.", zona:"pestañas", descripcion:'Se trata del retoque de las extensiones de pestañas pelo por pelo. Un servicio en donde se realiza la limpieza de las pestañas, se remueven las extensiones crecidas y se vuelven a colocar y completar las que fueron cayendo.'});
const extraccion = new Servicio({id:4,nombre:"Extracción de extensiones", precio: 1000, tiempo: "Duración del servcio: 1 hs aproximadamente", zona:"pestañas", descripcion:'Es un servicio en el cual se extraen las extensiones de pestañas de forma química, sin dañar la pestaña natural.Se utiliza un removedor específico del pegamento, luego de extraerlas se realiza una limpieza de las pestañas.'});
const nutricionP = new Servicio ({id:5,nombre:"Lifting nutritivo", precio: 1800, tiempo: "Duración del tratamiento: el procedimiento lleva alrededor de 45 minutos", zona:"pestañas", descripcion:'Es un servicio de botox para nutrir, hidratar y/o recuperar cejas y pestañas. Puede realizarse post tratamiento de lifting o laminado o como tratamiento de recuperación en 4 sesiones, de 1 a 2 veces por semana.'});
const perfilado = new Servicio ({id:6,nombre:"Perfilado", precio: 800, tiempo: "Duración del tratamiento: entre 20 y 30 minutos en realizarlo y lo ideal es repetirlo a los 30 días aprox. dependiendo del tiempo de crecimiento del pelo en cada uno.", zona:"cejas", descripcion:'Es la depilacion de la ceja manualmente, pelo por pelo con pincita. Es una tecnica que brinda un diseño unico para cada mirada, se trabaja de acuerdo a la forma del ojo tipo de rostro y da mayor definicion.'});
const laminado = new Servicio({id:7,nombre:"Laminado de cejas", precio: 1800, tiempo: "Duracion del tratamiento: el proceso del laminado lleva alrededor de 1.30/2hs y dura de 4 a 6 semanas.", zona: "cejas",descripcion:" Es un tratamiento semipermanente que busca redirigir el pelo de la cejapara darle direccion. Permite engrosar el tamaño de la ceja natural otorgando un aspecto definido y fresco a la mirada. Mejora la estructura de la ceja debido a su fase de hidratación y nutrición." });
const tinte = new Servicio ({id:8, nombre:"Tinte", precio:650, tiempo:"Duración del tratamiento: 10 a 15 minutos y dura 20 a 30 días", zona:"cejas", descripcion: "La funcion del tinte es oscurecer el tono del pelo. Hace que tu ceja parezca mas rellena y gruesa. La tintura a diferencia de la henna sigue la forma de tu ceja natural, no rellena huecos, aunque los disimula. Es ideal para cejas de tonos claros y/o con canas."});
const nutricion = new Servicio ({id:9, nombre:"Nutrición", precio: 800, tiempo: "Duración del tratamiento: el procedimiento lleva alrededor de 45 minutos.", zona:"cejas", descripcion: "Es un servicio de botox para nutrir, hidratar y/o recuperar cejas y pestañas. Puede realizarse post tratamiento de lifting o laminado o como tratamiento de recuperación en 4 sesiones, de 1 a 2 veces por semana."});

tienda.push(lifting, extensiones, serviceDeExtensiones, extraccion, nutricionP, perfilado, laminado, tinte, nutricion)

const container = document.getElementById('container-cards');
const aviso = document.getElementById("aviso");

for(const producto of tienda){
    const card = document.createElement('div');
    card.className='card-group col-md-6 col-12 detalleServicio';
    card.innerHTML=`<div class=" card">
                        <div class="card-body ">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">${producto.tiempo}</small>
                        </div>
                        <button id=${producto.id} class='btn btn-secondary'>ADQUIRIR SERVICIO</button>
                    </div>`
    container.append(card);
    document.getElementById(`${producto.id}`).addEventListener('click', () => adquisicion(producto))
}





function adquisicion(servicio) {
    let compra =carrito.find(objeto =>objeto.nombre === servicio.nombre)
    if(compra){
        if(compra.id == compra.id){
            aviso.innerHTML = `<p class="alert alert-warning" role="alert">Ya ha seleccionado este servicio</p>`
            setTimeout(() => {
                aviso.innerHTML = "";
                }, 2000);
              
        }
        }else{
        carrito.push(servicio);
    
        aviso.innerHTML = `<p class="alert alert-warning" role="alert">Servicio adquirido</p>`
        setTimeout(() => {
            aviso.innerHTML = "";
            }, 2000);
        const carrod =document.getElementById('detalle-carrito');
        const nombreS = document.createElement('div');
        nombreS.innerHTML=`<li>${servicio.nombre}</li>
                        `
        carrod.appendChild(nombreS)
    }

    let total = 0;
    for(let i=0; i<carrito.length;i++){
        total += carrito[i].precio;
    }

    const TotalApagar = document.getElementById('totalServs');
    TotalApagar.innerHTML =`Total a pagar: $${total}` ;
    localStorage.setItem('carrito', JSON.stringify(carrito));

    localStorage.setItem('pagar', JSON.stringify(total) )
}



function cargarLocalStorage(){
    let carro = JSON.parse(localStorage.getItem('carrito'));
    let totalpagar = JSON.parse(localStorage.getItem('pagar'));

    const mostrarCarrito = document.getElementById('detalle-carrito')
    if(carro){
        for(let i = 0; i < carro.length; i++){
            carrito.push(new Servicio(carro[i].id, carro[i].nombre, carro[i].precio, carro[i].tiempo, carro[i].zona, carro[i].descripcion))
            const nombre = document.createElement('div');
            nombre.innerHTML=`<p>${carro[i].nombre}</p>`
            mostrarCarrito.appendChild(nombre)
        }
        let total = 0;
        for(let i=0; i<carrito.length;i++){
            total += carrito[i].precio;
        }  
    }
    const TotalApagar = document.getElementById('totalServs');
    TotalApagar.innerHTML =`Total a pagar: $${total}` ;
    
     /*)
     if(totalpagar){
        
        const totalPagar = document.createElement('div')
        totalPagar.innerHTML=`<p> Total a pagar $ ${total} </p>`;
        TotalApagar.appendChild(totalPagar)

        }*/
        
    
}


cargarLocalStorage();



