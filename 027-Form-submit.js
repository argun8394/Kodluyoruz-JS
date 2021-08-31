// let formDOM = document.querySelector("#userForm");
// formDOM.addEventListener("submit", formSubmit);

// function formSubmit() {
//     event.preventDefault(); //default işlemi engellemiş olduk
//     console.log("işlem gerçekleştirildi")

//     let inputNameDOM = document.querySelector("#score");
//     console.log(inputNameDOM.value)
//     localStorage.setItem("input", inputNameDOM.value)
// }

// async function getData() {
//     const post1 = await (
//         await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     ).json();


//     const post2 = await (
//         await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     ).json();


//     const post3 = await (
//         await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     ).json();


//     console.log("post1", post1);
//     console.log("post2", post2);
//     console.log("post3", post3);

// }

// getData();


async function getData() {
    const { data: post1 } =
    await axios('https://jsonplaceholder.typicode.com/posts/1');


    const { data: post2 } =
    await axios('https://jsonplaceholder.typicode.com/posts/1');

    const { data: post3 } =
    await axios('https://jsonplaceholder.typicode.com/posts/1');


    console.log("post1", post1);
    console.log("post2", post2);
    console.log("post3", post3);

}

getData();