
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
    category: 'Автогрейдеры',
    categoryURL: 'category-0.html',
    categoryImgURL: 'img/categories/cat-1.jpg',
    products:[]
},

{
    categoryId: 1,   
    category: 'Автовышки',
    categoryURL: 'category-1.html',
    categoryImgURL: 'img/categories/cat-2.jpg',
    details: ['', '', ''],
    products:[]
},

{    
    categoryId: 2,
    category: 'Автокраны',
    categoryURL: 'category-2.html',
    categoryImgURL: 'img/categories/cat-2.jpg',
    details: ['', '', ''],
    products: []
    
},
{    
    categoryId: 3,
    category: 'Асфальто-уклaдчики',
    categoryURL: 'category-3.html',
    categoryImgURL: 'img/categories/cat-1.jpg',
    details: ['', '', ''],
    products: [
        {
            productId: 0,
            model: 'Volvo P 7820 C ABG',
            fullName: 'Асфальто-укладчик Volvo P 7820 C ABG',
            productURL: 'product-0-3.html',
            productQuantity: 10,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
        {
            productId: 1,
            model: 'Volvo ABG 6870',
            fullName: 'Асфальто-укладчик Volvo ABG 6870',
            productURL: 'product-1-3.html',
            productQuantity: 10,
            imgURL: 'img/product/2.jpg',
            price: 10,
            currency: '$',
        },
    ]  
},
{    
    categoryId: 4,
    category: 'Бульдозеры',
    categoryURL: 'category-4.html',
    categoryImgURL: 'img/categories/cat-2.jpg',
    details: ['', '', ''],
    products: [
        {
            productId: 0,
            model: 'CATERPILLAR D5R',
            fullName: 'Бульдозер CATERPILLAR D5R',
            productURL: 'product-0-4.html',
            productQuantity: 10,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
        {
            productId: 1,
            model: 'John Deere 7',
            fullName: 'Бульдозер John Deere 7',
            productURL: 'product-1-4.html',
            productQuantity: 10,
            imgURL: 'img/product/2.jpg',
            price: 10,
            currency: '$',
        },
    ]
    
},
{    
    categoryId: 5,
    category: 'Дорожная фреза',
    categoryURL: 'category-5.html',
    categoryImgURL: 'img/categories/cat-1.jpg',
    details: ['', '', ''],
    products: [
        {
            productId: 0,
            model: 'WIRTGEN W 1000',
            fullName: 'Дорожная фреза WIRTGEN W 1000',
            productURL: 'product-0-5.html',
            productQuantity: 10,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },

    ]
},
{
    categoryId: 6,
    category: 'Катки',
    categoryURL: 'category-6.html',
    categoryImgURL: 'img/categories/cat-2.jpg',
    details: ['', '', ''],
    products: [
        {
            productId: 0,
            model: 'BW 202 AD-4',
            fullName: 'Асфальтовый каток BW 202 AD-4',
            productURL: 'product-0-6.html',
            productQuantity: 10,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
        {
            productId: 1,
            model: 'Shantui-sd 16',
            fullName: 'Асфальтовый каток Shantui-sd 16',
            productURL: 'product-1-6.html',
            productQuantity: 10,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
        {
            productId: 2,
            model: 'CAT CS56B',
            fullName: 'Асфальтовый каток CAT CS56B',
            productURL: 'product-2-6.html',
            productQuantity: 10,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
        {
            productId: 3,
            model: 'Volvo SD 160 DX',
            fullName: 'Асфальтовый каток Volvo SD 160 DX',
            productURL: 'product-3-6.html',
            productQuantity: 10,
            imgURL: 'img/product/2.jpg',
            price: 10,
            currency: '$',
        },
        {
            productId: 4,
            model: 'CATERPILLAR CS56',
            fullName: 'Асфальтовый каток CATERPILLAR CS56',
            productURL: 'product-4-6.html',
            productQuantity: 10,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
       
    ]
    
},
{    
    categoryId: 7,
    category: 'Манипуляторы',
    categoryURL: 'category-7.html',
    categoryImgURL: 'img/categories/cat-1.jpg',
    details: ['', '', ''],
    products: []
    
},
{    
    categoryId: 8,
    category: 'Погрузчики',
    categoryURL: 'category-8.html',
    categoryImgURL: 'img/categories/cat-2.jpg',
    details: ['', '', ''],
    products: [
        {
            productId: 0,
            model: 'JCB 4CX',
            fullName: 'Погрузчик JCB 4CX',
            productURL: 'product-0-8.html',
            productQuantity: 10,
            imgURL: 'img/product/2.jpg',
            price: 10,
            currency: '$',
            productDetails:
            {
                width: '18.00',
                height: '222.35',
            }
        },
        {
            productId: 1,
            model: 'JCB 540',
            fullName: 'Телескопический погрузчик JCB 540',
            productURL: 'product-1-8.html',
            productQuantity: 10,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
        {
            productId: 2,
            model: 'Manitou 2150',
            fullName: 'Телескопический погрузчик JManitou 2150',
            productURL: 'product-2-8.html',
            productQuantity: 10,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
        {
            productId: 3,
            model: 'Volvo BL 71',
            fullName: 'Экскаватор-погрузчик Volvo BL 71',
            productURL: 'product-3-8.html',
            productQuantity: 10,
            imgURL: 'img/product/2.jpg',
            price: 10,
            currency: '$',
        },
        {
            productId: 4,
            model: 'Volvo L 60F',
            fullName: 'Фронтальный погрузчик Volvo L 60F',
            productURL: 'product-4-8.html',
            productQuantity: 10,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
        {
            productId: 5,
            model: 'JCB 436ZX',
            fullName: 'Фронтальный погрузчик JCB 436ZX',
            productURL: 'product-5-8.html',
            productQuantity: 10,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
        {
            productId: 6,
            model: 'Bobcat S 220',
            fullName: 'Мини-погрузчик Bobcat S 220',
            productURL: 'product-6-8.html',
            productQuantity: 10,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
       
    ]
    
},
{    
    categoryId: 9,
    category: 'Самосвалы',
    categoryURL: 'category-9.html',
    categoryImgURL: 'img/categories/cat-1.jpg',
    details: ['', '', ''],
    products: [
        {
            productId: 0,
            model: 'Самосвал Ивеки 3-х и 4-х ясные',
            fullName: 'Самосвал Ивеки 3-х и 4-х ясные',
            productURL: 'product-0-9.html',
            productQuantity: 10,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
       
    ]
    
},
{    
    categoryId: 10,
    category: 'Тралы',
    categoryURL: 'category-10.html',
    categoryImgURL: 'img/categories/cat-2.jpg',
    details: ['', '', ''],
    products: [
        {
            productId: 0,
            model: 'Трал для перевозки негабаритных грузов',
            fullName: 'Трал для перевозки негабаритных грузов',
            productURL: 'product-0-10.html',
            productQuantity: 1,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
       
    ]
    
},
{    
    categoryId: 11,
    category: 'Шаланды',
    categoryURL: 'category-11.html',
    categoryImgURL: 'img/categories/cat-1.jpg',
    details: ['', '', ''],
    products: [
        // {
        //     productId: 0,
        //     model: '',
        //     fullName: '',
        //     productURL: 'product-0-11.html',
        //     productQuantity: 0,
        //     imgURL: 'img/product/1.jpg',
        //     price: 10,
        //     currency: '$',
        // },
       
    ] 
},
{    
    categoryId: 12,
    category: 'Экскаваторы',
    categoryURL: 'category-12.html',
    categoryImgURL: 'img/categories/cat-2.jpg',
    details: ['', '', ''],
    products: [
        {
            productId: 0,
            model: 'Hitachi ZX200',
            fullName: 'Экскаватор Hitachi ZX200',
            productURL: 'product-0-12.html',
            productQuantity: 0,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
            productDetails:
            {
                'Год':[' 2008', ' 2014', ' 2017', ' 2019'],
                'Обьём Ковша': '1,0 м<sup>3</sup>',
                'Количество': 12,
            }
        },
        {
            productId: 1,
            model: 'Hitachi ZX240',
            fullName: 'Экскаватор Hitachi ZX240',
            productURL: 'product-1-12.html',
            productQuantity: 2,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
        {
            productId: 2,
            model: 'Volvo ЕС-210',
            fullName: 'Экскаватор Volvo ЕС-210',
            productURL: 'product-2-12.html',
            productQuantity: 1,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
        {
            productId: 3,
            model: 'Volvo ЕС-180',
            fullName: 'Экскаватор Volvo ЕС-180',
            productURL: 'product-3-12.html',
            productQuantity: 10,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
        {
            productId: 4,
            model: 'Volvo ЕС-210',
            fullName: 'Колесный экскаватор Volvo ЕС-210',
            productURL: 'product-4-12.html',
            productQuantity: 0,
            imgURL: 'img/product/1.jpg',
            price: 10,
            currency: '$',
        },
        {
            productId: 5,
            model: 'Volvo ЕС-180',
            fullName: 'Колесный экскаватор Volvo ЕС-180',
            productURL: 'product-5-12.html',
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





/*
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


--CategoryName----categoryId--------PageName-----------

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


---ProductName--------------------productId----categoryId-----siteName

Асфальто-укладчик Volvo P 7820 C ABG----0          3         product-0-3.html
Асфальто-укладчик Volvo ABG 6870--------1          3         product-1-3.html

Бульдозер CATERPILLAR D5R---------------0          4         product-0-4.html
Бульдозер John Deere 750J---------------1          4         product-1-4.html

Дорожная фреза WIRTGEN W 1000-----------0          5         product-0-5.html

Асфальтовый каток BW 202 AD-4-----------0          6         product-0-6.html
Асфальтовый каток Shantui-sd 16---------1          6         product-1-6.html
Грунтовый каток CAT CS56B---------------2          6         product-2-6.html
Грунтовый каток Volvo SD 160 DX---------3          6         product-3-6.html
Грунтовый каток CATERPILLAR CS56--------4          6         product-4-6.html

погрузчик JCB 4CX-----------------------0          8         product-0-8.html
Телескопический погрузчик JCB 540-------1          8         product-1-8.html
Телескопический погрузчик Manitou 2150--2          8         product-2-8.html
Экскаватор-погрузчик Volvo BL 71--------3          8         product-3-8.html
Фронтальный погрузчик Volvo L 60F-------4          8         product-4-8.html
Фронтальный погрузчик JCB 436ZX---------5          8         product-5-8.html
Мини- погрузчик Bobcat S 220------------6          8         product-6-8.html

Самосвал Ивеки 3-х и 4-х ясные----------0          9         product-0-9.html

Трал для перевозки негабаритных грузов--2          10        product-0-10.html

Экскаватор Hitachi ZX200----------------0          12        product-0-12.html
Экскаватор Hitachi ZX240----------------1          12        product-1-12.html
Экскаватор Volvo ЕС-210-----------------2          12        product-2-12.html
Экскаватор Volvo ЕС-180-----------------3          12        product-3-12.html
Колесные экскаватор Volvo ЕС-210--------4          12        product-4-12.html
Колесные экскаватор Volvo ЕС-180--------5          12        product-5-12.html


*/