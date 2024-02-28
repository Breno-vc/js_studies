const display = document.getElementById("display");

function appendToDisplay(input){
display.value += input;
}

function clearDisplay(){
display.value = null;
}

function calculate(){
try{
display.value = eval(display.value);
if (eval(display.value == Infinity)){
display.textContent = "Can't divide by 0";
throw new Error ("Infinity");
}
}
catch(error){
  display.value =  "Error";
  }
}