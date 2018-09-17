class Node
{
    constructor(data, next=null)
    {
        this.data=data;
        this.next=next;
        this.prev=prev;
    }
}
class DoubleLinkedList
{
    constructor(){
        this.tail=null;
        this.head=null;
    }

    appendFront=function( item ) {
        let node = new Node( item );
        if(!this.head) {
          this.tail = node;
          this.head = node;
        } else {
          node.prev = this.tail;
          this.tail.next = node;
          this.tail = node
        }
      }

      appendRear=function( item ) {
        let node = new Node( item );
        if(!this.tail) {
          this.head = node;
          this.tail = node;
        } else {
          node.prev = this.tail;
          this.tail.next = node;
          this.tail = node
        }
      }

      appendAt( index, item ) {
        let current = this.head;
        let counter = 1;
        let node = new Node( item );
        if( index == 0 ) {
          this.head.prev = node
          node.next = this.head
          this.head = node
        } else {
          while(current) {
           current = current.next;
           if( counter == index ) {
             node.prev = current.prev
             current.prev.next = node
             node.next = current
             current.prev = node
           }
           counter++
         }
       }
     }

     remove( item ) {
        let current = this.head;
        while( current ) {
          if( current.data === item ) {
            if( current == this.head && current == this.tail ) {
              this.head = null;
              this.tail = null;
            } else if ( current == this.head ) {
              this.head = this.head.next
              this.head.prev = null
            } else if ( current == this.tail ) {
              this.tail = this.tail.prev;
              this.tail.next = null;
            } else {
              current.prev.next = current.next;
              current.next.prev = current.prev;
            }
         }
         current = current.next
        }
      }

      removeAt( index ) {
        let current = this.head;
        let counter = 1;
        if( index == 0 ) {
         this.head = this.head.next;
         this.head.prev = null;
        } else {
         while( current ) {
          current = current.next
          if ( current == this.tail ) {
           this.tail = this.tail.prev;
           this.tail.next = null;
          } else if( counter == index ) {
           current.prev.next = current.next;
           current.next.prev = current.prev;
           break;
          }
          counter++;
         }
        }
      }

      length=function() {
        let current = this.head;
        let counter = 0;
        while( current !== null ) {
         counter++
         current = current.next
        }
        return counter;
      }
      isEmpty=function() {
        return this.length() < 1
      }


      
}