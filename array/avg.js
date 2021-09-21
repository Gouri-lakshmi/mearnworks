var expenses=[12000,13000,14000,15000,11000,25000,17000]
var total_exp=0;
for(let amount of expenses){
 total_exp+=amount
}
console.log((total_exp/expenses.length));