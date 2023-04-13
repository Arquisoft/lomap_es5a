# LOMAP ES5A

[![CI for LOMAP ES5A](https://github.com/Arquisoft/lomap_es5a/actions/workflows/lomap_es5a.yml/badge.svg)](https://github.com/Arquisoft/lomap_es5a/actions/workflows/lomap_es5a.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es5a&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es5a)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es5a&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es5a)


Lomap es una aplicación web descentralizada que permite compartir puntos de interés con tus amigos y conocidos. 

## Stack tecnológico

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)


## Funcionalidades


## Instalación

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

## Colaboradores
Este proyecto es posible gracias a los siguientes desarrolladores:

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 10px; padding: 20px 0;">
   <a href="https://github.com/franciscocoya" target="_blank">
      <img src="https://user-images.githubusercontent.com/56480356/231735724-81d30a4a-87d4-4e09-a549-9027a529a7f5.png" style="border-radius: 100px;" width="96px" height="96px"/>
   </a>
   <a href="https://github.com/UO282337" target="_blank">
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
