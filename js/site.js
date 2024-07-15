
function getValues(){
    alert("Hello App");
}

//get values from the screen and display them
/*To see what message user filled in within the box, it will copy it */
function getValues2(){
   let inputMessage = document.getElementById("message").value;
   let alertMessage = document.getElementById("alertMessages");
   alertMessage.innerText = inputMessage;
}
