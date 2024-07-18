//get the values from the user//

function getValues(){
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse our input into integers
   //  "1" + "1" = "11"; //this in converted into strings
   // 1 + 1 = 2  // need to be an integer

   // startValue = "1"
    startValue = parseInt(startValue);
    // startValue = 1
    endValue = parseInt(endValue);

    //!True = False (!exclamation = Not)
    //Check to see if they are in fact integers
    // True AND TRUE
    // FALSE AND TRUE = FALSE
    //it is called truthy = program term 

    if(Number.isInteger(startValue) && Number.isInteger(endValue) ){
        //do something (true condition)
        //generate the numbers 
        let numbers=generateNumbers(startValue, endValue);//
        //displays the numbers 
        displayNumbers(numbers);//
    }
    else{
        //do something (false condition)
        alert("Only integers are allowed. Please correct your input.")
    }
}


// startValue = sValue (from generate numbers)
// let sValue = startValue
// sValue, eValue = paramenter we are passing values

//generate numbers
function generateNumbers(sValue, eValue){
    //can hold multiple numbers- arrays
    let numbers = [];

    //for loop have block section stay in {code blocks} one value to another  i=iterarer ++_=add one when it loops
    for(i = sValue; i<= eValue; i++){
        numbers.push(i);
    }

    return numbers;  // goes back to generate Numbers (startValue, end Value);
}

   //display numbers // i = index
    function displayNumbers(numbers){

        let templateCols = "";

    //Template to build 
    //check for if the number is even
        //"<div></div>"
        //loop over an array = assign == compare values
        for(let index=0; index < numbers.length; index++){
            
            let className = "";

            if(numbers[index] % 2 == 0){
                className = "even";
            }
            else{
                className = "odd";
            }

            templateCols += `<div class="${className}">${numbers[index]}</div>`;    //` code variables [index] specific position
        }

        

        document.getElementById("resultsData").innerHTML = templateCols;
    }
