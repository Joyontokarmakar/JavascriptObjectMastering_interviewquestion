var name = 'kuddus';
function add (num1, num2){
    var result = num1 + num2;
    console.log('name inside', name);

    function double (num){
        return num*2;
    }
    var total = double(result)
    return total

    return result;
}
console.log('name outside', name);

var sum = add(5, 10);
console.log(sum);
// console.log('outside result',result); //it will work if line3 is "result = num1+num2" or "window.result = num1 + num2"; 