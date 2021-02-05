
console.log(1111);
console.log(2222);
setTimeout(function(){
    console.log(2525);
}, 1000); //it will execute atleast 1000 millisecond later.
console.log(3333);
console.log(4444);

setInterval(function() {
    console.log("setinterval")
}, 1000); //it will execute after each 1000 millisecond