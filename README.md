# Express API
Realicé un servidor con express agregando los diferentes endpoints y probandolos en [Postman](https://www.postman.com/)

## Instalar dependencias
```
npm install
```

## Dependencias
| Nombre  | Versión | Documentación | 
| :------------: | :------------: | :------------: |
| Express | 4.18.0 | <a href="https://expressjs.com/en/4x/api.html" target="_blank"><img src="https://img.shields.io/badge/Express-Documentation-lightgray?style=for-the-badge&logo=express"></a> |

Versión de Node: [16.14.2](https://nodejs.org/docs/latest-v16.x/api/index.html).

## ¿Cómo iniciar el servidor?
1. Debemos ver las rutas que existen que en este caso son 2:
- `localhost:3000/v1/explorers`: Nos muestra todos los explorers de una base de datos (esta se encuentra directamente en el archivo [app.js](https://github.com/iRetr0o/express_api/blob/main/app.js))
- `localhost:3000/v1/explorers/:id`: Nos mostrara el explorer con el id que escribamos, si es que existe

2. Corremos nuestro servidor con `node app.js`.

Podemos irnos a alguna de las url que mencionamos anteriormente en nuestro navegador o podemos probar los endpoins en Postman ya que el servidor tiene mas endpoints como ***Borrar (delete)***, ***crear (post)*** y ***actualizar (put)*** que podemos probar.

## Actividades desarrolladas
- El uso básico de express
- Cómo crear un API básica (GET, POST, PUT, DELETE)
- Cómo probar endpoints
