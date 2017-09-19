const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node();
        node.data = data;
        if(this.length){
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        else{
            this._head = node;
            this._tail = node;
        }   
        this.length++;
        return this;
    }

    head() {
        if(this.length) 
            return this._head.data;
        else 
            return null;
    }

    tail() {
        if(this.length) 
            return this._tail.data;
        else 
            return null;
    }

    at(index) {
        var tmp = this._head;
        if(!this.length || index >= this.length || index < 0)
            return this;
        var i = 0;
        while(i < index){
            tmp = tmp.next;
            i++;
        }
        return tmp.data;
    }

    insertAt(index, data) {
        var tmp = this._head;
        if(!this.length || index >= this.length || index < 0)
            return this;
        var i = 0;
        while(i < index){
            tmp = tmp.next;
            i++;
        }

        var node = new Node();
        node.data = data;
        
        if(index == 0){
            this._head.prev = node; 
            node.next = this._head;
            this._head = node;
        }
        else{
            tmp.prev.next = node;
            node.prev = tmp.prev;
            tmp.prev = node;
            node.next = tmp;   
        }

        this.length++;
        return this;
    }

    isEmpty() {
        if(this.length) 
            return false;
        else
            return true;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var tmp = this._head;
        if(!this.length || index >= this.length || index < 0)
            return this;
        
        var i = 0;
        while(i < index){
            tmp = tmp.next;
            i++;
        } 
        if(index == 0 && this.length == 1){
            this._head = null; 
            this._tail = null;
        } 
        else if(index == 0 && this.length > 1){
            this._head = this._head.next; 
            this._head.prev = null;
        }
        else if(index == this.length - 1){
            this._tail = this._tail.prev;
            this._tail.next = null;
        }
        else{
            tmp.prev.next = tmp.next;
            tmp.next.prev = tmp.prev;
        }

        this.length--;
        return this;
    }

    reverse() {
        if(!this.length)
            return this;
        for(var f = 0,s = this.length-1; f < s ; f++,s--){
            this.swap(f,s);
        }
        return this;
    }

    indexOf(data) {
        var tmp = this._head;
        if(!this.length)
            return -1;
        var i = 0;
        while(i < this.length){
            if(tmp.data == data)
                return i;
            tmp = tmp.next;
            i++;
        }
        return -1;
    }

    swap(one_i,two_i){
        var tmp_1 = this._head,tmp_2 = this._head;
        if(!this.length || (one_i >= this.length || two_i >= this.length)  || (one_i < 0 || two_i < 0 ))
            return this;
        var i = 0;
        while(i < this.length){
            if(i < one_i)
                tmp_1 = tmp_1.next;
            if(i < two_i)
                tmp_2 = tmp_2.next;
            i++;
        }

        var tmp = tmp_1.data;
        tmp_1.data = tmp_2.data;
        tmp_2.data = tmp;
    }
}

module.exports = LinkedList;