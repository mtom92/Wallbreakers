/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.set=[]
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(!this.set.includes(key)){
        this.set.push(key)
    }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {

        for(var num in this.set){
            if(this.set[num]==key){
               this.set.splice(num,1)
               }
        }

};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    for(var num in this.set){
        if(this.set[num]==key){
           return true
           }
    }
    return false
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
