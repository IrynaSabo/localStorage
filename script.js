let userInput=document.getElementById("userInput");
let sparaButton=document.getElementById("spara_button");
let clearButton=document.getElementById("clear_button");
let locStor=document.getElementById("locStor");
let sparatText=document.getElementById("sparat_text");

if(localStorage.length!==0)
{
    sparatText.innerText=localStorage.getItem("name");
    locStor.style.display="block";}

sparaButton.addEventListener("click",function()
 { 
   if(userInput.value!=="")
    {
        localStorage.setItem("name",userInput.value);
        userInput.value="";
        locStor.style.display="block"

        console.log(localStorage);
     }   
  })     
 
clearButton.addEventListener("click",function()
{
  localStorage.clear();
  locStor.style.display="none";  
})
console.log(localStorage);