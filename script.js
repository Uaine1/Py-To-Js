// Bank - Works
let greet = window.prompt("Greetings: ").trim().toLowerCase();

console.log(greet);


if(greet === "hello"){
    console.log("$0");
}
else if(greet.charAt(0) === "h" && greet !== "hello"){
    console.log("$20");
}
else{
    console.log("$100")
}


// Coke
/* My code
let total_coins = 0;
const coinAmount = [25, 10, 5];

while(total_coins < 50){   
    console.log(`Amount Due: ${50 - total_coins}`);
    coin = window.prompt("Insert Coins: ");
    coin = Number(coin);

    if(coin in coinAmount){ //in JS  coin in coinAmount checks if coin is a valid index of the array, not a value in it.
        total_coins += coin;
    }
    else{
        console.log("Try Again");
        continue
    }
}

let change = total_coins - 50;
console.log(`Change Owed: ${change}`); */

// AI Corrected - Minor minor Corrections
let total_coins = 0;
const coinAmount = [25, 10, 5];

while(total_coins < 50){
    console.log(`Amount Due: ${50 - total_coins}`);
    let coin = window.prompt("Insert Coins: "); // Forgot to declare coin
    coin = Number(coin);

    if(coinAmount.includes(coin)){ // Apparently "in" in js works different compared to python's "in"
        total_coins += coin;
    }
    else{
        console.log("Try Again");
        continue
    }
}

let change = total_coins - 50;
console.log(`Change Owed: ${change}`);


// Deep - Works

function deep(){
    let user_input1 = window.prompt("What is the answer to the Great Question of Life, the Universe and Everything?").trim().toLowerCase();
    
    if(user_input1 === "42"){
        console.log("Yes");
    }
    else if(user_input1 === "forty-two"){
        console.log("Yes");
    }
    else if(user_input1 === "forty two"){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}

deep();

// Einstein - Works

const c = 300000000

function einstein(){
    let user_input2 = window.prompt("m:");
    user_input2 = Number(user_input2);

    console.log(user_input2 * c**2);
}

einstein();

// Camel

// My code
/*
function camel(){
    let user_input3 = window.prompt("camelCase: ");
    toSnakeCase = camelToSnake(user_input3);
    console.log(`snake_case: ${toSnakeCase}`);

}

function camelToSnake(camelCase){
    let snakeCase = "";
    for(upper in camelCase){ // wrong way to use char iteration, neve forget to put let
        if(upper === upper.toUpperCase()){
            snakeCase += "_" + upper.toLowerCase; // no parenthesis to the func toLowerCase
        }
        else{
            snakeCase += upper;
        }
    return snakeCase.trim("_"); // its inside the loop so it exits early
    }  
}

camel(); */

// AI Corrected - Minor corrections
function camel(){
    let user_input3 = window.prompt("camelCase: ");
    toSnakeCase = camelToSnake(user_input3);
    console.log(`snake_case: ${toSnakeCase}`);

}

function camelToSnake(camelCase){
    let snakeCase = "";

    for(let upper of camelCase){
        if(upper === upper.toUpperCase()){
            snakeCase += "_" + upper.toLowerCase();
        }
        else{
            snakeCase += upper;
        }
    } 
    // Prevents the output to starts with underscore
    if(snakeCase.startsWith("_")){
        snakeCase = snakeCase.slice(1)
    }
    
    return snakeCase;
}

camel();

// Faces - Works
function faces(){
    let user_input4 = window.prompt("Enter a face: ");
    console.log(convertToFaces(user_input4));

}

function convertToFaces(userInput){
    let emojized = userInput.replace(":)", "🙂").replace(":(", "🙁");
    return emojized
}

faces();

// Extensions - Minor corrections
function extensionsJS(){
    let user_input5 = window.prompt("Filename: ");
    checkExtension(user_input5);

}

function checkExtension(userInput){
    const imgExtensions = ["gif", "jpg", "jpeg", "png"]
    const docExtensions = ["pdf", "txt", "zip"]

    let checkingExtension = userInput.trim().toLowerCase().split(".");

    if(checkingExtension.length >  1){   // ai assisted - checkingExtension.length is the proper way to check len, not length(checkingExtension)
        let checkedExtension = checkingExtension[checkingExtension.length - 1]; //ai assisted - not checkingExtension[-1]

        // ai - Checks if the file has extension
        if(checkedExtension.length <= 1){ 
            console.log("application/octet-stream");
            return
        } 

        if(imgExtensions.includes(checkedExtension)){
            if(checkedExtension === "jpg"){
                console.log("image/jpeg");
            }
            else{
                console.log(`image/${checkedExtension}`);
            }
        }
        else if(docExtensions.includes(checkedExtension)){
            if(checkingExtension === "txt"){
                console.log("text/plain");
            }
            else{
                console.log(`application/${checkedExtension}`);
            }
        }
        else{
            console.log("application/octet-stream");
        }
    }
    else{
        console.log("application/octet-stream");
    }
}

extensionsJS();

// Fuel - Works - Minor Corrections

function fuelJs(){
    while(true){
        let user_input6 = window.prompt("Fraction: ");
        
        if(user_input6.includes("/")){
            let [x, y] = user_input6.split("/");  // multi assignment should be encased with square brackets
            
            // assignment as number should be here
            x = Number(x); 
            y = Number(y);

            if(Number.isInteger(x) && Number.isInteger(y)){  // my - x.isInteger() && y.isInteger()
                // Not here dumbass
                try{
                    let result = Math.round(x / y * 100);

                    if(result <= 1){
                        console.log("E");
                        break;
                    }
                    else if(result >= 95){
                        console.log("F");
                        break;
                    }
                    else{
                        console.log(`${result}%`);
                        break;
                    }
                }
                catch(err){
                    let zeroDevisionError = Number.isInFinite(result);
                    console.log(`${zeroDevisionError}, Cant divide with a Zero as a divisor!`);
                }
            }
            else{
                continue;
            }
        }
        else{
            continue;
        }
    }
}

fuelJs();

// Interpreter - Doesnt Work, JS doesnt have Python's Qols
/*  My Code
function interpretJS(){
    let user_input7 = window.prompt("Expression: ");
    interpreter(user_input7);
}

function interpreter(userInput){
    const operators = ["+", "-", "*", "/"];
    let [x, y, z] = userInput.split();
    x = Number(x);
    z = Number(z);

    if(operators.includes(y)){  
        if(y === "+"){
            console.log((x + z).toFixed(2));
        }
        else if( y === "-"){
            console.log((x - z).toFixed(2));
        }
        else if( y === "*"){
            console.log((x * z).toFixed(2));
        }
        else if( y === "/"){
            console.log((x / z).toFixed(2));
        }
        else{
            console.log("Invalid Expression")
        }
    }
    else{
        console.log("Not a number")
    }
}

interpretJS(); */

function interpretJS(){
    let user_input7 = window.prompt("Expression: ");
    interpreter(user_input7);
}
// AI 
function interpreter(userInput) {
    const operators = ["+", "-", "*", "/"];
    let operatorFound = null;

    // Find the operator
    for (let op of operators) {
        if (userInput.includes(op)) {
            operatorFound = op;
            break;
        }
    }

    // If no operator found, it's invalid
    if (!operatorFound) {
        console.log("Invalid Expression");
        return;
    }

    // Split the input based on the operator
    let [x, z] = userInput.split(operatorFound);
    x = Number(x);
    z = Number(z);

    // Check if both parts are valid numbers
    if (Number.isNaN(x) || Number.isNaN(z)) {  // isNaN, means is a number?
        console.log("Not a number");
        return;
    }

    // Perform the operation
    if (operatorFound === "+") {
        console.log((x + z).toFixed(2));
    } else if (operatorFound === "-") {
        console.log((x - z).toFixed(2));
    } else if (operatorFound === "*") {
        console.log((x * z).toFixed(2));
    } else if (operatorFound === "/") {
        console.log((x / z).toFixed(2));
    }
}

interpretJS();

// Meal - Minor minor corrections from ai 
function mealJS(){
    let user_input8 = window.prompt("What time is it?");
    let time = checkMealtime(user_input8);

    if(time < 8.0){
        console.log("Breakfast");
    }
    else if(time >= 8.0 && time < 14.0){  // 8.0 <= time < 14.0 - JS doesnt support chained comparisons
        console.log("Lunch");
    }
    else if(time >= 14.0 && time < 19.0){ // 14.0 <= time < 19.0
        console.log("Dinner");
    }
    else{
        console.log("Late Night Snack");
    }
}

function checkMealtime(userInput){
    let [hrs, mins] = userInput.split(":").map(Number);  // My - userInput.map(int, userInput.split(:)) which is wrong in JS context
    return hrs + mins / 60;
}

mealJS();

//Indoor - Works

function indoorJS(){
    let user_input9 = window.prompt("Enter something");
    console.log(user_input9.toLowerCase());
}

indoorJS();

// Nutrition
function nutritionJs(){
    let user_input10 = window.prompt("Enter a fruit name:");
    checkNutrition(user_input10);

}
function checkNutrition(userInput){
    const fruits = {
        "apple": 130, "avocado": 50, "banana": 110, "cantaloupe": 50,
        "grapefruit": 60, "grapes": 90, " honeydew melon": 50,
        "kiwifruit": 90, "lemon": 15, "lime": 20, "nectarine": 60,
        "orange": 80, "peach": 60, "pear": 100, "pineapple": 50,
        "plums": 70, "strawberries": 50, "sweet cherries": 100,
        "tangerine": 50, "watermelon": 80
        };

    userInput = userInput.toLowerCase();
    if(userInput in fruits){    // .includes() if for strings or array not obj, so we can use "in" here.
        console.log(`Calories: ${fruits[userInput]}`);
    }
}

nutritionJs();

// Playback - Works
function playbackJS(){
    let user_input11 = window.prompt("").replaceAll(" ", "...");
    console.log(user_input11);
}
playbackJS();

// Taqueria
function taqueriaJS(){
    const menu = {
        "Baja Taco": 4.25,
        "Burrito": 7.50,
        "Bowl": 8.50,
        "Nachos": 11.00,
        "Quesadilla": 8.50,
        "Super Burrito": 8.50,
        "Super Quesadilla": 9.50,
        "Taco": 3.00,
        "Tortilla Salad": 8.00
    }

    totalPrice = 0;
   
    let run = true;
    while(run){
        try{
            let user_input12 = window.prompt("What is your order? ")
            if(user_input12 in menu){
                totalPrice += menu[user_input12];
                console.log(`Total: ${totalPrice.toFixed(2)}`);
            }
            else if(user_input12 === "ok"){
                run = false;
            }
            else{
                console.log("Items is not on the menu");
            }
        }
        catch(err){
            console.log("Items is not on the menu");
        }
    }
}
taqueriaJS();

// Game

// My Code - didnt work
/*
function gameJs(){
    while(true){
        try{
            let user_input13 = window.prompt("Level:");
            user_input13 = Number(user_input13);
            if(user_input13 <= 0){
                continue
            }
            let targetNum = Math.random(1, user_input13);

            while(true){
                try{
                    let userGuess = window.prompt("Guess: ");
                    userGuess = Number(userGuess);

                    if(userGuess < targetNum){
                        console.log("Too small");
                    }
                    else if(userGuess > targetNum){
                        console.log("Too large");
                    }
                    else if(userGuess === targetNum){
                        console.log("Just right");
                        break;
                    }
                }
                catch(err){
                    if(Number.isNaN(user_input13) || Number.isNaN(userGuess)){
                        continue;
                    }
                }
            }
        }
        catch(err){
            if(Number.isNaN(user_input13) || Number.isNaN(userGuess)){
                continue;
            }
    }
}

gameJs(); */

// Ai - Here it doesnt user try catch
function gameJs() {
    while (true) {
        let user_input13 = Number(window.prompt("Level:")); // I guess we can do that too in JS, instead of rewriting and assigning the variable much later
        if (Number.isNaN(user_input13) || user_input13 <= 0) { // should have put the Nan after the input
            continue;
        }

        let targetNum = Math.floor(Math.random() * user_input13) + 1;

        while (true) {
            let userGuess = Number(window.prompt("Guess:"));
            if (Number.isNaN(userGuess)) continue; // should have put the Nan after the input, we can also do a oneliner in JS too?

            if (userGuess < targetNum) {
                console.log("Too small");
            } else if (userGuess > targetNum) {
                console.log("Too large");
            } else {
                console.log("Just right");
                return; // end the game
            }
        }
    }
}

gameJs();

// Tip - Works 100%

function tipJS(){
    let dollars = tipCalcu.dollarToFloat(Number(window.prompt("How much was the meal? ")));
    let percent = tipCalcu.percentageToFloat(Number(window.prompt("What percentage would you like to tip? ")));
    console.log(`Leave ${(dollars * percent).toFixed(2)}`)
}

//Method
const tipCalcu = {
    dollarToFloat: function(userInput){
        let floated = Math.floor(userInput);
        return floated
    },

    percentageToFloat: function(userInput){
        let floated = Math.floor(userInput);
        return floated
    }
}

/* Function
function dollarToFloat(userInput){
    let floated = Math.floor(userInput.replace("$", ""));
    return floated
}

function percentageToFloat(userInput){
    let floated = Math.floor(userInput.replace("%", ""));
    return floated
}
    */
tipJS();