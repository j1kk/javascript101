console.log("print all numbers between -10 to 19");
for(var i = -10; i <= 19; i++) {
    console.log(i);
}

console.log("print all Even numbers between 10 and 40");
// for(var j = 10; j <= 40; j+=2) {
//     console.log(j);
// }
// version2 fool proof
for(var j = 10; j <= 40; j += 1) {
    if(j % 2 === 0) {
        console.log(j);
    }
}

console.log("print all Even numbers between 300 and 333");
for(var y = 301; y <= 333; y+=2) {
    if(y % 2 !== 0) {
      console.log(y)  
    }
}
 
console.log("print all numbers divisible by 5 and 3 between 5 and 50");
for(var z = 5; z <=50; z+=1){
    if (z % 5 === 0 && z % 3 ===0)
    console.log(z);
}