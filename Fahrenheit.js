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


    let celsius = (Fharenheit - 32) * (5/9);


  CelsiusOutput.value = celsius;


}
