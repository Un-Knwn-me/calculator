let titl = document.createElement("h1");
titl.setAttribute("id", "title");
titl.innerText = "Calculator:"
document.body.append(titl);

let desc = document.createElement("div");
document.body.append(desc);
let desc1 = document.createElement("p");
desc1.setAttribute("id", "description");
desc1.innerText=" It is a simple calculator that calculates the basic arithmetic operations of a number.";
desc.appendChild(desc1)

let calc = document.createElement("div");
calc.setAttribute("id", "calc");
document.body.append(calc);

let rd = document.createElement("div");	
calc.appendChild(rd);
let dis = document.createElement("input");
dis.setAttribute("placeholder", "0");
dis.setAttribute("id", "result")
dis.setAttribute("type", "text");
rd.appendChild(dis);

let r4 = document.createElement("div");
r4.setAttribute("class", "row4 btn");
calc.appendChild(r4);

let clear = document.createElement("button");
clear.setAttribute("id", "clear");
clear.setAttribute("class", "extra");
clear.setAttribute("onclick", "equal.value = '' ");
clear.innerText="Clear";
r4.appendChild(clear);

let del = document.createElement("button");
del.setAttribute("id", "del");
del.setAttribute("class", "extra");
del.setAttribute("onclick", "equal.value = equal.value.toString().slice(0,-1)");
del.innerText="Delete";
r4.appendChild(del);

let percent = document.createElement("button");
percent.setAttribute("id", "percent");
percent.setAttribute("class", "extra");
percent.setAttribute("onclick", "equal.value = eval(equal.value/100)");
percent.innerText=" % ";
r4.appendChild(percent);

let divide = document.createElement("button");
divide.setAttribute("id", "divide");
divide.setAttribute("class", "operators");
divide.setAttribute("onclick", "equal.value += '/' ");
divide.innerText="/";
r4.appendChild(divide);

let r3 = document.createElement("div");
r3.setAttribute("class", "row3 btn");
calc.appendChild(r3);

let seven = document.createElement("button");
seven.setAttribute("id","7");
seven.setAttribute("onclick", "sevenf()");
function sevenf() {
    equal.value += 7;
}
seven.innerText= "7";
r3.appendChild(seven);

let eight = document.createElement("button");
eight.setAttribute("id", "8");
eight.setAttribute("onclick", "eightf()");
function eightf() {
    equal.value += 8;
}
eight.innerText="8";
r3.appendChild(eight);

let nine = document.createElement("button");
nine.setAttribute("id", "9");
nine.setAttribute("onclick", "ninef()");
function ninef(){
    equal.value += 9;
}
nine.innerText= "9";
r3.appendChild(nine);

let mult = document.createElement("button");
mult.setAttribute("id", "multiply");
mult.setAttribute("onclick", "equal.value += '*' ");
mult.setAttribute("class", "operators");
mult.innerText=" * ";
r3.appendChild(mult);

let r2 = document.createElement("div");
r2.setAttribute("class", "row2 btn");
calc.appendChild(r2);

let four = document.createElement("button");
four.setAttribute("id", "four");
four.setAttribute("onclick", "fourf()");
function fourf() {
    equal.value += 4;
}
four.innerText= "4";
r2.appendChild(four);

let five = document.createElement("button");
five.setAttribute("id", "5");
five.setAttribute("onclick", "fivef()");
function fivef() {
    equal.value += 5;
}
five.innerText= "5";
r2.appendChild(five);

let six = document.createElement("button");
six.setAttribute("id", "6");
six.setAttribute("onclick", "sixf()");
function sixf(){
    equal.value += 6;
}
six.innerText="6";
r2.appendChild(six);

let sub = document.createElement("button");
sub.setAttribute("id", "subtract");
sub.setAttribute("class", "operators");
sub.setAttribute("onclick", "equal.value += '-' ");
sub.innerText=" - ";
r2.appendChild(sub);


let r1 = document.createElement("div");
r1.setAttribute("class", "row1 btn");
calc.appendChild(r1);

let one = document.createElement("button");
one.setAttribute("id", "1");
one.setAttribute("value", "1");
one.setAttribute("class", "number");
one.setAttribute("onclick", "onef()");
function onef() {
    equal.value += 1;
}
one.innerText= " 1 ";
r1.appendChild(one);

let two = document.createElement("button");
two.setAttribute("id", "2");
two.setAttribute("value", "2");
two.setAttribute("class", "number");
two.setAttribute("onclick", "twof()");
function twof() {
    equal.value += 2;
}
two.innerText= " 2 ";
r1.appendChild(two);

let three = document.createElement("button");
three.setAttribute("id", "3");
three.setAttribute("value", "3");
three.setAttribute("class", "number");
three.setAttribute("onclick", "threef()");
function threef() {
    equal.value += 3;
}
three.innerText= " 3 ";
r1.appendChild(three);

let add = document.createElement("button");
add.setAttribute("id", "add");
add.setAttribute("class", "operators");
add.setAttribute("onclick", "equal.value += '+' ");
add.innerText=" + ";
r1.appendChild(add);

let r0 = document.createElement("div");
r0.setAttribute("class", "row0 btn");
calc.appendChild(r0);

let zeroo = document.createElement("button");
zeroo.setAttribute("id", "00"); 
zeroo.setAttribute("onclick", "zeroof()");
function zeroof() {
    equal.value += 0;
    equal.value += 0;
}
zeroo.innerText=" 00 ";
r0.appendChild(zeroo);

let zero = document.createElement("button");
zero.setAttribute("id", "0"); 
zero.setAttribute("onclick", "zerof()");
function zerof() {
    equal.value += 0;
}
zero.innerText= " 0 ";
r0.appendChild(zero);

let dot = document.createElement("button");
dot.setAttribute("id", "dot");
dot.setAttribute("onclick", "dotf()");
function dotf(){
    equal.value += "."
}
dot.innerText=" . ";
r0.appendChild(dot); 

let ans = document.createElement("button");
ans.setAttribute("id", "equal");
ans.setAttribute("class", "operators");
ans.setAttribute("onclick", "result()");
function result(){
    equal.value = eval(equal.value);
}
ans.innerText=" = ";
r0.appendChild(ans);



//function

let equal = document.getElementById("result");

