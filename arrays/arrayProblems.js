console.log("CONNECTED!");

// 1st problem : printReverse()
function printReverse(arr){
    for(var i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}
printReverse([3,6,2,5]);

// 2nd problem : isUniform()
function isUniform(arr){
    var first = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] !== first){
            return false;
        }
    }
    return true;
}

// 3rd problem: sumArray()
function sumArray(arr){
    var total = 0;
    arr.forEach(function (element){
        total += element;
    });
    return total;
}

// 4th problem : max()
function max(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}