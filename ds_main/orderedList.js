var fs = require('fs');
var readline = require('readline')
var util=require('../ds_utility/linkedList.js');

var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


var data = fs.readFileSync('file.txt');
data= ((data.toString()).toLocaleLowerCase()).split(' ');
//console.log(data);

function orderedList()
{
    read.question("Enter the element to be searched: ", function(ele){
        util.orderedList(data,ele);
        read.close();
    });
}
orderedList();