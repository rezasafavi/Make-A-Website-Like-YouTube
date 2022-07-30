var menuIcon = document.querySelector(".menu-icon");
var Sidebar = document.querySelector(".Sidebar");

menuIcon.onclick = function(){
    Sidebar.classList.toggle("small-sidebar");
}