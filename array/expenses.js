var expenses=[10000,12000,20000,22000,12000,13000];
for(let amount of expenses){
    if(amount<15000){
        console.log(amount);
    }
    else{
        console.log("");
    }
}
//add expenses
//add 3000rs
expenses[1]+3000;
console.log(expenses);
//add a new elemet in array at the end"push
expenses.push(22000)
console.log(expenses);
//update
expenses[0]+2000;
console.log(expenses);
//remove n item from end "pop"
expenses.pop()
console.log(expenses);