const pictures = ["30", "39", "77", "85", "94"];
let counter = 0;
const image = document.querySelector('#innerDiv');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.classList.contains('btn-left')) {
            counter--;
            if (counter < 0) {
                counter = pictures.length - 1;
            }
            image.style.backgroundImage = `url('images/DSC_30${pictures[counter]}.JPG')`;
        }
        if (button.classList.contains('btn-right')) {
            counter++;
            if (counter > pictures.length - 1) {
                counter = 0;
            }
            image.style.backgroundImage = `url('images/DSC_30${pictures[counter]}.JPG')`;
        }
    });
});