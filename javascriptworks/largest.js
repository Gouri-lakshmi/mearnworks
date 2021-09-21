function largest(n1,n2,n3){
    if(n1<n2 && n1<n3){
        if(n2>n3){
            return n2;
        }
        else{
            return n3;
        }
    }
    else if(n2<n1 && n2<n3){
        if(n1>n3){
            return n1;
        }
        else{
            return n3;
        }
    }
    else if(n3<n1 && n3<n2){
        if(n1>n2){
            return n1;
        }
        else{
            return n2;
        }
    }
}
console.log(largest(10,8,5));