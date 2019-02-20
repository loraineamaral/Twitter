
function counter(valor) {
    limit = 140;
    total = valor.length;
    if(total <= limit) {
        rest = limit - total;
        document.getElementById("cont").innerHTML = rest;
    } else {
        document.getElementById("message").value = valor.substr(0,limit);
    }
}

const test = document.getElementById("button1")
test.addEventListener("mouseover", lockbutton);
function lockbutton(){
     let userMessage= document.getElementById("message").value;
     console.log(userMessage);
     if(userMessage.lenght !== 0){
     document.getElementById("button1").disabled=false;
     }
     else{
         document.getElementById("button1").disabled=true;
     }
    }

document.getElementById("button1").addEventListener("onclick", printText);

function printText(){
let node = document.createElement("li"); 
let userMessage = document.getElementById("message").value;
let textnode= document.createTextNode(userMessage);
node.appendChild(textnode);
document.getElementById("tweets").appendChild(node);
document.getElementById("textForm").reset(); 
}   