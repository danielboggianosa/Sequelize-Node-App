# Sequelize-Node-App
Aplicación Web utilizando node JS y sequelize para conexión la base de datos. Con los modelos nativos de Sequelize

##Comandos Importantes:
```npx sequelize init
npx sequelize model:create
npx sequelize db:migrate
npx sequelize db:migrate:undo:all
```

##Creación paso a paso:
*npx sequelize init
*npx sequelize model:create --name Project --attributes titulo:string,descripcion:string,inicio:date,final:date tiempo:time,fecha:date,horas:integer
*npx sequelize model:create --name equipo --attributes nombre:string,descripcion:string,imagen:string
*npx sequelize model:create --name tarea --attributes titulo:string,descripcion:string,inicio:date,final:date,tiempo:time,duracion:time
*npx sequelize model:create --name usuario --attributes nombre:string,apellido:string,correo:string,imagen:string,password:string
*crear en cada uno de los modelos, en la carpeta de "migrations", los campos que serviran de llaves foráneas indicándolos como tipo entero.
*Crear las asociaciones según corresponda en cada uno de los modelos en la carpeta "models"