//import fs from 'fs';


let hello = require('./deuxieme');
let db = require('./database.js');

// fs.readFile('/home/guilloud/dev/tchat/README.md', 'utf-8',
//     function(error, data) {
//     //console.log(data);
// });
//console.log(fs);
//console.log('bloup');
let dogs;
let demande = db.a(function(callback) {
        dogs = JSON.stringify(callback);
    })
    //doggo().string;

//hello();

let http = require('http');

let server = http.createServer(function(req, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello World Page</title>");
    response.write("</head>");
    response.write(dogs);
    response.write("<body>");
    response.write("Hello World!");
    response.write("</body>");
    response.write("</html>");
    response.end();
});



server.listen(1337);
console.log("Serveur web lancé sur localhost:1337 ...");