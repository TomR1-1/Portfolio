//Project Buttons
let aeroButton = document.getElementById("aeroButton");
let codingButton = document.getElementById("codingButton");
let cfdButton = document.getElementById("cfdButton");

let pastProjectsAerodynamics = document.querySelector(".pastProjectsAerodynamics");
let pastProjectsCoding = document.querySelector(".pastProjectsCoding");

//If the areo button is not already active, add the active button class
//Also remove the active class from the other buttons
aeroButton.addEventListener("click", () => {
    if (!(isActive(aeroButton))) {
        addActiveBtn(aeroButton);

        if(isActive(codingButton)) {
            removeActiveBtn(codingButton);
        }
        else if (isActive(cfdButton)) {
            removeActiveBtn(cfdButton);
        }

        hide(pastProjectsCoding);
        showPastProject(pastProjectsAerodynamics);
    }
});

codingButton.addEventListener("click", () => {
    if (!(isActive(codingButton))) {
        addActiveBtn(codingButton);

        if(isActive(aeroButton)) {
            removeActiveBtn(aeroButton);
        }
        else if (isActive(cfdButton)) {
            removeActiveBtn(cfdButton);
        }

        hide(pastProjectsAerodynamics);
        showPastProject(pastProjectsCoding);
    }
});

cfdButton.addEventListener("click", () => {
    if (!(isActive(cfdButton))) {
        addActiveBtn(cfdButton);

        if(isActive(aeroButton)) {
            removeActiveBtn(aeroButton);
        }
        else if (isActive(codingButton)) {
            removeActiveBtn(codingButton);
        }

        hide(pastProjectsCoding);
        hide(pastProjectsAerodynamics);
    }
})

function isActive(object) {
    return object.classList.contains("btnActive");
}

function removeActiveBtn(object) {
    object.classList.add("btn");
    object.classList.remove("btnActive");
}

function addActiveBtn(object) {
    object.classList.add("btnActive");
    object.classList.remove("btn");
}



// MODAL JAVASCRIPT CODE
let sandyFrontWingModal = document.getElementById("sandyFrontWingModal");
let sandyRearWingModal = document.getElementById("sandyRearWingModal");

let sandyFrontWingModalCloseButton = document.getElementsByClassName("sandyFrontWingModalCloseButton")[0];



let websitePortfolioModal = document.getElementById("websitePortfolioModal");
let surfboardFinModal = document.getElementById("surfboardFinModal");

let websitePortfolioCloseButton = document.getElementsByClassName("websitePortfolioCloseButton")[0];
let surfboardFinCloseButton = document.getElementsByClassName("surfboardFinCloseButton")[0];


// Making the modal appear and dissapear
sandyFrontWingModalCloseButton.onclick = function() {
    hide(sandyFrontWingModal);
}

websitePortfolioCloseButton.onclick = function() {
    hide(websitePortfolioModal);
}

surfboardFinCloseButton.onclick = function() {
    hide(surfboardFinModal);
}

window.onclick = function(event) {
    if (event.target == sandyFrontWingModal) {
        hide(sandyFrontWingModal);
    }    
    if (event.target == websitePortfolioModal) {
        hide(websitePortfolioModal);
    }
    if (event.target == surfboardFinModal) {
        hide(surfboardFinModal);
    }
}

// Aerodynamics Projects
let sandyFrontWing = document.getElementById("sandyFrontWing");
let sandyRearWing = document.getElementById("sandyRearWing");

sandyFrontWing.onclick = function() {
    show(sandyFrontWingModal);
}


// CFD Projects



// Coding Projects
let websitePortfolio = document.getElementById("websitePortfolio");
let surfboardFin = document.getElementById("surfboardFin");

websitePortfolio.onclick = function() {
    show(websitePortfolioModal);
}

surfboardFin.onclick = function() {
    show(surfboardFinModal);
}


let modal = websitePortfolioModal;

// Adding the carousel
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function goToSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = modal.getElementsByClassName("slide");
    let dots = modal.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


// Showing and Hiding Modals
function hide(activeModal) {
    activeModal.style.display = "none";
    slideIndex = 1;
}

function show(activeModal) {
    activeModal.style.display = "block";
    modal = activeModal;
    showSlides(1);
}

function showPastProject(section) {
    section.style.display = "grid";
}