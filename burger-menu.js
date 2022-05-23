function open_burger_menu() {
  $(".menu").toggleClass("active_burger_menu");
  $(".line1, .line2, .line3").toggleClass("active");
  $(".swiper-button-prev").toggleClass("disable_swiper_button_prev");
}
function open_category_men() {
  document.getElementById("items-for-men").style.display = "block";
  document.getElementById("items-for-women").style.display = "none";
  document.getElementById("for-men").style.fontWeight = "600";
  document.getElementById("for-women").style.fontWeight = "400";
}

function open_category_women() {
  document.getElementById("items-for-women").style.display = "block";
  document.getElementById("items-for-men").style.display = "none";
  document.getElementById("for-women").style.fontWeight = "600";
  document.getElementById("for-men").style.fontWeight = "400";
}
