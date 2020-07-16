# Sqlite3 

## Caracteristicas
*   ligera
*   Multiplataforma

## Type
*   NN : Not null 
    *   El dato no puede estar vacio o nulo.
*   PK : Primary key
    *   llave primaria unica.
*   AI : Auto increment
    *   Se incrementa automaticamente.
*   U  :


## Consultas SQL

Primera sentencia:

    SELECT * FROM usuarios;

*Significado la sentencia:*

***Selecciona todos los datos de la tabla usuarios.***

*partes de la sentencia:*

    SELECT : seleciona o elige.

    * : Todos

    FROM : desde que tabla.

    usuarios : nombre de la tabla.

    SELECT nombre,correo FROM usuarios;

Segunda sentencia:

    SELECT nombre,correo FROM usuarios;

*Significado la sentencia:*

***Selecciona el nombre y el correo de la tabla usuarios.***

*partes de la sentencia:*

    SELECT : seleciona o elige.

    nombre,correo : las columnas nombre y correo.

    FROM : desde que tabla.

    usuarios : nombre de la tabla.

Tercera sentencia:

    INSERT INTO usuarios(nombre,correo) VALUES("vicho", "vichin@gmail.com")

*Significado la sentencia:*

***Inserata en la tabla usuarios en los campos nombre y correo el valor de "vicho" y "vichin@gmail.com"***

*partes de la sentencia:*

    INSERT INTO: inserta datos en un lugar.

    usuarios(nombre, correo) : nombre de la tabla seguido de las columnas donde se insertaran los datos.

    VALUES("vicho", "vichin@gmail.com") : valores en el mismo orden definido por la sentencia anterior.
