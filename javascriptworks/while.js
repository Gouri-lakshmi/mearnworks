//multiplication table
var i=1;
mul=1;
while(i<=10){
    mul=i*2;
    console.log(`${i}*2=${mul}`); 
i++;
}

//sum of 10 numbers
var num=10;
var i=1;
var s=0;
while(i<=num){
    s=s+i;
    i++

}
console.log(s);
//factorial
var num=10;
var i=1;
var f=1;
while(i<=num){
    f=f*i;
    i++;
}
console.log(f);
//reverse
var num=123;
var res="";
while(num!=0){
   var digit =num%10;
   res+=digit
   num=Math.floor(num/10) 
}
console.log(res);