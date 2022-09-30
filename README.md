# Summary (Resumen)

FrontEnd es un ViewPort (Página web) creado/a con *NODE JS*. Las rutas se crearon y configuraron con el fin de que puedan interactuar entre sí, permitiendo así un acceso desde y hacia cada una de estas mediante hipervínculos dentro de cada una. Contando también con accesos a direcciones vinculadas al tema del proyecto, entre las cuales se encuentran redes sociales y accesos a material del grupo musical del que se hace referencia, además de una pequeña biografía en su página inicial y el listado de sus integrantes; También cuenta con una  página de discografía se presenta material del grupo musical, la que cuenta con visualizaciones de algunos de sus trabajos y un pequeño listado con el cual se puede acceder al material discográfico con el que cuenta la plataforma de *YOUTUBE*, el cual permite disfrutar de un momento de música.
La página de discografía está conectada directamente con el *Crud* creado con el mismo tema, por lo cual trabaja con la misma base de datos **dblosprisioneros.sql**, por ende debe ejecutarse con los mismos procedimientos realizados para poner en marcha el *Crud*.

## Motivation (Motivación)

La motivación de este proyecto es el poder desarrollar una página en la cual se pueda interaccionar no sólo con la misma, sino que también realizar enlaces y re direccionamientos que permitan al usuario tener una experiencia que conjugue más de una posibilidad al buscar información de algún tema en particular.

### To Get Started (Para Empezar)

Instale Node JS en su computador y ejecute en este para dar comienzo al proyecto.

#### Install dependencies (Instalar Dependencias)

npm init para iniciar el proyecto
npm i poniendo en secuencia las dependencias a utilizar separadas por un espacio y luego presionar ENTER

### Run FRONTEND (Ejecute FRONTEND)

npm start

### Built With (Construido Con)

- cookie-parser
- debug
- dotenv
- express
- hbs
- http-errors
- licence
- morgan
- mysql
- nodemon
- util

### Features (Características)

- Diseño simple, de fácil comprensión y manejo.
- Con una estructura no muy llamativa pero eficiente, permite acceder fácilmente a la información que se encuentra disponible.
- Está compuesta por la siguiente estructura por orden descendente:
-- **Carpeta bin**: contiene archivos binarios, los cuales son el código ejecutable real para la aplicación o biblioteca.
--**Carpeta models**: contiene el archivo *productsModel.js*, en este archivo se encuentra  el código que especifica la ruta y el requerimiento para acceder a la *BASE DE DATOS* con la cual trabaja el proyecto.
--**Carpeta node_modules**: es un directorio que se crea en la carpeta raíz de nuestro proyecto cuando instalamos *paquetes o dependencias mediante npm*.
--**Carpeta public**: en la cual se encuentran las *subcarpetas*:
---*images*: la cual contiene todas las imágenes que se visualizan en el proyecto.
---*stylesheets*: la cual contiene el archivo *styles.css (Hojas de Estilo en Cascada)*, en el que se encuentra el código que se utiliza para dar estilo a la página web.
--**Carpeta routes**: contiene los archivos *index.js y discografía.js*, en estos archivos se encuentra el código que especifica la ruta y el requerimiento para acceder a las páginas web o viewport del proyecto.
--**Carpeta views**: contiene los archivos *layout.hbs, index.hbs y discografia.hbs*, los cuales contienen el código que permite que se puedan visualizar las páginas del proyecto, ya que son archivos de visualización (las vistas).
--**Archivo Enviroment (.env)**: que contiene las variables de entorno y le permite personalizarlas en trabajos individuales.
--**Archivo app.js**: es uno de los archivos más importantes de la aplicación, puesto que es el primer componente que se cargará y por lo tanto es el componente que contiene toda la aplicación del proyecto.
--**Archivo db.js**: en este archivo se encuentran cargadas las  dependencias que se requieres para acceder a la *BASE DE DATOS* con la cual trabaja el proyecto.
--**Archivo dblosprisioneros.sql**: este archivo contiene la información requerida para crear la base *BASE DE DATOS* para levantar el proyecto.
--**Archivo package.json**: es un archivo generado automáticamente cuando se instalan paquetes o dependencias en el proyecto. Su finalidad es mantener un historial de los paquetes instalados y optimizar la forma en que se generan las dependencias del proyecto y los contenidos de la carpeta node_modules/ .
--**Archivo package-lock.json**: es un archivo generado automáticamente cuando se instalan paquetes o dependencias en el proyecto. Su finalidad es mantener un historial de los paquetes instalados y optimizar la forma en que se generan las dependencias del proyecto y los contenidos de la carpeta node_modules/ .

### Extra Information (Información Extra)

- El PROYECTO cuenta con el  archivo **dblosprisioneros.sql**, el cual contiene la información requerida para crear la base de datos:
- **Nombre de la DB: dblosprisioneros**
- **Nombre de la TABLA: discografia**
- **Nombre de la TABLA: users**

## ViewPort

Primero activar la base de datos con **XAMPP** y [http://localhost/dashboard/](http://localhost/dashboard/), con **MySQLWorkbench** o el entorno de bases de datos del que disponga.
Para visualizar, ejecute la aplicación en el modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador. el cual se puede modificar dependiendo de la necesidad.
