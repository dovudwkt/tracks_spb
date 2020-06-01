[1mdiff --git a/dist/shop-grid.html b/dist/shop-grid.html[m
[1mindex 1588d32..c01f5e9 100755[m
[1m--- a/dist/shop-grid.html[m
[1m+++ b/dist/shop-grid.html[m
[36m@@ -38,11 +38,11 @@[m
         <div class="humberger__menu__widget">[m
             <div class="header__top__right__language">[m
                 <img src="img/rus.png" alt="" class="flag_img">[m
[31m-                <div class="language">English</div>[m
[32m+[m[32m                <div class="language">rus</div>[m[41m[m
                 <span class="arrow_carrot-down"></span>[m
                 <ul class="flag">[m
[31m-                    <li><button onclick="switchLang('rus')" id="russ"> <img id="rusFlag" src="img/rus.png" alt="" >Русский</button></li>[m
[31m-                    <li><button onclick="switchLang('eng')" id="eng"> <img id="engFlag" src="img/eng.png" alt="" >English</button></li>[m
[32m+[m[32m                    <li><button onclick="switchLang('rus')" > <img id="rusFlag" src="img/rus.png" alt="" >rus</button></li>[m[41m[m
[32m+[m[32m                    <li><button onclick="switchLang('eng')" > <img id="engFlag" src="img/eng.png" alt="" >eng</button></li>[m[41m[m
                 </ul>[m
             </div>[m
             <div class="header__top__right__auth">[m
[36m@@ -104,11 +104,11 @@[m
                             </div>[m
                             <div class="header__top__right__language">[m
                                 <img src="img/rus.png" alt="" class="flag_img">[m
[31m-                                <div class="language">English</div>[m
[32m+[m[32m                                <div class="language">rus</div>[m[41m[m
                                 <span class="arrow_carrot-down"></span>[m
                                 <ul class="flag">[m
[31m-                                    <li><button onclick="switchLang('rus')" id="russ"> <img id="rusFlag" src="img/rus.png" alt="" >Русский</button></li>[m
[31m-                                    <li><button onclick="switchLang('eng')" id="eng"> <img id="engFlag" src="img/eng.png" alt="" >English</button></li>[m
[32m+[m[32m                                    <li><button onclick="switchLang('rus')" > <img id="rusFlag" src="img/rus.png" alt="" >rus</button></li>[m[41m[m
[32m+[m[32m                                    <li><button onclick="switchLang('eng')" > <img id="engFlag" src="img/eng.png" alt="" >eng</button></li>[m[41m[m
                                 </ul>[m
                             </div>[m
                             <div class="header__top__right__auth">[m
[36m@@ -393,13 +393,9 @@[m [mdisplayAllProducts(productsObj, holder);[m
 [m
 document.querySelector('#num-products-found').innerHTML = getTotalNumProducts(productsObj);[m
 [m
[31m-[m
 console.log(currentCategoryObj)[m
 [m
 [m
[31m-[m
[31m-[m
[31m-[m
 // Search functionality[m
 // Almost working[m
 [m
[36m@@ -441,9 +437,10 @@[m [mfunction switchLang(lang){[m
 // The image name and parameter passed to function should match* [m
 [m
 [m
[31m-    // IT IS A BAD PRACTICE TO GIVE IDs WITH SIMILAR NAMES: lang and language in your case[m
[31m-    // Give meaningful names [m
[32m+[m[32m//-------Advice for Sulaimon----[m[41m[m
 [m
[32m+[m[32m// IT IS A BAD PRACTICE TO GIVE IDs WITH SIMILAR NAMES: lang and language in your case[m[41m[m
[32m+[m[32m// Give meaningful names[m[41m [m
 [m
 [m
 [m
