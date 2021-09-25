var expenses=[1000,2000,3000,4000,5000];
console.log(expenses);
console.log(expenses[0]);
console.log(expenses.length);
//of
for(let amount of expenses){
    console.log(amount);
}
//find total amount in array
var total=0;
for(let amount of expenses){
    total=total+amount;
}
console.log(total);
