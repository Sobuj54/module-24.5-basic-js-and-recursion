// finding factorial with recursion

function factorialRecursion (i){
    if(i == 1){
        return 1;
    }
    return i * factorialRecursion(i - 1);
}

const factorial = factorialRecursion(5);
console.log(' 5! = ',factorial);