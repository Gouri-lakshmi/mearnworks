var n=4;
var str="";
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        str+=j;
    }
    str+="\n"
}
console.log(str);
//pattern 2
var n=6;
var str="";
for(let i=1;i<=n;i++){
    for(let j=2;j<=i;j++){
str+="*"
    }
    str+="\n"
}

console.log(str);
//pattern3
var n=3;
var str="";
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        str+=i;
    }
    str+="\n"
}
console.log(str);

//print prime numbers
var low=4,up=25;
var flag=0;
for(let i=4;i<=up;i++){
    for(let j=2;j<i;j++){
    if(i%j==0){
    flag++;
    break;
    }
}
if(flag==0){
    console.log(i);
}
}
//power prblm
var mul=1;
var num=2;
for(i=1;i<=10;i++){
    mul=i*num;
    console.log(mul);

}
