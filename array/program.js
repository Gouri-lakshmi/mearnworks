//input var arr=[2,3,4,6,,7,8],out var arr[1,2,3,7,8,9]
var arr=[2,3,4,6,7,8];
var op=[]
for(let num of arr){
    if(num<5){
op.push((num-1))
    }
    
    else{
        op.push((num+1))
    }
}
console.log(op);
//next
var arr=[2,3,4,6,7,8];
var op=[];
for(let num of arr){
    if(num<5){
op.push((num-1))
    }
    else if(num>5){
op.push((num+1))
    }
    
    else{
        op.push((num))
    }
}
console.log(op);

