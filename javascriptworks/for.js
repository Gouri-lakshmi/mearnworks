for(i=5;i>=1;i--){
    console.log(i);
}
//prime or not
var num=3;
var flag=0;
for(let i=2;i<num;i++){
    if(num%i==0){
        flag+=1;
        break
    }
}
console.log(flag==0?"prime":"not prime");
//question
var num=3,low=8,up=28;
for(let i=1;i<=up;i++){
let res=i**num;
if(res>up){
    break;
}
if((res>=low)&(res<=up)){
    console.log(i);
}
}
//nextn111 222 333
for(let row=1;row<=3;row++){
    let str=""
    for(let col=1;col<=3;col++){
    str+=row;
    }
    console.log(str);
}




