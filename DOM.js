let greeting = document.querySelector("#greeting");

greeting.addEventListener("mouseover", domClick)

function domClick() {
    console.log("tıklandı")
    this.style.color == "red" ? this.style.color = "blue" : this.style.color = "red";
}