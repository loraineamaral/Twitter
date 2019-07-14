document.querySelector("textarea").addEventListener("keydown", autoSize);
document.querySelector("textarea").addEventListener("input", counter);
document.querySelector("#button1").addEventListener("mouseover", lockButton);
document.querySelector("#button1").addEventListener("click", printText);

function counter() {
  let limit = 140;
  let userMessage = document.getElementById("message").value.length;
  rest = limit - userMessage;
  document.getElementById("cont").innerHTML = rest;
  if (userMessage <= 120) {
    document.getElementById("cont").style.color = "black";
  }
  if (userMessage >= 120) {
    document.getElementById("cont").style.color = "orange";
  }
  if (userMessage >= 130) {
    document.getElementById("cont").style.color = "red";
  }
}

function autoSize() {
  const fieldSize = this;
  fieldSize.style.height = "auto";
  fieldSize.style.height = fieldSize.scrollHeight + "px";
}

function lockButton() {
  let userMessage = document.getElementById("message").value.length;
  if (userMessage !== 0) {
    document.getElementById("button1").disabled = false;
  }
  else {
    document.getElementById("button1").disabled = true;
  }
  if (userMessage >= 141) {
    document.getElementById("button1").disabled = true;
  }
}

function printText() {
  let node1 = document.createElement("li");
  let node2 = document.createElement("p");
  let divPrint = document.createElement("divPrint");
  let userMessage = document.getElementById("message").value;
  node1.innerHTML = userMessage;
  node2.innerHTML = getTime();
  divPrint.appendChild(node1);
  divPrint.appendChild(node2);
  document.getElementById("tweets").appendChild(divPrint);
  document.getElementsByTagName("form")[0].reset();

  let numberOft = document.getElementById("tweets").childElementCount;
  document.getElementById("tweet-number").innerHTML = numberOft;
}

function getTime() {
  let tweetDate = new Date();
  let tweethour = tweetDate.getHours().toString();
  let tweetMin = tweetDate.getMinutes().toString();
  if (tweetMin.length < 2) {
    tweetMin = "0" + tweetMin;
  }
  let printHour = tweethour + ":" + tweetMin;
  return printHour;
}


