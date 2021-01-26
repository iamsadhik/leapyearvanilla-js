var button=document.querySelector("#btn");
var inpt=document.querySelector("#input");
var outPut=document.querySelector("#output");

button.addEventListener("click",clickHandler)

function clickHandler(){
    var userInput=inpt.value;
    if(userInput==="")
    {
        outPut.innerText= "Please enter any year to check 🙂"
    }
    else
    if(isNaN(userInput))
    {
        outPut.innerText= "Enter in specified format 🙂"
    }
    else
    if(userInput %4===0)
    {
        outPut.innerText= userInput 
        + " is a leap year"
    }
    else
    {
       outPut.innerText=userInput + " is not a leap year"
    }
}