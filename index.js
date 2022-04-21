const listOfStrings = [
    "First string", 
    "Second line", 
    "Third thing", 
    "Fourth string", 
    "Fifth string", 
    "Sixth", 
    "Seventh string", 
    "Random string", 
    "One more", 
    "Yet an other string" 
];

function searchString(listOfStrings, term) {
    return listOfStrings.filter(element => element.indexOf(term) !== -1).slice(0, 5)
}

// console.log(searchString(listOfStrings, "string"));

module.exports = searchString