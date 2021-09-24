let clickText = document.getElementsByClassName("item-text");
let dispText = document.getElementById("display-text-hidden");
console.log(dispText);

console.log(clickText.length);

for (let i = 0; i < clickText.length; i++) {
  clickText[i].addEventListener("click", function () {
    dispText.innerHTML = clickText[i].innerHTML;
    console.log(clickText[i].innerHTML);
    dispText.style.display = "block";
  });
}
