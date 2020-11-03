
var net = require('net');

port = process.argv[2];
var server = net.createServer(function(connection) {

	connection.on('data', function(data){
        var un = ['Dan Israel','Copa Lupe','dcopalupe','123456'];
        var dos = ['Jorge Andres','Alanoca Quino','jalanocaquino','1q2w3e4'];
        var tres = ['Ana','Condori Quispe','acondoriquispe','54321'];
        cad = data.toString();
        var div = cad.split("/");

        if((un[2]==div[0] && un[3]==div[1]) || (dos[2]==div[0] && dos[3]==div[1]) || (tres[2]==div[0] && tres[3]==div[1])){
        	if(un[2]==div[0]){
        		console.log('cliente connectado : ' + data);
        		connection.write('Bienvenido '+un[0]+' '+un[1]);
        	}
        	else{
        		if(dos[2]==div[0]){
        			console.log('cliente connectado : ' + data);
        			connection.write('Bienvenido '+dos[0]+' '+dos[1]);
        		}
        		else{
        			console.log('cliente connectado : ' + data);
        			connection.write('Bienvenido '+tres[0]+' '+tres[1]);
        		}
        	}
        }
        else{
        	if((un[2]!=div[0]) && (dos[2]!=div[0]) && (tres[2]!=div[0])){
        		connection.write('El usuario '+div[0]+' es incorrecto o no existe');
        	}
        	else{
        		connection.write('La contraseña para '+div[0]+' es incorrecta');
        	}
        }
    });

	connection.on('end', function() {
	//console.log('cliente desconectado');
	});
});

server.listen(port, function() {
	console.log('servidor esta escuchando '+port);
});