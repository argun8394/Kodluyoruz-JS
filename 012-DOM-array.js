let firstChild = document.querySelector("ul#list>li:first-child");

console.log(firstChild);

firstChild.innerHTML = "değiştirildi"

let lastChild = document.querySelector("ul#list>li:last-Child");

lastChild.innerHTML = "lastChild değiştirlidi"

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li")

liDOM.innerHTML = "oluşturulan element";

// ulDOM.append(liDOM.lastChild);//ens sona ekleme

ulDOM.prepend(liDOM); //başa ekleme