
// grab the count-el element, store it in a countEl variable
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el", "reset")

let count = 0

function increment() {
    count++;
    // set countEl's innerText to the count
    countEl.textContent = count;
}

function save() {
     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
     let saveCount = count + " - "
     
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += saveCount;
    countEl.textContent = 0;
    count = 0;
    // NB: Make sure to not delete the existing content of the paragraph
console.log(count);
}
save();

// Challenge: Create a variable, message, that stores the string: "You have tree new notifications"
// let userName = "person"
// let tree = "You have three new notifications"
// // Create a variable, messageToUser, that contains the message we have logged
// let messageToUser = tree + ", " + userName + "!";
// console.log(messageToUser);

// Create two variables, name and greeting. The name variable should store your name,
// let myName = "Razzle McFrazzles"
// // and the greeting should store e.g. "Hi, my name is "
// let greeting = "Hi, my name is "
// // Create a third variable, myGreeting, that contatenates the two strings
// let myGreeting = greeting + myName + "!"
// // Log myGreeting to the console
// console.log(myGreeting);

// //What will these strings print?
// console.log(4 + 5) // 9
// console.log("2" + "4") // "24"
// console.log("5" + 1) // "51"
// console.log(100 + "100") //"100100"

// // Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")
// // Create two variables (name & greeting) that contains your name
// let myName = "Vemary Garrison"
// let myGreeting = "Welcome back, "
// // and the greeting we want to render on the page
// let greeting = myGreeting + myName;
// // Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting;

// // Add an emoji to the end! 👋
// // WRITE YOUR CODE BELOW HERE
// // HINT: count = count + 1
// welcomeEl.innerText += "👋";