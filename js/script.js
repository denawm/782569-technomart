var buy_btn = document.querySelectorAll(".product-buy");
var bookmark_btn = document.querySelectorAll(".product-bookmark");
var popup_cart = document.querySelector(".modal-cart");
var close_cart = popup_cart.querySelector(".modal-close");
var basket = document.querySelector(".header-basket");
var bookmark = document.querySelector(".header-bookmark");
var overlay = document.querySelector(".modal-overlay");

for(var i = 0; i < buy_btn.length; i++){
  buy_btn[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_cart.classList.add("modal-show");
  basket.classList.add("basket-catalog");
  overlay.classList.add("overlay-show");
});
}

for(var i = 0; i < bookmark_btn.length; i++){
  bookmark_btn[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  bookmark.classList.add("basket-catalog");
});
}

close_cart.addEventListener("click", function(evt){
  evt.preventDefault();
  popup_cart.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});
      
window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    if (popup_cart.classList.contains("modal-show")){
      evt.preventDefault();
      popup_cart.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
   }
});

overlay.addEventListener("click", function(){
  overlay.classList.remove("overlay-show");
  popup_cart.classList.remove("modal-show");
  popup_mail.classList.remove("modal-show");
  popup_map.classList.remove("modal-show");
});


var contact_btn = document.querySelector(".company-contact-btn");
var popup_mail = document.querySelector(".mail-form");
var close_mail = popup_mail.querySelector(".modal-close");

  
var form = popup_mail.querySelector("form");
var mail_name = popup_mail.querySelector("[name=modal-name]");
var mail_email = popup_mail.querySelector("[name=modal-email]");
var mail_text = popup_mail.querySelector("[name=modal-text]");
      
    
var isStorageSupport = true;
var storage = "";
      
try {
  storage = localStorage.getItem("mail_name");  
  } catch(err) {
      isStorageSupport = false;
    }
      
contact_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_mail.classList.add("modal-show");
  overlay.classList.add("overlay-show");
    if (storage) {
        mail_name.value = storage;
        mail_email.focus();
    } else {
        mail_name.focus();
      }
});
      
close_mail.addEventListener("click", function(evt){
   evt.preventDefault();
    popup_mail.classList.remove("modal-show");
    popup_mail.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
});
      
window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    if (popup_mail.classList.contains("modal-show")){
      evt.preventDefault();
      popup_mail.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
  }
});

form.addEventListener("submit", function(evt){
  if (!mail_name.value || !mail_email.value || !mail_text.value) {
    evt.preventDefault();
    popup_mail.classList.remove("modal-error");
    popup_mail.offsetWidth = popup_mail.offsetWidth;
    popup_mail.classList.add("modal-error");
  } else {
      if (isStorageSupport) {
        localStorage.setItem("mail_name", mail_name.value);
      }
    }
});
  
var map_btn = document.querySelector(".company-contact-map");
var popup_map = document.querySelector(".modal-map");
var close_map = popup_map.querySelector(".modal-close"); 
      
map_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_map.classList.add("modal-show");
  overlay.classList.add("overlay-show");
});
   
close_map.addEventListener("click", function(evt){
  evt.preventDefault();
  popup_map.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
}); 
      
window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
     if (popup_map.classList.contains("modal-show")){
        evt.preventDefault();
        popup_map.classList.remove("modal-show");
        overlay.classList.remove("overlay-show");
      }
  }
});
    
    
// Кнопочки в сервисах.

var btn_delivery = document.querySelector(".btn-delivery");
var btn_warrianty = document.querySelector(".btn-warrianty");
var btn_credit = document.querySelector(".btn-credit");

var delivery = document.querySelector(".service-delivery");
var warrianty = document.querySelector(".service-warrianty");
var credit = document.querySelector(".service-credit");

function clearSelection(evt) {
  evt.preventDefault();
  btn_delivery.classList.remove("service-btn-active");
  btn_warrianty.classList.remove("service-btn-active")
  btn_credit.classList.remove("service-btn-active");
  delivery.classList.remove("service-show");
  warrianty.classList.remove("service-show");
  credit.classList.remove("service-show");
}

function makeActive(slide, button) {
  slide.classList.add("service-show");
  button.classList.add("service-btn-active");
}

btn_delivery.addEventListener("click", function (evt) {
  clearSelection(evt);
  makeActive(delivery, btn_delivery);
});

btn_warrianty.addEventListener("click", function (evt) {
  clearSelection(evt);
  makeActive(warrianty, btn_warrianty);
});

btn_credit.addEventListener("click", function (evt) {
  clearSelection(evt);
  makeActive(credit, btn_credit);
});


