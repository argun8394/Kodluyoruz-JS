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

const names=[{name:"Gustavo",age:34},{name:"Pelkas",age:26},{name:"Szalai", age:24 }];

// names.map((item) => {
//     console.log(item);
//     console.log(item.name);
// });

//find 

// const result = names.find((item) => item.name==="Pelkas");
// console.log(result)

//filter 

// const filter = names.filter((item) =>item.name==="Szalai" &&item.age>20);
// console.log(filter);

//some

const some = names.some((item) =>item.age===23);
console.log(some);