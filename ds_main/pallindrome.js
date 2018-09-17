var readline=require('readline');
var util=require('../ds_utility/deque_utility.js');
var read=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pallindrome()
{
    read.question("Enter the String: ", function(string){
        util.pallindrome(string);
        read.close();
    });
    
}
pallindrome();