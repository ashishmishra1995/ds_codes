/*****************************************************************************************
 * Execution       :    1.  default mode
 *  
 * Purpose         :   Learning Queue 
 * 
 * @description
 * @author          :   BridgeLabz <ASHISH KUMAR MISHRA>
 * @file            :   queue_utility.js
 * @overview        :   banking.js, anagramQueue.js
 * @module          :   utility
 * @version         :   1.0
 * @since           :   20-Aug-2018    
 ******************************************************************************************/
class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}
class Queue {
    constructor() {
        this.tail = null;
        this.head = null;
       
    }


    enqueue(item) {
        let node = new Node(item)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }


    dequeue() {
        if (!this.head) {
            return 'No item'
        } else {
            let itemToPop = this.head
            this.head = this.head.next
            return itemToPop
        }
    }

    len() {
        let current, counter
        [current, counter] = [this.head, 0]
        while (current) {
            counter++
            current = current.next
        }
        return counter;
    }

    peek() {
        if (this.head) {
            return this.head.data
        } else {
            return 'Empty'
        }
    }

    isEmpty() {
        return this.len() < 1;
    }

    printQ() {
        var curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}

module.exports={
    /**
     * BANKING:
     * 
     * @description This code takes number of persons as input and performs the withdrawl and deposit actions
     * @argument number to take number of persons as input from the user
     */
    banking: function(read,number)
    {
        var q=new Queue();
        var total_bal=1000;

        for(var i=0; i<number; i++)
        {
            q.enqueue(i);
        }
        //console.log(q.len());

        while(q.len())
        {
            var option= read.question("Enter 1 to withdraw and 2 to deposit amount: ");
            if(option==1) 
            {
                var withdraw_amt=read.question("Enter the amount to be withdrawn: ");
                if(total_bal>=withdraw_amt)
                {
                    total_bal=total_bal-withdraw_amt;
                    console.log("Total available balanace= "+total_bal+" INR");
                }else{
                    console.log("Sorry!!! Running out of balance");
                    process.exit();
                }
            }
            else if(option==2)
            {
                var dep_amt=read.question("Enter the amount to be deposited: ");
                total_bal=parseInt(total_bal)+parseInt(dep_amt);
                console.log("Total available balanace= "+total_bal+" INR");
            }
            else{
                console.log("Sorry you can't perform any operation! Contact the branch manager");
                break;
            }
            q.dequeue();
        }
        
    },

    anagramQueue: function () {
        var q1 = new Queue();
        var q2 = new Queue();
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
        for(var i=0; i<arr.length; i++)
        {
            q1.enqueue(arr[i]);
        }
        
        for(var j=0; j<arr1.length;j++)
        {
            q2.enqueue(arr1[j]);
        }
        console.log("Prime numbers between 0 and 1000 are==> ");
        console.log(q1.printQ());
        console.log("Prime Anagram pairs between 0 and 1000 are==> ");
        console.log(q2.printQ());
    },
}