let men=document.getElementsByClassName("nav-child")[0];
let women=document.getElementsByClassName("nav-child")[1];
var kid=document.getElementsByClassName("nav-child")[2];
var products=document.getElementById("products");
var prod_title=document.querySelectorAll(".prod-title");
var category_name=[];
var category_products=[];
var mens_category=[];
var womens_category=[];
var kids_category=[];
var image=document.querySelectorAll(".image");
var vendor=document.querySelectorAll(".vendor");
var badge=document.querySelectorAll(".badge");
var price=document.querySelectorAll(".price");
var compare=document.querySelectorAll(".compare");
var percent=document.querySelectorAll(".percent");
var percentage=0;


async function categories() {
    const response = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json");
    const category = await response.json();
    console.log(category);
    var totalcategories=Object.keys(category.categories).length;
    console.log(totalcategories);

    for(var i=0;i<totalcategories;i++){
        category_name[i]=category.categories[i].category_name;
        category_products[i]=category.categories[i].category_products;
        console.log(category_products[i]);
      
        men.addEventListener("click",menfunction);

        function menfunction(){

          console.log("men clicked");
          products.style.visibility="visible";
          for(let m=0;m<4;m++){
            mens_category=category_products[0][m];
              console.log(mens_category.title);
              prod_title[m].innerHTML=mens_category.title;
              image[m].style.backgroundImage=`url(${mens_category.image})`;
              vendor[m].innerHTML=mens_category.vendor;        
              badge[m].innerHTML=mens_category.badge_text==null?badge[m].style.visibility='hidden':mens_category.badge_text;        
              price[m].innerHTML=mens_category.price;        
              compare[m].innerHTML=mens_category.compare_at_price;        
            
              percentage=((compare[m].innerHTML-price[m].innerHTML)/(compare[m].innerHTML)*100).toFixed(0);
              percent[m].innerHTML=`${percentage}% Off`;
            }
        }
        
        women.addEventListener("click",womenfunction);

        function womenfunction(){

          console.log("women clicked");
          products.style.visibility="visible";

          for(let w=0;w<4;w++){
            womens_category=category_products[1][w];
            console.log(womens_category.title);
            prod_title[w].innerHTML=womens_category.title;
            image[w].style.backgroundImage=`url(${womens_category.image})`;
            vendor[w].innerHTML=womens_category.vendor;
            badge[w].innerHTML=womens_category.badge_text==null?badge[w].style.visibility='hidden':womens_category.badge_text;        
            price[w].innerHTML=womens_category.price;        
            compare[w].innerHTML=womens_category.compare_at_price;   
            percentage=((compare[w].innerHTML-price[w].innerHTML)/(compare[w].innerHTML)*100).toFixed(0);
            percent[w].innerHTML=`${percentage}% Off`;     
           
        }
        }

        kid.addEventListener("click",kidfunction);
        
        function kidfunction(){
          console.log("kid clicked");
          products.style.visibility="visible";

          for(let k=0;k<4;k++){
              kids_category=category_products[2][k];
              console.log(kids_category.title);
              prod_title[k].innerHTML=kids_category.title;
              image[k].style.backgroundImage=`url(${kids_category.image})`;
              vendor[k].innerHTML=kids_category.vendor;
              badge[k].style.visibility='visible';
              badge[k].innerHTML=kids_category.badge_text;        
              price[k].innerHTML=kids_category.price;        
              compare[k].innerHTML=kids_category.compare_at_price;        
              percentage=((compare[k].innerHTML-price[k].innerHTML)/(compare[k].innerHTML)*100).toFixed(0);
              percent[k].innerHTML=`${percentage}% Off`;
            }
        }

    }
}
 
categories();
