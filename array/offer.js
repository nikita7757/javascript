/* FOR GIVER ARRAY WITH RICES OF 5 ITEMS ->[250,645,300,900,50] A
LL ITEMS HAVE AN OFFER OF 10% OFF ON THEM.CHANGE THE ARRAY TO STORE THE ARRAY FINAL PRICE AFTER
APPLYING OFFER*/

let price = [250,645,300,900,50];
 let final;
for(let i=0;i<price.length;i++){
    let offer= price[i]/10;
    price[i] = price[i] - offer;
    
}
console.log(price);