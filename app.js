
function limite_textarea(valor) {
    quant = 140;
    total = valor.length;
    if(total <= quant) {
        resto = quant - total;
        document.getElementById("cont").innerHTML = resto;
    } else {
        document.getElementById("message").value = valor.substr(0,quant);
    }
    // let userMessage= document.getElementById("message").value;
    // console.log(userMessage);
    // if(userMessage.lenght !== 0){
    // document.getElementById("button1").disabled=false;
    // }
    // else{
    //     document.getElementById("button1").disabled=true;
    // }
}
function printText(){

let node = document.createElement("li") 
let userMessage = document.getElementById("message").value;
let textnode= document.createTextNode(userMessage);
node.appendChild(textnode);
document.getElementById("tweets").appendChild(node);
document.getElementById("textForm").reset(); 

}   