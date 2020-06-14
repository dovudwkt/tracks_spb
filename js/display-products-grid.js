// /home/dovud/projects/mySite/dist/product-details/shop-details.html
// /home/dovud/projects/mySite/dist/pages/product-details/shop-details.html

// Display products of a particular category
function displayProductGrid(data, appendTo, relPath=''){
    var element;
    if(data.length !== 0){
        for(let i=0; i<data.length;i++){
            element = ` <div data-id="${i}" data-type="productItem" data-productName="${data[i].model}" class="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" style='background:url("${relPath}${data[i].imgURL}")'>
                                    <div class="product__item__pic__hover" onclick="redirectTo('pages/product-details/${data[i].productURL}')">
                                    <span>More</span>
                                    
                                    </div>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="pages/product-details/${data[i].productURL}"  >${data[i].fullName}</a></h6>
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

   // Redirect
function redirectTo(url){
    window.location.href = url; 
}

function openURL(url, target="_blank"){
    window.open(
       url, target 
    );
}


function displayGallery(data, appendTo, relPath=''){
    for(let z=0;z<data.length;z++){
        var element;
        if(data.length !== 0){
            for(let i=0; i<data[z].products.length; i++){
                element = ` <div data-id="${i}" data-type="productItem" 
                                data-productName="${data[z].products[i].model}" 
                                class="col-lg-4 col-md-4 col-sm-6 mb-3 imgContainer btn">
    
                                <div class="product__item__pic set-bg" 
                                    style='background:url("${relPath}${data[z].products[i].imgURL}")'
                                    title="open an image" >
                                    
                                    <div onclick="openURL('./${data[z].products[i].imgURL} ')" 
                                         class="w-100 h-100">      
                                    </div>
                                    <div class="product__item__text overlay">
                                       <h6><a title="View the item" href="pages/product-details/${data[z].products[i].productURL}"  >${data[z].products[i].fullName}</a></h6>
                                   </div>
                                    
                                </div>
                            </div>` ;
                appendTo.innerHTML += element;
            } 
        }
    }
   
    
};



function displayCategoriesGrid(data, appendTo, relPath=''){
    for(let z=0;z<data.length;z++){
        var element;
        
        // element = ` <div data-id="${z}" data-type="productItem" 
        //                 data-productName="${data[z].category}" 
        //                 class="col-lg-2 col-md-3 col-sm-3 mb-3 imgContainer btn categories__item">

        //                 <div class="product__item__pic set-bg" 
        //                     style='background:url("${relPath}${data[z].categoryImgURL}")'>
                            
        //                     <div onclick="openURL('./pages/${data[z].categoryURL} ')" 
        //                             class="w-100 h-100">      
        //                     </div>
        //                     <div class="product__item__text overlay">
        //                         <h6><a title="" href="pages/${data[z].categoryURL}" >${data[z].category}</a></h6>
        //                     </div>
                            
        //                 </div>
        //             </div>` ;

        element = `<div class="col-lg-3 col-md-4 col-sm-6 mb-2">
                        <a href="${relPath}pages/${data[z].categoryURL}" class="default-link-hover">
                            <div class="categories__item" >
                                <div class="categories__item set-bg" style='background:url("${relPath}${data[z].categoryImgURL}")'> </div>
                                <h5> ${data[z].category} </h5>
                            </div>
                        </a>
                    </div>`;

        appendTo.innerHTML += element;
            
        }
    
};
