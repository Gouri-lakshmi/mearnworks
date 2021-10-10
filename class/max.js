function getMax(...args){
return args.reduce((num1,num2)=>num1>num2?num1:num2)
}
console.log(getMax(10,11,13,14));