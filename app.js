function counter(valor) {
  limit = 140;
  total = valor.length;
  rest = limit - total;
  document.getElementById("cont").innerHTML = rest;

  let userMessage = document.getElementById("message").value;
  if (userMessage.length <= 120) {
    document.getElementById("cont").style.color = "black";
  }
  if (userMessage.length >= 120) {
    document.getElementById("cont").style.color = "orange";
  }
  if (userMessage.length >= 130) {
    document.getElementById('cont').style.color = 'red';
  }
}

document.querySelector('textarea').addEventListener('keydown', autosize);

function autosize() {
  let el = this;
  el.style.height = 'auto';
  el.style.height = el.scrollHeight + 'px';
}

document.getElementById("button1").addEventListener("mouseover", lockbutton);

function lockbutton() {
  let userMessage = document.getElementById("message").value;
  if (userMessage.length !== 0) {
    document.getElementById("button1").disabled = false;
  }
  else {
    document.getElementById("button1").disabled = true;
  }
  if (userMessage.length >= 140) {
    document.getElementById("button1").disabled = true;
  }
}

document.getElementById("button1").addEventListener('click', printtext);

function printtext() {
  let node1 = document.createElement("li");
  let node2 = document.createElement("p");
  let divPrint = document.createElement("divPrint");
  let userMessage = document.getElementById("message").value;
  node1.innerHTML = userMessage;
  node2.innerHTML = gettime();
  divPrint.appendChild(node1);
  divPrint.appendChild(node2);
  document.getElementById("tweets").appendChild(divPrint);

  document.getElementsByTagName("form")[0].reset();

  document.getElementById("cont").innerHTML = limit;
}

function gettime() {
  let data = new Date();
  let hora = data.getHours();
  let min = data.getMinutes();
  let horaStr = hora.toString();
  let minStr = min.toString();
  if (minStr.length < 2) {
    minStr = "0" + minStr;
  }
  let str_hora = horaStr + ':' + minStr;

  return str_hora;
}