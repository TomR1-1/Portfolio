//Project Buttons
let aeroButton = document.getElementById("aeroButton");
let codingButton = document.getElementById("codingButton");
let cfdButton = document.getElementById("cfdButton");

let pastProjectsAerodynamics = document.querySelector(".pastProjectsAerodynamics");
let pastProjectsCoding = document.querySelector(".pastProjectsCoding");
let pastProjectsCFD = document.querySelector(".pastProjectsCFD");

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
        hide(pastProjectsCFD);
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
        hide(pastProjectsCFD);
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
        show(pastProjectsCFD);
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
let sandySideTunnelModal = document.getElementById("sandySideTunnelModal");
let sandyRearWingModal = document.getElementById("sandyRearWingModal");
let rustySTAerofoilModal = document.getElementById("rustySTAerofoilModal");
let flowVisPaintModal = document.getElementById("flowVisPaintModal");

let sandyFrontWingModalCloseButton = document.getElementsByClassName("sandyFrontWingModalCloseButton")[0];
let sandySideTunnelModalCloseButton = document.getElementsByClassName("sandySideTunnelModalCloseButton")[0];
let sandyRearWingModalCloseButton = document.getElementsByClassName("sandyRearWingModalCloseButton")[0];
let rustySTAerofoilModalCloseButton = document.getElementsByClassName("rustySTAerofoilModalCloseButton")[0];
let flowVisPaintModalCloseButton = document.getElementsByClassName("flowVisPaintModalCloseButton")[0];



let websitePortfolioModal = document.getElementById("websitePortfolioModal");
let surfboardFinModal = document.getElementById("surfboardFinModal");

let websitePortfolioCloseButton = document.getElementsByClassName("websitePortfolioCloseButton")[0];
let surfboardFinCloseButton = document.getElementsByClassName("surfboardFinCloseButton")[0];



let cfdResearchModal = document.getElementById("cfdResearchModal");

let cfdResearchModalCloseButton = document.getElementsByClassName("cfdResearchCloseButton")[0];


// Making the modal appear and dissapear
flowVisPaintModalCloseButton.onclick = function() {
    hide(flowVisPaintModal);
}

sandyFrontWingModalCloseButton.onclick = function() {
    hide(sandyFrontWingModal);
}

sandySideTunnelModalCloseButton.onclick = function() {
    hide(sandySideTunnelModal);
}

sandyRearWingModalCloseButton.onclick = function() {
    hide(sandyRearWingModal);
}

rustySTAerofoilModalCloseButton.onclick = function() {
    hide(rustySTAerofoilModal)
}


websitePortfolioCloseButton.onclick = function() {
    hide(websitePortfolioModal);
}

surfboardFinCloseButton.onclick = function() {
    hide(surfboardFinModal);
}


cfdResearchModalCloseButton.onclick = function() {
    hide(cfdResearchModal);
}



window.onclick = function(event) {
    if (event.target == flowVisPaintModal) {
        hide(flowVisPaintModal);
    }  
    if (event.target == sandyFrontWingModal) {
        hide(sandyFrontWingModal);
    }  
    if (event.target == sandySideTunnelModal) {
        hide(sandySideTunnelModal);
    }
    if (event.target == sandyRearWingModal) {
        hide(sandyRearWingModal);
    }
    if (event.target == rustySTAerofoilModal) {
        hide(rustySTAerofoilModal);
    }     
    if (event.target == websitePortfolioModal) {
        hide(websitePortfolioModal);
    }
    if (event.target == surfboardFinModal) {
        hide(surfboardFinModal);
    }
    if (event.target == cfdResearchModal) {
        hide(cfdResearchModal);
    }
}

// Aerodynamics Projects
let flowVisPaint = document.getElementById("flowVisPaint");
let sandyFrontWing = document.getElementById("sandyFrontWing");
let sandySideTunnel = document.getElementById("sandySideTunnel");
let sandyRearWing = document.getElementById("sandyRearWing");
let rustySTAerofoil = document.getElementById("rustySTAerofoil");

flowVisPaint.onclick = function() {
    show(flowVisPaintModal);
}

sandyFrontWing.onclick = function() {
    show(sandyFrontWingModal);
}

sandySideTunnel.onclick = function() {
    show(sandySideTunnelModal);
}

sandyRearWing.onclick = function() {
    show(sandyRearWingModal);
}

rustySTAerofoil.onclick = function() {
    show(rustySTAerofoilModal);
}


// CFD Projects
let cfdResearch = document.getElementById("cfdResearch");

cfdResearch.onclick = function() {
    show(cfdResearchModal);
}


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