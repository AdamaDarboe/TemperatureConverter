"use strict"



const FahrenheitInput = document.getElementById(FahrenheitInput);
const calculateButton = document.getElementById(calculateButton);
const CelsiusOutput = document. getElementById(CelsiusOutput); 

window.onload = init; 

function init(){
calculateButton.onclick = oncalculateButtonClicked; 
}

function oncalculateButtonClicked(){
    let fahrenheit = Number(FahrenheitInput.value);


    let celsius = (celsius + 32) * (9/5);

  CelsiusOutput.value = celsius;

}
