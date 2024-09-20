let text = document.querySelector("#text");
let displayText = document.querySelector("#displayText");
function charCount(){
    displayText.innerHTML = `<h3> Character Count : </h3> <h3 class="value">${text.value.length}</h3> `;
}
text.onkeyup = () => {
    charCount();
}