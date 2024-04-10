var decrease = document.getElementById("decrementBtn");
var increase = document.getElementById("incrementBtn");
var display = document.getElementById("displayValue");
var reset = document.getElementById("resetValue");

decrease.addEventListener("click", ()=>{
    const value = Number(display.innerText);
    if(value > 0)
        display.innerText = value -1;
    else
        alert("Negative value not allowed");
});
increase.addEventListener("click", ()=> {
    const value = Number(display.innerText);
    if(value >= 20)
        alert("You reached maximum !");
    else
       display.innerText = value + 1;
})
reset.addEventListener("click", ()=> {
    display.innerText = 0;
})