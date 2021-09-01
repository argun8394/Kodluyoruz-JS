// let formDOM = document.querySelector("#userForm");
// formDOM.addEventListener("submit", formSubmit);

// function formSubmit() {
//     event.preventDefault(); //default işlemi engellemiş olduk
//     console.log("işlem gerçekleştirildi")

//     let inputNameDOM = document.querySelector("#score");
//     console.log(inputNameDOM.value)
//     localStorage.setItem("input", inputNameDOM.value)
// }


// ***********FETCH***********
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

// ****************AXİOS**********************
// import axios from 'axios';
// 13.9 K(gzipped: 4.9 K)
// async function getData() {
//     const { data: post1 } =
//     await axios('https://jsonplaceholder.typicode.com/posts/1');


//     const { data: post2 } =
//     await axios('https://jsonplaceholder.typicode.com/posts/1');

//     const { data: post3 } =
//     await axios('https://jsonplaceholder.typicode.com/posts/1');


//     console.log("post1", post1);
//     console.log("post2", post2);
//     console.log("post3", post3);

// }

// getData();

//***************PROMİSE******************************* */

// const getComments = (number) => {
//     return new Promise((resolve, reject) => {
//         if (number === 1) {
//             resolve({ text: "hello" });
//         }
//         reject("problem is ..........");
//     });
// };


// getComments(2).then((data) => console.log(data)) //doğruysa .then //hatalıysa .catch çalışır
//     .catch((err) => console.log(err)); //hatalıysa .catch çalışır


const getPost1 = () => {
    return new Promise(async(resolve, reject) => {
        const { data } = await axios('https://jsonplaceholder.typicode.com/posts/1');
        // resolve(data);
        reject("sorun oluştu")
    })
};

const getPost2 = (post2) => {
    return new Promise(async(resolve, reject) => {
        const { data } = await axios('https://jsonplaceholder.typicode.com/posts/1');
        // resolve(data);
        reject("bir sorun daha oluştu")
    })
};

(async() => {
    try {
        const post1 = await getPost1();
        const post2 = await getPost2(1);
        console.log(post1);
        console.log(post2);
    } catch (err) {
        console.log(err)
    }
})();