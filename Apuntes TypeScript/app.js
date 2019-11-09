// string
var nombre = "Javier";
// Int
var numero = 123;
// Boolean
var booleano = true;
// Objeto
var hoy = new Date();
// Sin tipo definido
var cualquiera;
// Esquemas JSON
var SpiderMan = {
    nombre: "Peter",
    apellido: "Parker",
    edad: 20
};
// Plantillas literales.
var Nombre = "Javier";
var Apellido = "Almarza";
var Edad = 18;
var Texto = "Hola, " + Nombre + " " + Apellido + " (" + Edad + ") ";
console.log(Texto);
// Parametros Obligatorios, por defecto y opcional.
function activar(quien, // Parametro Obligatorio.
objeto, // Parametro PorDefecto.
momento // Parametro Opcional.
) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 por defecto la/el " + objeto;
    }
    else {
        mensaje = quien + " activ\u00F3 la/el " + objeto;
    }
    console.log(mensaje);
}
activar("Javier", "batiseñal", "tarde");
