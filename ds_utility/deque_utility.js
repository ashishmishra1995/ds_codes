/*****************************************************************************************
 * Execution       :    1.  default mode
 *  
 * Purpose         :   Learning Double Ended Queue (Deque) 
 * 
 * @description
 * @author          :   BridgeLabz <ASHISH KUMAR MISHRA>
 * @file            :   deque_utility.js
 * @overview        :   pallindrome.js
 * @module          :   utility
 * @version         :   1.0
 * @since           :   20-Aug-2018    
 ******************************************************************************************/
function Deque() {
    this.stac = new Array();
    this.popback = function () {
        return this.stac.pop();     //elements popped out from rear side of the deque
    }
    this.pushback = function (item) {
        this.stac.push(item);       //elements pushed in to the rear side of the deque
    }
    this.popfront = function () {
        return this.stac.shift();   //elements popped out from front side of the deque
    }
    this.pushfront = function (item) {
        this.stac.unshift(item);    //elements pushed in to the front side of the deque
    }
    this.printDQue = function () {
        var str = "";
        for (var i = 0; i < this.stac.length; i++) {
            str += this.stac[i] + " ";
        }
        return str;
    }
    this.dqSize = function () {
        return this.stac.length;    //determines the size of the deque
    }
}

module.exports = {
    /**
     * PALLINDROME:
     * @description This code takes a string input from user and checks whether its a pallindrome
     * @argument string to take string user input
     */
    pallindrome: function (string) {
        var dq = new Deque();
        var arr = [];
        arr = string.split('');
        for (var i = 0; i < arr.length; i++) {
            dq.pushback(arr[i]);                //pushing elements to the rear side of deque
        }
        var flag = true;
        if (dq.dqSize() % 2 == 0) {             //checking for user input the word if it is of even or odd length
            while (dq.dqSize() > 0) {
                var a = dq.popfront();          //popping out one letter from front side of deque
                var b = dq.popback();           //popping out one letter from rear side of deque
                if (a !== b) {
                    flag = false;               //returns false if the popped letters are not equal
                }
            }
        } else {
            while (dq.dqSize() > 1) {           //if the word length is of odd size
                var a = dq.popfront();
                var b = dq.popback();
                if (a !== b) {
                    flag = false;
                }
            }
        }
        if (flag) {                         
            console.log("Pallindrome");
            process.exit();
        } else {
            console.log("Not a Pallindrome");
            process.exit();
        }
    }
}