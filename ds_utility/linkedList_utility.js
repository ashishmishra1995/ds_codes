/*****************************************************************************************
 * Execution       :    1.  default mode
 *  
 * Purpose         :   Learning Linked List 
 * 
 * @description
 * @author          :   BridgeLabz <ASHISH KUMAR MISHRA>
 * @file            :   linkedList_utility.js
 * @overview        :   unorderedList.js, orderedList.js, hash.js
 * @module          :   utility
 * @version         :   1.0
 * @since           :   20-Aug-2018    
 ******************************************************************************************/
var fs = require('fs');
class Node {
    // constructor
    constructor(element, next) {
        this.element = element;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        // creates a new node
        var node = new Node(element);

        // to store current node
        var current;

        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }
    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            // add the element to the
            // first index
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element
            return curr.element;
        }
    }
    removeElement(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterae over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }
    /*find(element) {
        let thisNode = this.head;

        while (thisNode) {
            if (thisNode.element === element) {
                return thisNode.element;
            }
            thisNode = thisNode.next;
        }

        return (thisNode);
    }*/
    isEmpty() {
        return this.size == 0;
    }
    lSize() {

        return this.size;

    }
    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    searchNodeAt(position) {
        var currentNode = this.head,
            length = this.size,
            count = 1;

        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode.element;
    }
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
    insert_pos(val) {

        var newNode = new Node(val)

        var curr = this.head.next;

        var temp = this.head;
        //console.log(curr.element)
        //curr=curr.next;
        while (curr != null && (curr.element) < newNode.element) {   //console.log('hii');
            temp = curr;
            curr = curr.next;
        }
        newNode.next = curr;
        temp.next = newNode;

    }
    insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }
    /*find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
    find( item ) {
        let current = this.head.next;
        let counter = 0;
        while( current ) {
          if( current.data == item ) {
           return counter;
          }
          current = current.next;
          counter++;
        }
        return current;
     }*/
    find(val) {
        let thisNode = this.head;

        while (thisNode) {
            if (thisNode.value === val) {
                return thisNode;
            }

            thisNode = thisNode.next;
        }

        return thisNode;
    }

}

module.exports = {
    /**
     * UNORDERED LIST:
     * 
     * @description This code takes a list of elements and asks the user to search for an element. If the element is present in the list, it is popped out and if not, then it is inserted to end of list.
     * @argument arr to take the list of elements into an array
     * @argument ele to take the input from user, the element which needs to be searched
     */
    unorderedList: function (arr, ele) {
        var list = new LinkedList();

        for (var i = 0; i < arr.length; i++) {
            list.add(arr[i]);
        }
        list.printList();
        console.log("Index of element: " + list.indexOf(ele));
        console.log(list.indexOf(ele));
        if (list.indexOf(ele) == -1) {
            list.add(ele);                  //if the element is not present it will be added to the list
        } else {    
            list.removeElement(ele);        //if the element is not present it will be removed from the list
        }
        list.printList();

        try {
            fs.appendFileSync('/Users/apple/javascript/data structure codes/ds_main/file.txt', list.printList(), 'utf8');
            console.log('The "data to append" was appended to file!');      
        } catch (err) {
         /*Handle the error*/ console.log('data not copied');
                                                                    //writing data to the file
        }
        //fs.writeFileSync('/Users/apple/javascript/data structure codes/ds_main/file.txt', list.printList())
    },

    orderedList: function (data, num) {
        //var fs = require('fs'); //file open
        //var contents = fs.readFileSync('number', 'utf8')

        //var arr = data.split(' ')
        var arr1 = []
        for (var i = 0; i < data.length; i++) {
            var a = data[i]
            arr1.push(a);
        }
        arr1 = arr1.sort(function (a, b) {
            return a - b;
        });

        // var list = require('./structure_implementation/list.js')

        var l = new LinkedList();


        l.insert(arr1[0], 'head')

        for (var i = 1; i < arr1.length; i++) {
            l.insert(arr1[i], arr1[i - 1])
        }
        l.printList()

        var bool = l.search_num(num)

        //console.log(bool)
        if (bool) {

            l.remove(num);
            var a = l.num_getval();
            console.log(a);
            fs.writeFileSync('file.txt', a.trim())
            console.log('deleting sucessfull')
            process.exit();
        }
        else
            console.log('value not found we are adding to library')
        l.insert_pos(num);
        var a = l.num_getval();
        console.log(a)
        fs.writeFileSync('file.txt', a.trim())
        console.log('added sucessfully')
        process.exit();
    },
    hashing: function (read) {
        var arr = new Array(10), array = [], arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [], arr9 = [], arr10 = [], arr11 = [];
        var list = new LinkedList();
        var hash = fs.readFileSync('/Users/apple/javascript/data structure codes/ds_main/hash.txt'); //reading the hash.txt file into this programe
        hash = hash.toString().split(",");  //convert string into an array
        var arr = Array.from(hash); //convert string into an array
        arr.sort(); //sort the given array
        console.log(arr);
        var val = read.question("Please enter a value to search: ");
        for (var i = 0; i < hash.length; i++) {
            list.add(hash[i]); //add the elements of the array into a linked list
        }
        list.printList();
        var result = list.indexOf(val); //to find the index of the given element
        if (result == -1) {
            console.log("Element not found!!");
            list.add(val); //add element to the array
        }
        else {
            console.log("Element found!!");
            list.removeElement(val); //remove element from the array
        }
        for (var k = 0; k < 11; k++) {
            array.push(list[k]);
        }
        //console.log(array);
        val = list.printList();
        console.log(val);
        for (var j = 0; j < hash.length; j++) {
            var res = parseInt(hash[j]) % parseInt(hash.length); //to determine the reminder
            switch (parseInt(res)) {
                case 0:
                    arr1.push(hash[j]);
                    break;

                case 1:
                    arr2.push(hash[j]);
                    break;

                case 2:
                    arr3.push(hash[j]);
                    break;

                case 3:
                    arr4.push(hash[j]);
                    break;

                case 4:
                    arr5.push(hash[j]);
                    break;

                case 5:
                    arr6.push(hash[j]);
                    break;

                case 6:
                    arr7.push(hash[j]);
                    break;

                case 7:
                    arr8.push(hash[j]);
                    break;

                case 8:
                    arr9.push(hash[j]);
                    break;

                case 9:
                    arr10.push(hash[j]);
                    break;

                case 10:
                    arr11.push(hash[j]);
                    break;

            }
        }
        var array = []; //pushing into 2D array
        array.push(arr1);
        array.push(arr2);
        array.push(arr3);
        array.push(arr4);
        array.push(arr5);
        array.push(arr6);
        array.push(arr7);
        array.push(arr8);
        array.push(arr9);
        array.push(arr10);
        array.push(arr11);

        for (var k = 0; k < array.length; k++) {
            console.log("Slot " + k + " --> " + array[k].join('-->'));
        }
        //writing the final result into the file
        fs.writeFile('/Users/apple/javascript/data structure codes/ds_main/hash_op.txt', array.join('-->'), function () { console.log('done') })
    }

}