const navigation = document.querySelector(".navigation");

function toggleMenu(event) {
  event.classList.contains("fa-bars")
    ? event.classList.replace("fa-bars", "fa-xmark")
    : event.classList.replace("fa-xmark", "fa-bars");
  navigation.classList.toggle("top-[120px]");
}