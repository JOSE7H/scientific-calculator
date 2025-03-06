
let lastResult = '';
let degreesMode= true;
 //variabkle to track shift key state

// Function to append characters to the display
function appendToDisplay(value) {
    if (value ==='PI'){
        document.getElementById('display').value += Math.PI.toFixed(8);
    } else
    {
    
    document.getElementById('display').value += value;}}

    //function to toggle between degrees and radian mode
    function toggleMode(){degreesMode= !degreesMode;
    updateModeButton();}

//function to update button mode
function updateModeButton(){
    
    const modeDisplay = document.getElementById('modeDisplay'); modeDisplay.textContent = degreesMode ?
    'Mode: Degrees': 'Mode: Radians';
}



// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

//display the wortking and result
let displayExpression=displayValue + '=' + result.toFixed(9);
document.getElementById('display').value=displayExpression;
//funtion to calculate


function calculate() {
    let displayValue = document.getElementById('display').value;

    try {
       //(degreesMode){
      //  displayValue = convertDegreesToRadians(displayValue)
       displayValue=displayValue.replace(/(\d+)!/g, function(match, num){
        return factorial(parseInt(num));
       });
      lastResult = eval(displayValue); 
       //display the wortking and result

       // store the result
       document.getElementById('display').value = lastResult;
       
    } catch (error) {
       document.getElementById('display').value = 'Error';
    }  }

//function to clear the last character from display
function clearLast(){
    let currentValue =document.getElementById('display').value;
    document.getElementById('display').value=currentValue.slice(0, -1);
}
//function to clear all character from display
function clearAll(){
    document.getElementById('display').value='';
}
//function convertDegreesToRadians(expession){
   // return expession.replace(/(\d+))degrees/g,function(match, num){return '(' +(num * Math.PI/180).toFixed(8) + ')';});} 
//display result with appropriate formatting
if (Number.isFinite(result)){
    document.getElementById('display').value=result.toFixed(9);
}else{
    document.getElementById('display').value='error';
}
//function to calculate factorial of a number
function factorial(num){
    if (num=== 0 || num === 1){
        return 1;
    }
    for (let i = num - 1; i >= 1; i--){
        num *= i;
    }
    return num;
}

//Fuction to recall the last computed
function recallLastResult(){
    document.getElementById('display').value += lastResult;
}