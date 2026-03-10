const reverseString = function(string) {
    length = string.length;
    newStr = "";
    for(let i = length-1; i >= 0; i--){
        newStr+= string.substring(i,i+1);
    }

    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
