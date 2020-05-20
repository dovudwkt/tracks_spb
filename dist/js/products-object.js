
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
    categoryId: 0,    
    category: 'Экскаваторы',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    products:[
        {
            productId: 0,
            fullName: 'Экскаватор-погрузчик Komatsu WB93R-52',
            model: 'Komatsu WB93R-52',
            productQuantity: 12,
            imgURL: 'img/product/1.jpg',
            price: 30,
            currency: '$', 
            productDetails: {
                'Общий вес, кг': '7460',
                'Габаритные размеры, мм':'5895 x 2320 x 3780',
                'Максимальная высота точки подвеса ковша, мм': '3375', 
                'Максимальная высота с поднятым ковшом, мм': '4290 / 6405',
                'Глубина копания, мм': '130 / 6055',
                'Высота выгрузки, мм': '2720 / 4170',
            },
        },
        {
            productId: 1,
            model: 'Hitachi ZX240',
            productQuantity: 10,
            imgURL: 'img/product/2.jpg',
            price: 30,
            currency: '$', 
            productDetails: {
                'Общий вес, кг': '456',
                'Габаритные размеры, мм':'1000 x 2000 x 3780',
                'Максимальная высота точки подвеса ковша, мм': '5000', 
                'Максимальная высота с поднятым ковшом, мм': '4290 / 6405',
                'Глубина копания, мм': '200 / 6058',
                'Высота выгрузки, мм': '274 / 480',
            },
        },
        {
            productId: 2,
            model: 'Volvo ЕС-210',
            productQuantity: 6,
            imgURL: 'img/product/3.jpg',
            price: 30,
            currency: '$', 
        },
        {
            productId: 3,
            model: 'Volvo ЕС-180',
            productQuantity: 4,
            imgURL: 'img/product/1.jpg',
            price: 30,
            currency: '$', 
        }
    ]
},

{
    categoryId: 1,   
    category: 'Экскаваторы погрузчики',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    products:[
        {
            productId: 0,
            model: 'Volvo BL 71',
            productQuantity: 6,
            imgURL: 'img/product/3.jpg',
            price: 30,
            currency: '$', 
            productDetails: {
                'Общий вес, кг': '456',
                'Габаритные размеры, мм':'1000 x 2000 x 3780',
                'Максимальная высота точки подвеса ковша, мм': '5000', 
                'Максимальная высота с поднятым ковшом, мм': '4290 / 6405',
                'Глубина копания, мм': '200 / 6058',
                'Высота выгрузки, мм': '274 / 480',
            },
        },
        {
            productId: 1,
            model: 'Volvo ЕС-180',
            productQuantity: 4,
            imgURL: 'img/product/2.jpg',
            price: 50,
            currency: '$', 
        }
    ]
},

{    
    categoryId: 2,
    category: 'Ивеки',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    products: [
        {
            productId: 0,
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
// console.log(getNumProducts(productsObj[1].products))
// console.log(getTotalNumProducts(productsObj))

