// Run in on browser, prompt doesn't work in node environment

let p = parseFloat(prompt("Enter value of (p): "));
let r = parseFloat(prompt("Enter value of (r): "));
let t = parseFloat(prompt("Enter value of (t): "));



function simpleInterest(p,r,t){
    let SI = (p*r*t)/100;
    return SI;
}

console.log("The simple interest is: " + simpleInterest(p,r,t));



