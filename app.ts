// string
let nombre:string = "Javier";

// Int
let numero:number = 123;

// Boolean
let booleano:boolean = true;

// Objeto
let hoy:Date = new Date();

// Sin tipo definido
let cualquiera:any;

// Esquemas JSON
let SpiderMan = {
    nombre: "Peter",
    apellido: "Parker",
    edad: 20
}

// Plantillas literales.
let Nombre:string = "Javier";
let Apellido:string = "Almarza";
let Edad:number = 18;

let Texto:string = `Hola, ${Nombre} ${Apellido} (${Edad}) `;
console.log(Texto);

// Parametros Obligatorios, por defecto y opcional.

function activar(   
    quien:string,                   // Parametro Obligatorio.
    objeto:string = "batiseñal",    // Parametro PorDefecto.
    momento?:string                 // Parametro Opcional.
){
    
    let mensaje:string;
    if(momento){
        mensaje= `${quien} activó por defecto la/el ${objeto}`;
    }
    else{
        mensaje= `${quien} activó la/el ${objeto}`;
    }
    

    console.log(mensaje);
}

activar("Javier", "batiseñal", "tarde");