var expenses=[12000,13000,14000,15000,11000,25000,17000]
let count=0;
for(let amount of expenses){
    if(amount>15000){
        count++;
    }
}
console.log("exp>15000 count",count);