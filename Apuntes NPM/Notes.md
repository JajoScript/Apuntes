# NPM

Node Package Manager.

NPM es un gestor de paquetes, modulos o dependencias para javascript, es necesario tener NodeJS.

Para saber la versión de Node que tenemos instalada en el sistema operativo utilizamos el comando:

    $node -v
    $node --version

Para saber la versión de NPM utilizamos el comando.

    $npm -v
    $npm --version

Para actualizar o verificar la existencia de una versión más actual de NPM utilizamos el comando:

    $npm install -g npm@latest

***
## Iniciar un proyecto de NPM
Es importante iniciar un proyecto de npm para guardar configuraciones y manejar distintos tipos de dependencias, al igual que compartir un entorno de desarrollo.

Es importante iniciar un proyecto de **Git**, para tener un registro de todos los cambios en caso de algun error.

    $git init

Para iniciar un proyecto con npm utilizamos el comando:

    $npm init

Para agilizar la creación de un proyecto con node utilizamos el comando siguiente para saltar las preguntas del iniciador de npm.

    $npm init -y
    $npm init --yes

**Preguntas de NPM**
*   package name: Nombre del proyecto.
*   version: version del proyecto.
*   description: una breve descripcion del proyecto
*   entry point: punto de entrada de el proyecto o archivo que inicia la aplicacion.
*   test command: comando que ejecutara algo o un script.
*   git repository: repositorio remoto del proyecto.
*   author: el autor del proyecto.
*   keywords: palabras clave a la hora de buscar tu proyecto.
*   author: nombre del autor o desarrollador del proyecto.
*   license: Licencias. 

**Configurando valores propios**
Podemos definir mediante un comando los valores que queremos generar para nuestros proyectos

    $npm set init.author.email "javieralmarzabucarey@gmail.com"
    : Registramos un valor para colocar nuestro email

    $npm set init.author.name "Javier Almarza"
    : Registramos un valor para colocar nuestro nombre.

    $npm set init.license "MIT"
    : Registramos el valor pordefecto de nuestra licencia.

***
## Instalación de dependencias.

**Instalación de las dependencias**
Para instalar dependencias utilizamos el comando siguiente:

    $npm i <paquete> --save
    $npm i <paquete>

El comando anterior instala el paquete como dependencia del proyecto, quiere decir que el proyecto necesita este paquete para poder ser ejecutado.

En otros casos nosotros como desarrolladores utilizaremos paquetes para el desarrollo de nuestro proyecto, que no deberian llegar a producción ya sea por temas de seguridad o de optimización y tamaño, para estos casos usamos el comando:

    $npm install <paquete> -D
    $npm install <paquete> --save-dev

**Archivos de una dependencia**
Luego de instalar una dependencia esta se descargara en nuestro proyecto y se almacenara en la carpeta **Node_modules**, es muy importante que ignoremos esta carpeta al momento de ser enviado el proyecto a producción o a un repositorio remoto, para eso utilizamos el archivo **.gitignore**

*.gitignore* nos permite ignorar los archivos para no ser enviados al repositorio remoto.

**Dependencias del proyecto**
    
    "dependencies": {
        "moment": "^2.24.0"
    }

**Dependencias de desarrollo**
    
    "devDependencies": {
        "nodemon": "^2.0.2"
    }

**Dependencias Globales**
Es necesario instalar de manera global aquellas dependencias que ejecutan procesos fuera de nuestro proyecto de trabajo, como el caso de **nodemon**, para instalar un paquete global utilizamos el comando:

    $npm install nodemon -g
    $npm i nodemon -g

Es necesario tener permisos para poder instalar las dependencias globales.

Para ver aquellos paquetes de fueron instalados de forma global utilizamos el comando:

    $npm list -g --depth 0

**Dependencias Opcionales**
Podemos instalar dependencias opcionales con el siguiente comando:

    $npm i eslint -0

**npm found**
Existen algunas dependencias que tengan sistemas de recaudación para apoyar a los desarrolladores detras del desarrollo y actualización de esa dependencia.

**Simulación de Instalación**
Podemos simular la instalación de algunos paquetes de los cuales tengamos dudas sobre su estado de desarrollo, es importante estar atento a no utilizar dependencias que esten desactualizadas o tengan ciertas vulnerabilidades, para eso ejecutamos el comando:

    $npm i react --dry-run

**Forzando una instalación**
Al igual que podemos simular una instalación, podemos forzar una dependencia para que se instale en la ultima versión del servidor de npm, utilizando el comando:

    $npm i webpack --force
    $npm i webpack -f

**Instalando las dependencias**
Al ejecutar el comando **npm install** se instalaran todas las dependencias registradas en el archivo **package.json**.

**Instalando Versiones especificas**
Para instalar una dependencia en una version especifica utilizamos el comando:

    $npm install json-server@0.15.0

Para instalar la version mas reciente utilizamos.

    $npm install json-server@latest

***
## Actualizar y eliminar paquetes.

**Actualización**

Ver todos los paquetes instalados y sus dependencias.

    $npm list

Ver archivo desactualizados.

    $npm outdate

Ver el funcionamiento de las actualizaciones y versiones.

    $npm outdate --dd

Actualiza los paquetes.

    $npm update

**Desinstalar paquetes**
Al desinstalar un paquete, este se elimina de **Node_modules** y de **package.json**.

Desinstala el paquete de **node_modules y package.json**.

    $npm uninstall json-server

Desinstala el paquete de **node_modules pero no de package.json**

    $npm uninstall json-server --no-save

***
## Package-lock.json

Almacena la informacion de nuestro proyecto.

**Versionado**
    
            [   carret  ^    ]
    --------------------------
    | 3     | 9     |   2    |
    | Mayor | Menor | Patch  |
    --------------------------
                    [ tilde ~]

*   Mayor : Cambios grandes.
*   Minor : Cambios pequeños, algunas funcionalidades, descontinuacion de algunas funciones.
*   Patch : Arreglo de bugs y errores.

***
## Scripts
Podemos crear los scripts que necesitemos.
se deben definir en el archivo **package.json** en la sección scripts.

    "script" : {
        "build" : "webpack --mode production",
        "start" : "node index.js"
    }

Para ejecutar un script utilizamos:

    $npm run <script>

***
## Solucion de problemas
Podemos ejecutar un script de modo que entregue mucha mas información sobre el proceso de ejecucion.

    $npm run build --dd

***
## Seguridad de un proyecto.

    $npm audit

verifica las vulnerabilidades de las dependencias.

    $npm audit --json

Genera un archivo .json con la informacion de las vulnerabilidades.

    $npm audit fix

Repara las vulnerabilidades, actualizando las dependencias o instalando sus dependencias.
