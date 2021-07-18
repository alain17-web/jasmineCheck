let selectElementsStartingWithA = (array) => {
    let startsWithA = [];
    for(fruit of array){
        if(fruit.startsWith("a") == true){
        startsWithA.push(fruit);
        }
    }
    return startsWithA;
}

let selectElementsStartingWithVowel = (array) => {
    let startsWithVowel = [];
    for(fruit of array){
        if(fruit.startsWith("a")  == true || fruit.startsWith("e")  == true || fruit.startsWith("i")  == true || fruit.startsWith("o")  == true || fruit.startsWith("u")  == true || fruit.startsWith("y")  == true){
        startsWithVowel.push(fruit);
        }
    }
    return startsWithVowel;
}

let removeNullElements = (array) => {
    function checkValue(element){
        return element != null;
    }

    let filtered = array.filter(checkValue);
    return filtered;
}

let removeNullAndFalseElements = (array) => {
    function checkValue(element){
        return element != null && element !== false;
    }
    let filtered = array.filter(checkValue);
    return filtered;
}

let reverseWordsInArray = (array) => {
    let str = array.join(',');
    let newStr = ""; 
    for(let i=str.length - 1; i >=0; i--){
        newStr += str[i]
    }
    return newStr.split(',').reverse();
}

let everyPossiblePair = (array) => {
    return 'Write your method here';
}

let allElementsExceptFirstThree = (array) => {
    return 'Write your method here';
}

let addElementToBeginning = (array, element) => {
    return 'Write your method here';
}

let sortByLastLetter = (array) => {
    return 'Write your method here';
}

let getFirstHalf = (string) => {
    return 'Write your method here';
}

let makeNegative = (number) => {
    return 'Write your method here';
}

let numberOfPalindromes = (array) => {
    return 'Write your method here';
}

let shortestWord = (array) => {
    return 'Write your method here';
}

let longestWord = (array) => {
    return 'Write your method here';
}

let sumNumbers = (array) => {
    return 'Write your method here';
}

let repeatElements = (array) => {
    return 'Write your method here';
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}