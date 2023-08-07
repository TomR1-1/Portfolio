//Project Buttons
let aeroButton = document.getElementById("aeroButton");
let codingButton = document.getElementById("codingButton");
let plcButton = document.getElementById("plcButton");

let pastProjectsAerodynamics = document.querySelector(".pastProjectsAerodynamics");

//If the areo button is not already active, add the active button class
//Also remove the active class from the other buttons
aeroButton.addEventListener("click", () => {
    if (!(isActive(aeroButton))) {
        addActiveBtn(aeroButton);

        if(isActive(codingButton)) {
            removeActiveBtn(codingButton);
        }
        else if (isActive(plcButton)) {
            removeActiveBtn(plcButton);
        }

        showPastProject(pastProjectsAerodynamics);
    }
});

codingButton.addEventListener("click", () => {
    if (!(isActive(codingButton))) {
        addActiveBtn(codingButton);

        if(isActive(aeroButton)) {
            removeActiveBtn(aeroButton);
        }
        else if (isActive(plcButton)) {
            removeActiveBtn(plcButton);
        }

        hide(pastProjectsAerodynamics);
    }
});

plcButton.addEventListener("click", () => {
    if (!(isActive(plcButton))) {
        addActiveBtn(plcButton);

        if(isActive(aeroButton)) {
            removeActiveBtn(aeroButton);
        }
        else if (isActive(codingButton)) {
            removeActiveBtn(codingButton);
        }

        pastProjects.innerHTML = `
        <div><img src="./css/images/Tom Rotbart - Head Shot.png" alt=""></div>
        `;
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
let websitePortfolioModal = document.getElementById("websitePortfolioModal");
let otherModal = document.getElementById("otherModal");
// let modalContent = document.querySelector(".modalContent")
let websitePortfolioCloseButton = document.getElementsByClassName("websitePortfolioCloseButton")[0];
let otherModalCloseButton = document.getElementsByClassName("otherModalCloseButton")[0];
// Making the modal appear and dissapear

websitePortfolioCloseButton.onclick = function() {
    hide(websitePortfolioModal);
}

otherModalCloseButton.onclick = function() {
    hide(otherModal);
}

window.onclick = function(event) {
    if (event.target == websitePortfolioModal) {
        hide(websitePortfolioModal);
    }
    if (event.target == otherModal) {
        hide(otherModal);
    }
}

// Aerodynamics Projects
let testProject = document.getElementById("test");
testProject.onclick = function() {
    show(otherModal);
}


// CFD Projects



// Coding Projects
let codingProject1 = document.getElementById("codingProject1");

codingProject1.onclick = function() {
    show(websitePortfolioModal);
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