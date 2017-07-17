let myNum: number = 5;
var myString: string = "Hello universe";
const myArr: number[1, 2, 3, 4];
const myObj = {name: "Bill"};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
let arrayOne: boolean[true, false, true, true];
var arrayTwo: any[1, 'abc', true, 2];
const myObj = { x: 5, y: 10 };

class MyNode {
	val: number;

	constructor(valueP: number){
		this.val = valueP;
	}
	doSomething(){
		this._priv = 10;
	}
}
let MyNode = new MyNode(1);
console.log(MyNode(val));

function myFunction(): void {
    console.log("Hello World");
    return;
}

function sendingErrors(): never{
	throw new Error('Error message');
}
