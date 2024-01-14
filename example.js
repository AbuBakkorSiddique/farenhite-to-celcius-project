  /*   const dataInputs =  toString(document.getElementById("userInput"));
const Output = document.getElementById("output");



function getResult() {
    Output.innerHTML = dataInputs.value;
}
    */
   


  
const Output = document.getElementById("output") ;



function getResult() {

const dataInpusts= document.getElementById("userInput").value ; 
return   (5/9) * (dataInpusts-32) ;
 



}

function Celsious() {

    Output.innerHTML= getResult() + " "  +"Celcious" ;
}

 


