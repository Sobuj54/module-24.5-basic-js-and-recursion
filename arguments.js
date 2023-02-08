// we can find array like objects inside fuction

function add (num1 , num2){
    console.log(num1,num2);

    // this will show all arguments that was given
    console.log(arguments);
    // we can aslo acces specific arguments using indexing like array
}

add (14, 25, 14, 26, 21);