
var readline = require('readline')
var util=require('../ds_utility/stack_utility');

var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


function balancedParanthesis()
{
    read.question("Enter the expression: ", function(expression){
        util.balancedParanthesis(expression);
        read.close();
    })   
}
balancedParanthesis();