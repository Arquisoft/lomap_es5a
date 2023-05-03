# LOMAP ES5A

[![CI for LOMAP ES5A](https://github.com/Arquisoft/lomap_es5a/actions/workflows/lomap_es5a.yml/badge.svg)](https://github.com/Arquisoft/lomap_es5a/actions/workflows/lomap_es5a.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es5a&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es5a)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es5a&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es5a) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

Lomap es una aplicación web descentralizada que permite compartir puntos de interés con tus amigos y conocidos. Se encuentra desplegada en [este repositorio](https://github.com/franciscocoya/lomapes05a_production)

Enlace a la aplicación:
[https://franciscocoya.github.io/lomapes05a_production/](https://franciscocoya.github.io/lomapes05a_production/)

## Stack tecnológico

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

## Instalación

<hr>

### Versiones
La aplicación se ha desarrollado y probado utilizando las siguientes versiones de librerías:

- React: v18.0.2
- NodeJS: 18.15.0
- NPM: 8.19.3

<hr>

1. Acceder a la [siguiente página](https://github.com/Arquisoft/lomap_es5a/releases) y descargar la última versión (latest release) del proyecto.

2. Desplazarse hasta el directorio ```webapp``` ([Ver directorio](https://github.com/Arquisoft/lomap_es5a/tree/master/webapp))

``` shell
cd webapp
```

3. Copiar el fichero de variables de entorno denominado ```.env.development``` dentro del directorio anterior.

<img src="https://user-images.githubusercontent.com/56480356/231736706-8a3e24bf-52b7-4e74-a63b-227249f65356.png" alt="Estructura directorios aplicación lomap" width="auto" height="300px"/>

> Importante
>
> El fichero ```.env.development``` no se encuentra en este repositorio por motivos de seguridad. Contactar con <a href="mailto:uo257239@uniovi.es">el responsable</a>

### Variables de entorno

A continuación, se indican las variables de entorno contenidas dentro del fichero ```.env.development``` mencionado en puntos anteriores (webapp), para incluirlo con tus credenciales.

```
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECTID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID
REACT_APP_NODE_ENV=development
```

> Nota
>
> La variable ```REACT_APP_NODE_ENV``` indica el nombre del ficherlo .env utilizado. Asignar ```development``` para que reconozca el fichero denominado de esta forma (.env.development).


4. Instalar las dependencias del proyecto, a través del gestor de paquetes de npm. Para ello, es necesario tener instalado previamente ```NodeJS```, descargado a través del [siguiente enlace](https://nodejs.org/en/download). Es recomendable instalar la última versión estable (LTS).

``` shell
   npm install --legacy-peer-deps
```

## Guía de inicio rápido

A continuación, te indicamos los pasos necesarios para ejecutar el proyecto y probar las principales funcionalidades desde tu entorno local.

### Iniciar la aplicación
``` shell
npm run start
```

### Comprobar errores de ESLINT
``` shell
npm run lint
```

### Pasar la suite de tests
``` shell
npm run test
```

### Pasar la suite de tests e2e
``` shell
npm run test:e2e
```

### Empaquetar el proyecto
``` shell
npm run build
```

### Desplegar de forma manual la aplicación en GitHub Pages
``` shell
npm run deploy
```

### Desplegar de forma automática mediante workflow de GitHub

Para realizar el despliegue de forma automática, a partir de un flujo de trabajo de GitHub, es necesario tener las credenciales de aplicación (secrets del repositorio), enumeradas en el apartado **Variables de entorno** 
Los nombres de las claves coinciden con los nombres establecidos para las variables de entorno.

### Añadir un nuevo punto
Iniciar sesión con una cuenta de SOLID. Una vez en sesión, pulsar la opción del menú de navegación superior denominada "Añadir punto", rellenar el formulario (Algunos campos son obligatorios, ver indicaciones).
<br><br>
![imagen](https://user-images.githubusercontent.com/56480356/235653704-a17608f1-dbb4-4531-8e71-42b87dd8862a.png)
<br><br>
Para añadir el nuevo punto, seguir los siguientes pasos:
- Escribir un nombre para el punto, que se utilizará como título de este.
- Arrastrar el marcador dentro del mapa, para localizar el punto.
- Seleccionar la categoría a la que pertenece.
- Indicar una descripción (Opcional).
- Seleccionar una imagen pulsando el botón "Subir imagen". Dicha imagen se mostrará en el popup del punto en mapa, entre otras ubicaciones. Esta acción también es opcional. 
<br><br>
<a href="https://youtu.be/bU9S6Q43PTw" target="_blank">
   <img src="https://user-images.githubusercontent.com/56480356/231818798-5a50c952-131a-4c5f-a749-fadf2821f924.png" alt="thumbnail"
   width="80%" height="auto"/>
</a>

<br><br />

<hr>

### Agregar / eliminar amigos
A la hora de agregar amistades sera necesario acceder al perfil del usuario que esta en sesion o acceder a "guardados". A continuacion mostraremos los pasos a seguir tanto para añadir y eliminar amistades:
<br/>
![image](https://user-images.githubusercontent.com/91533653/235512839-dfe07a6d-6d9e-44d0-93f0-53d587e0e350.png)

<br/>

Una vez accedamos a la vista del perfil del usuario deberemos hacer Click en el boton de refrescar amistades para que se carguen. Esta decision se toma para evitar el excesivo uso de llamadas a los provedores.
Para añadir seguiremos los siguientes pasos:
- Escribir el nombre de tu amigo de la siguiente manera: ```<nombre_de_usuario>.<provider>``` para poner un ejemplo mas concreto: ```pepe.inrupt.net``` 
- Hacer click en el boton para añadir el amigo. Si surge algun tipo de error un mensaje será mostrado al usuario dependiendo del error surgido.
- A aprtir de este momento el amigo ya estara en el POD del usuario. Pero recordemos que para no sobrecargar el servidor hemos añadido un boton para poder recargar tus amistades.

<br/>

Para eliminar amigos debemos seguir estos pasos:
- Hacer click sobre "la carta" del amigo y escoger eliminar.
- Este proceso ya actualiza la lista se tus amistades y no hará falta actualizar la lista como se hacia anteriormente en "añadir".


## Colaboradores
Este proyecto es posible gracias a los siguientes desarrolladores:

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 10px; padding: 20px 0;">
   <a href="https://github.com/franciscocoya" target="_blank">
      <img src="https://user-images.githubusercontent.com/56480356/231735724-81d30a4a-87d4-4e09-a549-9027a529a7f5.png" style="border-radius: 100px;" width="96px" height="96px"/>
   </a>
   <a href="https://github.com/miguelglez8" target="_blank">
      <img src="https://user-images.githubusercontent.com/56480356/231735744-9f8faf71-b843-42b5-b36f-bd7792406070.png" style="border-radius: 100px; filter: grayscale(100);" width="96px" height="96px"/>
   </a>
   <a href="https://github.com/UO277414" target="_blank">
      <img src="https://user-images.githubusercontent.com/56480356/231735775-76ef4b6c-72e3-42c5-92b6-d56d566e7deb.png" style="border-radius: 100px; filter: grayscale(100);" width="96px" height="96px"/>
   </a>
   <a href="https://github.com/RichardPix12" target="_blank">
      <img src="https://user-images.githubusercontent.com/56480356/231735801-1d65a1da-723d-4771-96fb-0d65f431d8db.png" style="border-radius: 100px; filter: grayscale(100);" width="96px" height="96px"/>
   </a>
   <a href="https://github.com/UO271572" target="_blank">
      <img src="https://user-images.githubusercontent.com/56480356/231734815-6411d057-8fd7-41ff-8419-b75a1bd741ad.png" style="border-radius: 100px" width="96px" height="96px"/>
   </a>
</div>
