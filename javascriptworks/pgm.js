//check given num is odd or even
var num=6;
if(num%2==0){
    console.log(`${num} ,is even`);
}
else{
    console.log(`${num} is odd`);
}
//num=15:if num is divisible by 3 print fiz ,if num is divisible by 5 buz ,if num is divisible by 15 fizbuz
var num=15;
if(num%15==0){
    console.log(`${num},fiz buz`);
}
else if(num%5==0){
    console.log(`${num},buz`);
}
else if(num%3==0){
    console.log(`${num},fizz`);
}
else{
    console.log(`negative`);
}

//swap two numbers
var a=4,b=5;
a=a+b;
b=a-b;
a=a-b;
console.log(`${a},${b}`);
//sort these three numbers in ascending order
var a=6,b=2,c=7;
if(a<b && a<c){
    if(b<c){
        console.log(`${a},${b},${c}`);
    }
    else{
        console.log(`${a},${c},${b}`);
    }
}
else if(b<c && b<a){
if(c<a){
    console.log(`${b},${c},${a}`);
}
else{
    console.log(`${b},${a},${c}`);
}
}
else if(c<a && c<b ){
    if(b<a){
console.log(`${c},${b},${a}`);
    }
    else{
        console.log(`${c},${a},${b}`);
    }
}
//second largest number from three numbers
var a=10,b=5,c=15;
if(a>=b && a>=c)
{
    if(b>=c){
        console.log(`${b},second large`);
    }
    else{
        console.log(`${c},second large`);
    }
}
else if(b>=a && b>=c ){
    if(a>=c){
        console.log(`${a},second large`);
    }
    else{
        console.log(`${c},second large`);
    }   
}
else if(c>=a && c>=b){
    if(b>=a){
        console.log(`${b},second large`);
    }
    else{
        console.log(`${a},second large`);
    }
}

        

