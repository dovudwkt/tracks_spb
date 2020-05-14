// Display products of a particular category
function displayProductGrid(data, appendTo, relPath=''){
    var element;
    for(let i=0; i<data.length;i++){
        element = ` <div data-id="${i}" data-type="productItem" data-productName="${data[i].model}" class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" style='background:url("${relPath}${data[i].imgURL}")'>
                                <ul class="product__item__pic__hover">
                                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6><a href="./pages/product-details/shop-details.html"  >${data[i].model}</a></h6>
                                <h5><span style="float:left;">${data[i].currency}${data[i].price}</span><span style="float:right;">смена 8(м/ч)</span></h5>
                            </div>
                        </div>
                    </div>` ;
        appendTo.innerHTML += element;
    }    
};

// Display all products, all categories
function displayAllProducts(data, appendTo, relPath=''){
    for(let i=0; i<data.length; i++){
        displayProductGrid(data[i].products, appendTo, relPath);
    }
}
