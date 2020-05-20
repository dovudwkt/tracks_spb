// Display products of a particular category
function displayProductGrid(data, appendTo, relPath=''){
    var element;
    if(data.length !== 0){
        for(let i=0; i<data.length;i++){
            element = ` <div data-id="${i}" data-type="productItem" data-productName="${data[i].model}" class="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" style='background:url("${relPath}${data[i].imgURL}")'>
                                    <div class="product__item__pic__hover">
                                    <span>More</span>
                                    
                                    </div>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="./pages/product-details/shop-details.html"  >${data[i].fullName}</a></h6>
                                    <h5><span style="float:left;">${data[i].currency}${data[i].price}</span><span style="float:right;">смена 8(м/ч)</span></h5>
                                </div>
                            </div>
                        </div>` ;
            appendTo.innerHTML += element;
            // Add shadow
            document.querySelectorAll('[data-type="productItem"]')[i].style = 'box-shadow: 0px 12px 45px -40px #b98612;';
        }   
        // Add pagination buttons
        // appendTo.innerHTML += 
        //                 `<div class="product__pagination">
        //                     <a href="#">1</a>
        //                     <a href="#">2</a>
        //                     <a href="#">3</a>
        //                     <a href="#"><i class="fa fa-long-arrow-right"></i></a>
        //                 </div>`;
    }else{
        appendTo.innerHTML = "<h3 style='color:#b2b2b2'>No products found</h3>";
    }
     
    
};

// Display all products, all categories
function displayAllProducts(data, appendTo, relPath=''){
    for(let i=0; i<data.length; i++){
        if(data[i].products.length > 0)
            displayProductGrid(data[i].products, appendTo, relPath);
    }
}


// Display product details in a tabular format || accepts the specific product
// e.g. const currentProductObj = productsObj[<categoryNo>].products[<productNo>];
//      const productDetailsObj = currentProductObj.productDetails;
// displayDetails(productDetailsObj, detailsHolder);
function displayDetails(product, appendTo){
    let table = `<table class="table">`;
    for(property in product){
        table += `<tr class=""><td><strong> ${property}</strong></td><td>${product[property]}</td> </tr>`
    }
    table += `</table>`;

    appendTo.innerHTML = table;
} 

