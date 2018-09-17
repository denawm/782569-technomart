var contact_btn = document.querySelector(".company-contact-btn");
var popup_mail = document.querySelector(".mail-form");
var close_mail = popup_mail.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");
  
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
/*     
var buy_btn = document.querySelector(".product-buy");
var popup_cart = document.querySelector(".modal-cart");
var close_cart = popup_cart.querySelector(".modal_close");
      
buy_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_cart.classList.add("modal-show");
  overlay.classList.add("overlay-show");
});
      
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
    */       
var map_btn = document.querySelector(".company-contact-map");
var popup_map = document.querySelector(".modal-map");
var close_map = popup_map.querySelector(".modal_close"); 
      
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
    
overlay.addEventListener("click", function(){
  popup_mail.classList.remove("modal-show");
  popup_cart.classList.remove("modal-show");
  popup_map.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});
    