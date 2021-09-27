var arr=[2,3,4,5,6,7]
//print squares of even number

var squ=arr.filter(num=>num%2==0).map(num=>num**2)
console.log(squ);