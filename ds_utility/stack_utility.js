class Stack {
    constructor() {
        this.items = [];
        this.string = "";
    }

    sPush(element) {
        // push element into the items
        this.items.push(element);
    }
    sPop() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
    sPeek() {
        // return the top most element from the stack
        // but does'nt delete it.
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        // return true if stack is empty
        return this.items.length == 0;
    }
    len() {
        return this.items.length;
    }
    toString() {
        return this.string;
    }
    printStack() {
        var str = "";
        for (var i = this.items.length; i > 0; i--)
            str += this.items[i] + " , ";
        return str;
    }
}
module.exports = {
    balancedParanthesis: function (expression) {
        var stack = new Stack();
        var count = 0, count1 = 0;
        for (var i = 0; i < expression.length; i++) {
            if (expression[i] == '(') {
                stack.sPush(expression[i]);
                count++;
            }
            else if (expression[i] == ')') {
                stack.sPop();
                count1++;
            }
        }
        if (count == count1) {
            console.log(true);
        } else {
            console.log(false);
        }
    },

    prime2D: function () {
        var flag, i, prime = [], arr = [], array = [], arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [], arr9 = [];

        for (i = 0; i < 1000; i++)      //outer for loop starts
        {
            flag = 1;
            for (var j = 2; j <= i / 2; j++)   //inner for loop starts 
            {
                if (i % j === 0) {
                    flag = 0;
                    break;
                }
            }       //inner for loop ends
            if (flag === 1) {
                prime.push(i);
            }
        }
        var str = "";
        for (var x = 0; x < prime.length; x++) {
            if (prime[x] > 0 && prime[x] <= 100) {
                str = prime[x] + " ";
                arr.push(str);
                str = "";
            }
            if (prime[x] > 100 && prime[x] <= 200) {
                str = " " + prime[x] + " ";
                arr1.push(str);
                str = "";
            }
            if (prime[x] > 200 && prime[x] <= 300) {
                str = " " + prime[x] + " ";
                arr2.push(str);
                str = "";
            }
            if (prime[x] > 300 && prime[x] <= 400) {
                str = " " + prime[x] + " ";
                arr3.push(str);
                str = "";
            }
            if (prime[x] > 400 && prime[x] <= 500) {
                str = " " + prime[x] + " ";
                arr4.push(str);
                str = "";
            }
            if (prime[x] > 500 && prime[x] <= 600) {
                str = " " + prime[x] + " ";
                arr5.push(str);
                str = "";
            }
            if (prime[x] > 600 && prime[x] <= 700) {
                str = " " + prime[x] + " ";
                arr6.push(str);
                str = "";
            }
            if (prime[x] > 700 && prime[x] <= 800) {
                str = " " + prime[x] + " ";
                arr7.push(str);
                str = "";
            }
            if (prime[x] > 800 && prime[x] <= 900) {
                str = " " + prime[x] + " ";
                arr8.push(str);
                str = "";
            }
            if (prime[x] > 900 && prime[x] <= 1000) {
                str = " " + prime[x] + " ";
                arr9.push(str);
                str = "";
            }

        }
        //array=arr+arr1+arr2+arr3+arr4+arr5+arr6+arr7+arr8+arr9;
        array.push(arr);
        array.push(arr1);
        array.push(arr2);
        array.push(arr3);
        array.push(arr4);
        array.push(arr5);
        array.push(arr6);
        array.push(arr7);
        array.push(arr8);
        array.push(arr9);
        console.log("[0-100: " + array[0] + '\n' + "100-200: " + array[1] + '\n' + "200-300: " + array[2] + '\n' + "300-400: " + array[3] + '\n' + "400-500: " + array[4] + '\n' + "500-600: " + array[5] + '\n' + "600-700: " + array[6] + '\n' + "700-800: " + array[7] + '\n' + "800-900: " + array[8] + '\n' + "900-1000: " + array[9] + "]");
        //console.log(array);
    },

    primeAnagarm: function () {
        var arr = [], arr1 = [], arr2 = [], arr3 = [], str = "", array = [];
        var flag, i;

        for (i = 0; i < 1000; i++) {
            flag = 1;
            for (var j = 2; j <= i / 2; j++) {
                if (i % j === 0) {
                    flag = 0;
                    break;
                }
            }
            if (flag === 1) {
                arr.push(i);        //pushing all the prime numbers into an array
            }
        }

        console.log("Anagrams between 0 and 1000 are: ");
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                var a1 = '' + parseInt(arr[i]);
                var a2 = '' + parseInt(arr[j]);
                if ((((a1.split('')).sort()).join()) === (((a2.split('')).sort()).join())) //checking for anagram
                {
                    str = (a1 + " & " + a2);
                    arr1.push(str);
                    str = "";
                }/*else{
                    arr2.push(arr);
                }*/

            }
        }

        array.push(arr);
        array.push(arr1);
        array = '[' + '[' + " " + arr + " " + ']' + '\n\n\n' + '[' + " " + arr1 + " " + ']' + ']';
        console.log(array);
        // console.log(arr2);
    },

    anagramStack: function () {
        var stack1 = new Stack();
        var stack2 = new Stack();
        var arr = [], arr1 = [], arr2 = [], arr3 = [], str = "", array = [];
        var flag, i;

        for (i = 0; i < 1000; i++) {
            flag = 1;
            for (var j = 2; j <= i / 2; j++) {
                if (i % j === 0) {
                    flag = 0;
                    break;
                }
            }
            if (flag === 1) {
                arr.push(i);        //pushing all the prime numbers into an array
            }
        }

        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                var a1 = '' + parseInt(arr[i]);
                var a2 = '' + parseInt(arr[j]);
                if ((((a1.split('')).sort()).join(',')) === (((a2.split('')).sort()).join(','))) //checking for anagram
                {
                    str = (a1 + " & " + a2);
                    arr1.push(str);
                    str = "";
                }
            }
        }
        for (var i = 0; i < arr.length; i++) {
            stack1.sPush(arr[i]);
        }

        for (var j = 0; j < arr1.length; j++) {
            stack2.sPush(arr1[j]);
        }
        console.log("Prime numbers between 0 and 1000 are==> ");
        console.log(stack1.printStack());
        console.log("Prime Anagram pairs between 0 and 1000 are==> ");
        console.log(stack2.printStack());
    },

    hashing: function (data) {
        var fs=require('fs');
        var array = [], arr0 = [], arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [], arr9 = [];
        for (var i = 0; i < data.length; i++) {
            if ((data[i] % 11) === 0) {
                arr0.push(data[i]);
            } else if ((data[i] % 11) === 1) {
                arr1.push(data[i]);
            } else if ((data[i] % 11) === 2) {
                arr2.push(data[i]);
            } else if ((data[i] % 11) === 3) {
                arr3.push(data[i]);
            } else if ((data[i] % 11) === 4) {
                arr4.push(data[i]);
            } else if ((data[i] % 11) === 5) {
                arr5.push(data[i]);
            } else if ((data[i] % 11) === 6) {
                arr6.push(data[i]);
            } else if ((data[i] % 11) === 7) {
                arr7.push(data[i]);
            } else if ((data[i] % 11) === 8) {
                arr8.push(data[i]);
            } else if ((data[i] % 11) === 9) {
                arr9.push(data[i]);
            }
        }
        array.push(arr0);
        array.push(arr1);
        array.push(arr2);
        array.push(arr3);
        array.push(arr4);
        array.push(arr5);
        array.push(arr6);
        array.push(arr7);
        array.push(arr8);
        array.push(arr9);
        
        for (var i = 0; i < array.length; i++) {
           /*var p= array[i].join('->');
            try {
                fs.writeFileSync('hash_op.txt',
                
                (`${i}th slot: ` + p) , { mode: 0o755 });
              } catch(err) {
                // An error occurred
                console.error(err);
              }*/
            console.log(`${i}th slot: ` + array[i].join('->'));
        }
        
        
    }
}