var fs = require('fs');
var readline = require('readline')
var util = require('../ds_utility/stack_utility.js');


var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var data = fs.readFileSync('hash.txt');
data = (data.toString()).split(',');

function hashing() {
        
            util.hashing(data);
            read.close();        
}
hashing();