var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[];=[1,2,3,4];
var myObj: any= { name:'Bill'};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
var arrayOne:any = [true, false, true, true];
var arrayTwo: any = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
// object constructor
MyNode = (function () {
    function MyNode(val: number) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
myNodeInstnace = new MyNode(1);
console.log(myNodeInstnace.val);


function myFunction(): void{
    console.log("Hello World");
    return;
}
function sendingErrors(): never {
	throw new Error('Error message');
}
