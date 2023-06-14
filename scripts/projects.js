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
            <div><img src="./css/images/Tom Rotbart - Head Shot.png" alt=""></div>
            <div><img src="./css/images/Tom Rotbart - Head Shot.png" alt=""></div>
            <div><img src="./css/images/Tom Rotbart - Head Shot.png" alt=""></div>
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