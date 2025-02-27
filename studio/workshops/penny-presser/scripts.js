// get the press button
var pressButton = document.querySelector ('button[name="press"]');
var pennySelect = document.querySelector ('select[name="penny"]');
var pennyImage = document.querySelector('.penny');

// log press button to the console
console.log(pressButton);

// add event listern to press button
pressButton.addEventListener('click', () => {

    // log the penny value
    console.log(pennySelect.value);

    // log the penny image
    console.log(pennyImage);

    // set the penny image src
    pennyImage.src = 'img/' + pennySelect.value;
    
});