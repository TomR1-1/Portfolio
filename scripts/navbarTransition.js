//Change from transparent to color once scrolled

var nav = document.getElementById("navbar");

window.onscroll = function(){

    if (window.pageYOffset > 100) {
        console.log("Not at top of page")
        nav.style.background = "#333";
        nav.style.boxShadow = "0px 4px 2px #1c1c1c";
    }
    else{
        console.log("Top of page")
        nav.style.background = "linear-gradient(to bottom, #333333CC 25%, #33333300)";
        nav.style.boxShadow = "none";
    }
}