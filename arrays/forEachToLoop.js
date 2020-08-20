var numbers = [1,2,3,4,5,6,7,8,9,10];
window.setTimeout(function() {
    for(var i = 0; i < numbers.length; i++) {
        if(numbers[i] % 3 === 0){
          alert(numbers[i]);
        }
    }
}, 500);
