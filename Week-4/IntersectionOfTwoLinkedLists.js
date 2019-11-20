var getIntersectionNode = function(headA, headB) {
  //changes made in a day
    var curA = headA,
        curB = headB,
        counter = 0
    while(curA&&curB){
        console.log(curA,"A")
        console.log(curB,"B")
        console.log(counter)
        if(curA === curB) return curA
        else{
            if(!curA.next){curA = headB;counter++}
            else curA = curA.next
            if(!curB.next){curB = headA;counter++}
            else curB = curB.next
            if(counter===4)break
        }
        console.log("*******")
    }
    return null
};
