



let textNum = 3;

document.getElementById('button-add').addEventListener("click", function () {

  textNum += 1;

  let textDiv = document.querySelector('.item-text-div');
  let newText = document.createElement('h3');

  textDiv.appendChild(newText);

  textId = document.createAttribute('id');
  textId.value = 'item';

  newText.setAttributeNode(textId);

  let spanElement = document.createElement('span');
  newText.appendChild(spanElement);

  let spanClass = document.createAttribute('class');
  spanClass.value = `item-text item${textNum}`;

  spanElement.setAttributeNode(spanClass);

  spanElement.innerHTML = `Hello World ${textNum}`;

  console.log(spanElement);


})

let clickText = document.getElementsByClassName("item-text");
let dispText = document.getElementById("display-text-hidden");


for (let i = 0; i < clickText.length; i++) {
  clickText[i].addEventListener("click", function () {
    dispText.innerHTML = clickText[i].innerHTML;
    dispText.style.display = "block";
  });
}