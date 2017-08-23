let fs = require('fs');
const testFolder = '../promo3-firstnode/';

fs.writeFile('toto.txt', 'Hello Toto!', function(err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
});


fs.readdir('.', function(err, files) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(files);
})

// fs.readdir(testFolder, (err, files) => {
//     files.forEach(file => {
//         console.log(file);

//     });
// })

fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
})