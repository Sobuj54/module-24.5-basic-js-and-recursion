// traversing an array

const array = [22, 14, 54, 14, 78, 45];

// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// this similar work can be done using for of loop
// for(const number of array){
//     console.log(number);
// }

// --------------------------
const products = [
    {name : "samsung phone", price: 22000, color: 'white'},
    {name : "apple Phone", price: 22000, color: 'white'},
    {name : "xiaomi phone", price: 22000, color: 'white'},
    {name : "lenovo laptop", price: 22000, color: 'white'},
    {name : "lg phone", price: 22000, color: 'white'},
    {name : "linux os", price: 22000, color: 'white'},
];
// using for in loop to acces elements in the array
// for(const product of products){
//     console.log(product);
// }

// searching something in array
function mathchedProducts (products , search){
    let matched = [];
    for(const product of products){
        // here we lower case both seach element and product names to get all the searched elments.
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const matched = mathchedProducts(products , 'Phone');
console.log(matched);