// this class will be provided by leet code already, so remove before submitting
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        if (val === void 0) { val = 0; }
        if (next === void 0) { next = null; }
        this.val = val;
        this.next = next;
    }
    return ListNode;
}());
//function to convert the array to a linked list because the function provided by leetcode only accepts linked list so need to convert array befor passing it to the function
function buildLinkedList(values) {
    //values:number[] => get an array || ListNode|null => return a ListNode or null
    if (values.length === 0) {
        //if array is empty, return null
        return null;
    }
    var head = new ListNode(values[0]); // if array not empty, assign first value of array as head
    var current = head; // current = (val:1, next:null)
    for (var i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]); //current = (val:1,(val:2,next:null)) because current.next = (val:2,null)
        current = current.next; // current = (val:2,next:null)
    }
    return head; //(val:1,(val:2,(val:4,null))) last element's .next would be null because end of linked list
}
function mergeTwoLists(list1, // leetcode given function, only takes list node so make sure to convert the array first
list2) {
    var dummy = new ListNode(-1); //dummy is the first node, we wont return this, we'll return dummy.next so that we dont get -1. Any value can be assigned to dummy, technically.
    var current = dummy; // current = (val: -1,next:null)
    while (list1 !== null && list2 !== null) {
        // while list1 and list2 are not empty. let's say if a list is null, but the other is not null, then we will skip this and go to current.next = list1 || list2 to just add whichever list has remaining values, as they will be sorted already during input
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        }
        else {
            current.next = list2; //1 in list1 is not smaller or greater than 1 in list2, so, this line runs.
            //current = (val: -1, null)
            //current.next = (val:1,(val:3,(val:5,null)))
            //current = (val:-1,(val:1,(val:3,(val:5,null))))
            //list2 = (val:1,(val:3,(val:5,null)))
            list2 = list2.next;
            //list2 = (val:3,(val:5,null))
        }
        current = current.next;
        //current = (val:1,(val:3,(val:5,null)))
    }
    current.next = list1 || list2; // anything remaining in any lists , add it to the linked list
    return dummy.next; //return dummy.next because we dont need (val: -1,())
}
var arr1 = [1, 2, 4];
var arr2 = [1, 3, 5];
var l1 = buildLinkedList(arr1);
var l2 = buildLinkedList(arr2);
var answer = mergeTwoLists(l1, l2);
console.log(answer);
