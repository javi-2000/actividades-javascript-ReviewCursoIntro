const sum = function (a, b) {
    return a + b;
};

const newSum = (a,b) => a+b;
const firstSum = newSum(2,3);
console.log(firstSum);
  
const substract = function (a, b) {
    return a + b;
};

const newSubstract = (a,b) => a-b;
const firstSubstract = newSubstract(2,3);
console.log(firstSubstract);
  
const multiply = function (a, b) {
    return a * b;
}

const newMultiply = (a,b) => a*b;
const firstMultiply = newMultiply(2,3);
console.log(firstMultiply);


const divide = function (a, b) {
    return a / b;
}

const newDivide = (a,b) => a / b;
const firstDivision = newDivide(8,2)
console.log(firstDivision);

const log = function (value) {
    console.log(value);
}

const newLog = a => console.log(a);
newLog(7);

// realiza la siguiente operación con arrow function : ((2 + 4) * (5 + 2) - 2) / 5
const operation = (a,b,c)=> ((a+b)*(c+a)-a)/c;
const result = operation(2,4,5);
console.log(result);