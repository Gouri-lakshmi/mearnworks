var products={
    p_code:100,
    name:"product1",
    price:250,
    aval_qty:50
}

//print product name
console.log(products.name);

//update stock as current stock+30
products.aval_qty+=30;

//chck discount key is present
console.log("discount" in products);

//add discount:10%
products.discount="10%";
console.log(products);
