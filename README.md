# microservicio_docker
Ejemplo de un proyecto de microservicios, el cual consiste en consultar el API publica del precio de criptomonedas de Bitso. 
el cual el servicio A consulta el precio de BTC, el Servicio B consulta el precio de ETH y el tercer servicio representa el 
gateway pasa consumir el servicio A y B y arrojar una sola respuesta con el payload de A y B.

Para ejecutar nuestros microservicios vamos a ejecutar el siguiente comando ``docker-compose up --build`` .
Ahora podemos consultar nuestra api usando el siguiente enlace [http://127.0.0.1:3001/api/v1/getPriceBtcAndEth](http://127.0.0.1:3001/api/v1/getPriceBtcAndEth)

# Escalando servicios con docker-compose
Siempre hay una gran necesidad de escalar nuestra aplicación de acuerdo a la demanda que tenga, puede haber ocasiones donde nuestro servicio tenga millones de 
peticiones al mismo tiempo y para balancear la carga lo más conveniente es escalar nuestro servicios, es decir, tener muchas instancias de nuestros contendores 
para distribuir la carga y el trabajo se reparta entre todas las instancias para mejor la respuesta, docker nos permite hacer esto de forma sencilla, vamos escalar 
de tal forma que vamos a tener 10 instancias de los servicios a y b. Cada servicio definido en el docker-compose puede escalar usando el siguiente comando. Ejecutando
el siguiente comando: ``docker-compose scale “service name” = “no of instances”``.

Ejemplo, escalar servicio A ``docker-compose scale btc-service=10``

Ejemplo, escalar servicio B ``docker-compose scale eth-service=10``

Ahora cuando tengamos una carga de peticiones veremos que efectivamente los request se distribuyen entre las instancias de nuestro servicios.

Mas informacion en [http://oscarcode.herokuapp.com/Microservices](http://oscarcode.herokuapp.com/Microservices)
