const searchString = require("./index")
const mockDb = [
    "First string 2", 
    "Second line 2", 
    "Third thing 2", 
    "Fourth string 2", 
    "Fifth string 2", 
    "Sixth 2", 
    "Seventh thing 2", 
    "Random thing 2", 
    "One more 2", 
    "Yet an other thing 2"
];

it("This is my first test", () => {
    expect("hello").toEqual("hello")
    searchString(mockDb, "string")
})


it("Serach with empty result", () => {
    expect(searchString(mockDb, "zzz")).toEqual([])
})


it("Real search with string keyword. Expected non-empty array as a result.", () => {
    expect(searchString(mockDb, "string")).toEqual(["First string 2", "Fourth string 2", "Fifth string 2"])
})