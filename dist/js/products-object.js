
//  for(let i=0; i<productsObj.length; i++){
    // console.log("Category: "+ productsObj[i].category);
   
    // for(let b=0; b<productsObj[i].products.length; b++){
        // console.log(productsObj[i].products[b].model);
    // }
    // console.log("----------");
// }
// console.log('Category: ' + productsObj[0].products.length);


productsObj = [
{
    category: 'Экскаваторы',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    products:[
        {
            productId: 1,
            model: 'Экскаватор-погрузчик Komatsu WB93R-52',
            productQuantity: 12,
            imgURL: 'img/product/1.jpg',
            price: 30,
            currency: '$', 
        },
        {
            productId: 2,
            model: 'Hitachi ZX240',
            productQuantity: 10,
            imgURL: 'img/product/2.jpg',
            price: 30,
            currency: '$', 
        },
            {
            productId: 3,
            model: 'Volvo ЕС-210',
            productQuantity: 6,
            imgURL: 'img/product/3.jpg',
            price: 30,
            currency: '$', 
        },
        {
            productId: 4,
            model: 'Volvo ЕС-180',
            productQuantity: 4,
            imgURL: 'img/product/1.jpg',
            price: 30,
            currency: '$', 
        }
    ]
},

{
    category: 'Экскаваторы погрузчики',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    products:[
        {
            productId: 3,
            model: 'Volvo BL 71',
            productQuantity: 6,
            imgURL: 'img/product/3.jpg',
            price: 30,
            currency: '$', 
        },
        {
            productId: 4,
            model: 'Volvo ЕС-180',
            productQuantity: 4,
            imgURL: 'img/product/2.jpg',
            price: 50,
            currency: '$', 
        }
    ]
},

    {
    category: 'Ивеки',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    products: [
        {
            productId: 3,
            model: '3-х и 4-х ясные',
            productQuantity: 10,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
    ]
},
]

// getNumProducts(productsObj[2].products)
getNumProducts = data => {
    return data.length
}

// getNumProductsTotal(productsObj)
getTotalNumProducts = data => {
    var num = 0;
    for(let i=0; i<data.length; i++){
        num += data[i].products.length;
    }
    return num;
}
console.log(getNumProducts(productsObj[1].products))
console.log(getTotalNumProducts(productsObj))

