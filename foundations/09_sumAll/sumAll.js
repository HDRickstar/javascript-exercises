const sumAll = function(num1, num2) {

    if(!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0){
        return "ERROR";
    }

    let minVal = 0;
    let maxVal = 0;
    let total = 0;
    if(num1 > num2){
        minVal = num2;
        maxVal = num1
    }else{
        minVal = num1;
        maxVal = num2;
    }
    for(let i = minVal; i <= maxVal; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
