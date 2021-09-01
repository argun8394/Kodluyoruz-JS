const users=["Gustavo","Pelkas","Rossi","Szalai"]

/*
push
map
find
filter
some
every
includes
*/

//push 

// users.push("Enner");
// console.log(users);


//map 

// users.map((item) => {
//     console.log(item)
// })

const names=[{name:"Gustavo"},{name:"Pelkas"},{name:"Szalai"}];

// names.map((item) => {
//     console.log(item);
//     console.log(item.name);
// });

//find 

const result = names.find((item) => item.name==="Pelkas");
console.log(result)