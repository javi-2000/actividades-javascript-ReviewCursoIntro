
function sumUntil(maxValue) {
    let sum = 0;
    for(let i=0; i<=maxValue; i++){
        sum+=i;
    }
    return sum;
};

console.log(sumUntil(5)); // OUTPUT: 15


//ARRAY
const array = [1,2,3,4,5];
const reduce = array.reduce((acc, num)=>acc+num)
console.log(reduce);