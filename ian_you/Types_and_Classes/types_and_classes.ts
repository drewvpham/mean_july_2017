let myNum :number = 5;
let myString : string = "Hello Universe";
let myArr : number[] = [1,2,3,4];
let myObj = { name:'Bill'};
var anythingVariable :any = "Hey";
var anythingVariable :any = 25; 
let arrayOne :boolean[] = [true, false, true, true]; 
let arrayTwo : any[] = [1, 'abc', true, 2];
const myObj1 = { x: 5, y: 10 };
// object constructor
const MyNode = (function () {
    function MyNode(val: number) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        
        this.val = 10;
    };
    return MyNode;
}());
let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}