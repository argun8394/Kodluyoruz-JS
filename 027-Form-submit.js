let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit() {
    event.preventDefault(); //default işlemi engellemiş olduk
    console.log("işlem gerçekleştirildi")

    let inputNameDOM = document.querySelector("#score");
    console.log(inputNameDOM.value)
    localStorage.setItem("input", inputNameDOM.value)
}