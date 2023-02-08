// summation of 1 to 5 using recursion

function sumRecursion(i){
    if(i == 1){
        return 1;
    }
    return i + sumRecursion(i - 1);
}

const sum = sumRecursion(5);
console.log(sum);