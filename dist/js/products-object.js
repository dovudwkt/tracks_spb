
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




/*CategoryName----categoryId--------PageName-----------
Автогрейдеры----------0           category-0.html
Автовышки-------------1           category-1.html
Автокраны-------------2           category-2.html
Асфальто-уклaдчики----3           category-3.html
Бульдозеры------------4           category-4.html
Дорожная фреза--------5           category-5.html
Катки-----------------6           category-6.html   
Манипуляторы----------7           category-7.html
Погрузчики------------8           category-8.html
Самосвалы-------------9           category-9.html
Тралы----------------10          category-10.html
Шаланды--------------11          category-11.html
Экскаваторы----------12          category-12.html


example:

<li><a href="pages/category-0.html">Автогрейдеры</a></li>
<li><a href="pages/category-1.html">Автовышки</a></li>
<li><a href="pages/category-2.html">Автокраны</a></li>
<li><a href="pages/category-3.html">Асфальто-уклaдчики</a></li>
<li><a href="pages/category-4.html">Бульдозеры</a></li>
<li><a href="pages/category-5.html">Дорожная фреза</a></li>
<li><a href="pages/category-6.html">Катки</a></li>
<li><a href="pages/category-7.html">Манипуляторы</a></li>
<li><a href="pages/category-8.html">Погрузчики</a></li>
<li><a href="pages/category-9.html">Самосвалы</a></li>
<li><a href="pages/category-10.html">Тралы</a></li>
<li><a href="pages/category-11.html">Шаланды</a></li>
<li><a href="pages/category-12.html">Экскаваторы</a></li>



---ProductName--------------------productId----categoryId-----siteName

Асфальто-укладчик Volvo P 7820 C ABG----0          3         product-3-0.html
Асфальто-укладчик Volvo ABG 6870--------1          3         product-3-1.html

Бульдозер CATERPILLAR D5R---------------0          4         product-4-1.html
Бульдозер John Deere 750J---------------1          4         product-4-1.html

Дорожная фреза WIRTGEN W 1000-----------0          5         product-5-0.html

Асфальтовый каток BW 202 AD-4-----------0          6         product-6-0.html
Асфальтовый каток Shantui-sd 16---------1          6         product-6-1.html
Грунтовый каток CAT CS56B---------------2          6         product-6-2.html
Грунтовый каток Volvo SD 160 DX---------3          6         product-6-3.html
Грунтовый каток CATERPILLAR CS56--------4          6         product-6-4.html

погрузчик JCB 4CX-----------------------0          8         product-8-0.html
Телескопический погрузчик JCB 540-------1          8         product-8-1.html
Телескопический погрузчик Manitou 2150--2          8         product-8-2.html
Экскаватор-погрузчик Volvo BL 71--------3          8         product-8-3.html
Фронтальный погрузчик Volvo L 60F-------4          8         product-8-4.html
Фронтальный погрузчик JCB 436ZX---------5          8         product-8-5.html
Мини- погрузчик Bobcat S 220------------6          8         product-8-6.html

Трал для перевозки негабаритных грузов--2          10        product-10-0.html

Экскаватор Hitachi ZX200----------------0          12        product-12-0.html
Экскаватор Hitachi ZX240----------------1          12        product-12-1.html
Экскаватор Volvo ЕС-210-----------------2          12        product-12-2.html
Экскаватор Volvo ЕС-180-----------------3          12        product-12-3.html
Колесные экскаватор Volvo ЕС-210--------4          12        product-12-4.html
Колесные экскаватор Volvo ЕС-180--------5          12        product-12-5.html











Самосвал Ивеки 3-х и 4-х ясные----------0          9         product-9-1.html








*/