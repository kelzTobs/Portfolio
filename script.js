let currentIndex = 0;
function showSlide(index) {
    const slider = document.querySelector('.slider');
    const totalSlider = document.querySelectorAll('.slide').length;


if (index < 0) {
    index = totalSlider - 1;
} else if (index >= totalSlider) {
    index =0; 
}

currentIndex = index;

const translateValue = -index * 100 + '%';

slider.style.transform = 'translateX(' + translateValue + ')';

}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});