// get the button elements
var onButton = document.querySelector('button[name="on"]');
var offButton = document.querySelector('button[name="off"]');

// log the elemtns to the console
console.log(onButton);
console.log(offButton);

// get the lightbulb element
var lightbulb = document.querySelector('.lightbulb');

// log the element
console.log(lightbulb);

// add event listender to on button
onButton.addEventListener('click', () => {

    // add the is-on class to the lightbublb element
    lightbulb.classList.add('is-on');

});

// add event listern to off button
offButton.addEventListener('click', () => {

    // remove the is-on class from the lightbulb element
    lightbulb.classList.remove('is-on');

});
