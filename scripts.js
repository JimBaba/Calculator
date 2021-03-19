const screentext = document.getElementById("screenText")
console.log(screentext)


let result;
let screen = "";

function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function multiply(a,b){
    if(a == 0 || b == 0){
        return "That would destroy the world as we know it!"
    }
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(screen){
    for(let i = 0; i < screen.length; i++){
        if(screen[i] == "+"){
            let num1 = screen.slice(0,i);
            num1 = parseInt(num1); 
            let num2 = screen.slice(i+1, i.length);
            num2 = parseInt(num2);
            screentext.innerText = add(num1, num2);
        } else if(screen[i] == "-"){
            let num1 = screen.slice(0,i);
            num1 = parseInt(num1); 
            let num2 = screen.slice(i+1, i.length);
            num2 = parseInt(num2);
            screentext.innerText = sub(num1, num2);
        } else if(screen[i] == "*"){
            let num1 = screen.slice(0,i);
            num1 = parseInt(num1); 
            let num2 = screen.slice(i+1, i.length);
            num2 = parseInt(num2);
            screentext.innerText = multiply(num1, num2);
        } else if(screen[i] == "/"){
            let num1 = screen.slice(0,i);
            num1 = parseInt(num1); 
            let num2 = screen.slice(i+1, i.length);
            num2 = parseInt(num2);
            screentext.innerText = divide(num1, num2);
        }
    }

}

function reset(){
    // wenn Del gedrückt wird, screen und variablen löschen
    console.log(screen)
    screentext.innerText = "";
    screen = "";
    console.log(screen);
    return screen;
    
}  

function drawOnScreen(text){
    screen += text;
    screentext.innerText += text; 
    return screen;
    // return screentext;
    // wenn button gedrückt wird, zahl in screen schreiben
}



