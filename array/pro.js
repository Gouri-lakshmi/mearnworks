var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourane",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],
]

//print all available products
var avail_items=products.filter(item=>item[3]>0)
console.log(avail_items);

//print out of stock products name
var out_stock=products.filter(item=>item[3]==0).map(item=>item[1])
console.log(out_stock);

//add offer 5rs for all products whose stock>50
var offer_pro=products.filter(item=>item[3]>50).map(item=>[item[1],item[2]-5])
console.log(offer_pro);

//sort the products stock wise
products.sort((item1,item2)=>item2[3]-item1[3])
console.log(products);

//desending order of price
//desending order of stock

//sort employee wrt exp asc /des
//sort employee with respect salary
//sort developers with respect salary