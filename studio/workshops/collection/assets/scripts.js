// get the entries
var request = await fetch('assets/entries.json')
var entries = await request.json();

console.log(entries);


// get the input elements
var locationSelect = document.querySelector('select[name="location"]');
var colorSelect = document.querySelector('select[name="color"]');
var subjectSelect = document.querySelector('select[name="subject"]');

console.log(locationSelect, colorSelect, subjectSelect);

// get the submit button
var submitButton = document.querySelector('button[name="submit"]');

console.log(submitButton);