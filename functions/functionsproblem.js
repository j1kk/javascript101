// is Even
// function isEven(num){
//     if(num % 2 === 0){
//         return true;
//     }
//     else {
//         return false
//     }
// }
// version 2
function isEven(num){
    return num % 2 === 0;
}

// factorial(4) 4 x 3 x 2 x 1
function factorial(num){
    // define result variable
    var result = 1;
    // calculate factorial and store value in result
    for(var i = 2; i <= num; i++){
        result *= i;
    }
    // return result variable
    return result;
}

function kebabToSnake(str) {
    // replace all '-'s with '_'s
    var newStr = str.replace(/-/g , "_");
    // return str
    return newStr;
}