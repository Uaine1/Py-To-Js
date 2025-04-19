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