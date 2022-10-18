const mysql = require ('mysql')
//Conexion a la base de Datos
const conection = mysql.createConnection({
    host:'bd1tesla.cozzei3fn7eo.us-east-1.rds.amazonaws.com',
    user:'admin',
    password:'administracion',
    database:'logintesla'
})
conection.connect((err)=>{
    if(err) throw err
    console.log('Conexion Exitosa')
})

//Insertar datos 
const insertar = "INSERT INTO datos (valor1, valor2, fechaingreso) VALUES ('0.98371', '32.08761', NOW())"
conection.query(insertar, (err, rows)=>{
    if(err) throw err
})


//Ver datos
conection.query('SELECT * FROM datos', (err, rows)=> {
    if(err) throw err
    console.log('Los datos son los siguiente:')
    console.log(rows)
})


/* Comandos para la consola...

1. npm init -y
Esto crea package .json

2. npm install mysql
Permite acceso a mysql e instala node modules

*/
