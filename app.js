
function counter(valor) {
    limit = 140;
    total = valor.length;
        rest = limit - total;
        document.getElementById("cont").innerHTML = rest;
}

const test = document.getElementById("button1")
test.addEventListener("mouseover", lockbutton);
function lockbutton(){
     let userMessage= document.getElementById("message").value;
     console.log(userMessage);
     if(userMessage.length !== 0){
     document.getElementById("button1").disabled=false;
     }
     else{
         document.getElementById("button1").disabled=true;
     }
     if(userMessage.length >= 140){
     document.getElementById("button1").disabled=true;
     }
    }

    document.getElementById("button1").addEventListener('click', printText);
function printText(){
let node = document.createElement("li"); 
let userMessage = document.getElementById("message").value;
let textnode= document.createTextNode(userMessage);
node.appendChild(textnode);
document.getElementById("tweets").appendChild(node);
document.getElementById("textForm").reset(); 
}   