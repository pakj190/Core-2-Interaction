// get the entries
var request = await fetch('assets/entries.json')
var entries = await request.json();

console.log(entries);
