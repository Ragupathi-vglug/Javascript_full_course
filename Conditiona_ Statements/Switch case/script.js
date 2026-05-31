let num=4;
switch(num){
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    default:
        console.log("No number matched");
        break;
}

// Combining Case Statement

let letter="i";
switch(letter){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log(letter," is a Vowel");
        break;    
    default:
        console.log(letter," is not a Vowel ");
        break;
}