var read=require('readline-sync');
var util=require('../ds_utility/queue_utility');


function banking()
{
    var input=read.question("Enter the number of persons: ");
    util.banking(read,input);
}
banking();