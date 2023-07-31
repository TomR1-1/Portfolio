//Project Buttons
const aeroButton = document.getElementById("aeroButton")
const codingButton = document.getElementById("codingButton")
const plcButton = document.getElementById("plcButton")

const pastProjects = document.querySelector(".pastProjects")

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

        pastProjects.innerHTML = `
            <div class="projectContainer">
                <img class="image" id="p1" src="./css/images/Tom Rotbart - Head Shot.png" alt="">
                <div class="projectText">Project 1</div>
            </div>
            

            <div class="projectContainer">
                <img class="image" id="p1" src="./css/images/Rusty.jpg" alt="">
                <div class="projectText">Project 2</div>
            </div>
            
            <div class="projectContainer">
                <img class="image" id="p1" src="./css/images/Tom Rotbart - Head Shot.png" alt="">
                <div class="projectText">Project 1</div>
            </div>

            <div class="projectContainer">
                <img class="image" id="p1" src="./css/images/Sandy.JPG" alt="">
                <div class="projectText">Project 1</div>
            </div>

            <div class="projectContainer">
                <img class="image" id="p1" src="./css/images/Tom Rotbart - Head Shot.png" alt="">
                <div class="projectText">Project 1</div>
            </div>

            <div class="projectContainer">
                <img class="image" id="p1" src="./css/images/test1.JPG" alt="">
                <div class="projectText">Project 1</div>
            </div>

            <div class="projectContainer">
                <img class="image" id="p1" src="./css/images/test2.JPG" alt="">
                <div class="projectText">Project 1</div>
            </div>

            <div class="projectContainer">
                <img class="image" id="p1" src="./css/images/Tom Rotbart - Head Shot.png" alt="">
                <div class="projectText">Project 1</div>
            </div>
        `;
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

        pastProjects.innerHTML = `
        <div><img src="./css/images/Tom Rotbart - Head Shot.png" alt=""></div>
        <div><img src="./css/images/Tom Rotbart - Head Shot.png" alt=""></div>
        `;
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

// Making the modal appear and dissapear
const modal = document.getElementById("modal");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const closeButton = document.getElementsByClassName("close")[0];

p1.onclick = function() {
    modal.style.display = "block";
}

closeButton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
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