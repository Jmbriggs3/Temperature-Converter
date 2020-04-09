const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input'); 

function roundNumber(num) { 
    return Math.round(num*100)/100;
}

function celciusConversion () {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32; 
    const kTemp = cTemp + 273.15; 
    fahrenheitInput.value = roundNumber(fTemp); 
    kelvinInput.value = roundNumber(kTemp);
} 

function fahrenheitConversion () { 
        const fTemp = parseFloat(fahrenheitInput.value); 
        const cTemp = (fTemp - 32) * (5/9); 
        const kTemp = (fTemp + 459.67) * (5/9); 
        celciusInput.value = roundNumber(cTemp); 
        kelvinInput.value = roundNumber(kTemp);
} 

function kelvinConversion () { 
        const kTemp = parseFloat(kelvinInput.value); 
        const cTemp = kTemp - 273.15; 
        const fTemp = (9/5) * (kTemp - 273) + 32; 
        celciusInput.value = roundNumber(cTemp); 
        fahrenheitInput.value = roundNumber(fTemp);
}

function main () {
celciusInput.addEventListener('input', celciusConversion); 
fahrenheitInput.addEventListener('input', fahrenheitConversion); 
kelvinInput.addEventListener('input', kelvinConversion); 
} 

main();



    



  
