// * get the elements we need
const mainContainer = document.querySelector('.ham_Container');
const hamContainer = document.querySelector('#ham_4');
const hideElement = document.querySelector('.hide');

// * get the data from the classes names
const data = [];

data.push(hamContainer.getAttribute('data-bars_thickness'));
data.push(hamContainer.getAttribute('data-speed'));
data.push(hamContainer.getAttribute('data-middle_bar_color'));
data.push(hamContainer.getAttribute('data-top_down_bars_color'));
data.push(hideElement.getAttribute('data-background_color'));


// * create the hamburger icon bars
const mainBar = document.createElement('div');

// * set the classes of the main bar
mainBar.classList.add('mainBar');

// * set the user data change
const root = document.querySelector(':root'); 
root.style.setProperty("--bars-height", `${data[0]}px`);
root.style.setProperty("--transition", `all ${data[1]}s ease-in-out`);
root.style.setProperty("--mainBar-backgroundColor", `${data[2]}`);
root.style.setProperty("--pseudo-backgroundColor", `${data[3]}`);
root.style.setProperty("--hide-backgroundColor", `${data[4]}`);


// * add elements to the DOM
hamContainer.appendChild(mainBar);

// * start animation
let start = true; 
hamContainer.addEventListener('click', () => {  
    if(start) {
        mainContainer.classList.add('back');
        mainContainer.classList.add('setRotate');
        mainContainer.classList.add('moveHide');
        start = false;
    } else {
        mainContainer.classList.remove('back');
        mainContainer.classList.remove('setRotate');
        mainContainer.classList.remove('moveHide');
        start = true;
    }
})
