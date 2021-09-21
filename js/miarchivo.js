const tienda =[]

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

const lifting = new Servicio({ id:1, nombre:"LIFTING DE PESTAÑAS", precio: 1400, tiempo: "Duración del tratamiento: el procedimiento lleva aproximadamente 2h e incluye tintura y dura 4 a 6 semanas, dependiendo del tipo de pelo y cuidados en casa.", zona:"pestañas", descripcion: ' Es un tratamiento que ayuda a mejorar la forma de las pestañas naturales. Las alisa y levanta. Crea la apariencia de pestañas mas largas y rellenas. Un tratamiento que hará que tu mirada se vea mas abierta y juvenil.'})

const extensiones = new Servicio({id:2,nombre:"EXTENSIONES PELO POR PELO", precio: 2400, tiempo: "Duración del tratamiento: el procedimiento lleva de 2 a 3hs, dependiendo de la cantidad y tipo de pelo del cliente. Y pasados 15/20 días, será necesario realizar un service para retocarlas.", zona:"pestañas", descripcion:'Es un servicio que mejora la estetica de la mirada, puede corregir pequeños defectos segun el diseño que se elija para cada tipo de ojo. Logra aumentar la longuitud, el volumen y la curvatura de las pestañas naturales.'})

const serviceDeExtensiones = new Servicio({id:3,nombre:"SERVICE DE EXTENSIONES", precio: 1700, tiempo: "Duracion del servicio: 2 hs aproximadamente, se realiza cada 15/20 días, dependiendo de la cantidad de extensiones que se conserven.", zona:"pestañas", descripcion:'Se trata del retoque de las extensiones de pestañas pelo por pelo. Un servicio en donde se realiza la limpieza de las pestañas, se remueven las extensiones crecidas y se vuelven a colocar y completar las que fueron cayendo.'})

const extraccion = new Servicio({id:4,nombre:"EXTRACCIÓN DE EXTENSIONES", precio: 1000, tiempo: "Duración del servcio: 1 hs aproximadamente", zona:"pestañas", descripcion:'Es un servicio en el cual se extraen las extensiones de pestañas de forma química, sin dañar la pestaña natural.Se utiliza un removedor específico del pegamento, luego de extraerlas se realiza una limpieza de las pestañas.'})

const nutricion = new Servicio ({id:5,nombre:"NUTRICIÓN", precio: 1000, tiempo: "Duración del tratamiento: el procedimiento lleva alrededor de 45 minutos", zona:"pestañas", descripcion:'Es un servicio de botox para nutrir, hidratar y/o recuperar cejas y pestañas. Puede realizarse post tratamiento de lifting o laminado o como tratamiento de recuperación en 4 sesiones, de 1 a 2 veces por semana.'})

tienda.push(lifting, extensiones, serviceDeExtensiones, extraccion, nutricion)

const container = document.getElementById('container-cards');

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
                        <button class='btn btn-secondary'>ADQUIRIR SERVICIO</button>
                    </div>`
    container.append(card);
}

console.log (tienda)

const carrito = [];

let servicioAdquirido = prompt("Que servicio desea adquirir? Lifting de pestañas, Extensiones, Extraccion de extensiones, Service o Nutrición ").toUpperCase(); 

const adquisicion = (servicio) => {

    while(servicio !== "NINGUNO"){

        let compra = tienda.find(serv => serv.nombre == servicio )
    
        if(compra){
            carrito.push(compra);    
        }
        else{
            console.log("El servicio ingresado no se encuentra disponible");
        }
        servicio = prompt("Que servicio desea adquirir? Lifting de pestañas, Extensiones, Extraccion de extensiones, Service o Nutrición").toUpperCase();
    }
    
  
}

adquisicion(servicioAdquirido) ;
console.log (carrito)

const totalServicios = (carrito) =>{
    let total=0;
    for (let i = 0 ; i < carrito.length; i++){
        total = total + carrito[i].precio;
    }
    return  total;
}


alert(`El valor total a pagar es $ ${totalServicios(carrito)}`)





