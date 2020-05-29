/* var F = (num - 32) * .556;
var C = (num * 1.8) + 32;
*/

document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("I am clcking a button")
    var temperature = document.getElementById('temperature').value
    highTemp = parseInt((temperature) - "32") * ".556";
    document.getElementById("result").innerText=highTemp
}
)

// copied this bit from caitlin

function convertTemperature() {
let farenheitTemp = document.getElementById("F").checked
let celsiusTemp = document.getElementById("C").checked
let typedTemperature = document.getElementById("temperature").checked
if (farenheitTemp == true) {
    result = (typedTemperature - "32") * ".556";
} else if (celsiusTemp == true) {
    result = (typedTemperature * "1.8") + "32";
} 
}
