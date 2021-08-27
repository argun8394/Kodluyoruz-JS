let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit() {
    event.preventDefault(); //default işlemi engellemiş olduk
    console.log("işlem gerçekleştirildi")
}