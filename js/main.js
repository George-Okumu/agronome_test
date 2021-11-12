//Dropdowmn
const menuBtn = document.querySelector('#menu-btn');
const dropdown = document.querySelector('#dropdown');

menuBtn.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('show');
})

//For Step Progress Bar
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById('validate');
const form = document.getElementById('stepByStepForm');
const dots = document.getElementsByClassName('progress-bar__dot');
const numberOfSteps = 3;
let currentStep = 1;

for (let i = 0; i < dots.length; ++i) {
    dots[i].addEventListener('click', () => {
        goToStep(i + 1);
    });
}

previousButton.onclick = goPrevious;
nextButton.onclick = goNext;


function goNext(e) {
    e.preventDefault()
    currentStep += 1
    goToStep(currentStep)
}

function goPrevious(e) {
    e.preventDefault()
    currentStep -= 1
    goToStep(currentStep)
}

function goToStep(stepNumber) {
    currentStep = stepNumber

    let inputsToHide = document.getElementsByClassName('step')
    let inputs = document.getElementsByClassName(`step${currentStep}`)
    let indicators = document.getElementsByClassName('progress-bar__dot')

    for (let i = indicators.length - 1; i >= currentStep; --i) {
        indicators[i].classList.remove('full')
    }

    for (let i = 0; i < currentStep; ++i) {
        indicators[i].classList.add('full')
    }

    //hide all input
    for (let i = 0; i < inputsToHide.length; ++i) {
        hide(inputsToHide[i])
    }

    //only show the right one
    for (let i = 0; i < inputs.length; ++i) {
        show(inputs[i])
    }

    //if we reached final step
    if (currentStep === numberOfSteps) {
        enable(previousButton)
        hide(nextButton)
        show(submitButton)
    }

    //else if first step
    else if (currentStep === 1) {
        disable(previousButton)
        enable(next)
        hide(submitButton)
    } else {
        enable(previousButton)
        enable(next)
        hide(submitButton)
    }
}

function enable(elem) {
    elem.classList.remove("disabled");
    elem.disabled = false;
}

function disable(elem) {
    elem.classList.add("disabled");
    elem.disabled = true;
}

function show(elem) {
    elem.classList.remove('hidden')
}

function hide(elem) {
    elem.classList.add('hidden')
}

// more info
function myFunction() {
    document.getElementById("demo").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}

// drop down to next page

function la(src) {

    window.location = src;

}