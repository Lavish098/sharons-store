
const FakeProducts = fetch('https://fakestoreapi.com/products')
    .then(res =>res.json())
    .then(json =>{ 
        return json
       })

   const productsFake = FakeProducts

   console.log(productsFake);
    export default productsFake