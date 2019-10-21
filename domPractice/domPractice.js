const container = document.querySelector("#container");

const para = document.createElement("div");
para.textContent = "Hey I'm red!";
para.style.color = "red";

const heading = document.createElement("h3");
heading.textContent = "I'm a blue h3!";
heading.style.color = "blue";

const blackDiv = document.createElement("div");
blackDiv.style.backgroundColor = "pink";
blackDiv.style.borderColor = "black";
blackDiv.style.borderWidth = "thick";

const headingInDiv = document.createElement("h1");
headingInDiv.textContent = "I'm in a div!";

const otherPara = document.createElement("p");
otherPara.textContent = "Lol me2";

blackDiv.appendChild(headingInDiv);
blackDiv.appendChild(otherPara);

container.appendChild(para);
container.appendChild(heading);
container.appendChild(blackDiv);

btn.addEventListener('click', function(e){
    console.log(e.target);
  })
  
  