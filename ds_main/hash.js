var fs = require('fs');
var readsync = require("readline-sync");
var readline=require('readline');
var util = require('/Users/apple/javascript/data structure codes/ds_utility/linkedList_utility.js');


var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function hashing() {
        
            util.hashing(readsync);
            read.close();        
}
hashing();