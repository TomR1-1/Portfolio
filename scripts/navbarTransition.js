//Change from transparent to color once scrolled

var nav = document.getElementById("navbar");

window.onscroll = function(){

    if (window.pageYOffset > 100) {

        nav.style.background = "#333";
        nav.style.boxShadow = "0px 4px 2px #1c1c1c";
    }
    else{
        nav.style.background = "transparent";
        nav.style.boxShadow = "none";
    }
}