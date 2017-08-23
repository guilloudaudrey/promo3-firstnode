let mysql = require('mysql');

function a(callback) {

    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'admin1',
        password: 'simplon',
        database: 'firstdb'
    });

    connection.connect();


    connection.query('SELECT * FROM small_doggo', function(err, result, fields) {
        if (err) throw error;
        //console.log(result);
        callback(result);

    });


    connection.end();
}

module.exports = {
    a: a

};