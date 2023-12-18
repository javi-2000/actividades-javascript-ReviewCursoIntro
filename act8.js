function multiplicarByTwo (parameter){
    function inner(){
        let num = 2;
        return parameter * num;
    }
    return inner
}

console.log(multiplicarByTwo(4)());