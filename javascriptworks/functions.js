//function for adding tow nobs
function mul(num1,num2){
    let res=num1*num2;
    return res;
}
console.log(mul(10,2));

//function for adding two numbers
function add(num1,num2){
    let res=num1+num2;
    return res;
}
console.log(add(10,2));

//factorial of a number
function factorial(num){
    let fact=1;
for(let i=1;i<=num;i++){
    fact=fact*i;
}
    return fact;
}
console.log(factorial(5));

//odd or even
function odd(num) {
    return num%2==0?"true":"false";
}
console.log(odd(5));

//create a function return largest number two numbers
function largest(num1,num2){
    return num1>num2?num1:num2
}
console.log(largest(5,3));

