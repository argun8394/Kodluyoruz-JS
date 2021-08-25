let email = "kodluyoruz@kodluyoruz.org";
let firstName = "javaScript";
let lastName = "BOOTCAMP";


// console.log(email.length);
// console.log(firstName.length);
// console.log(lastName.length);


// console.log(firstName[3]);
// console.log(lastName[3]);
// console.log(email.charAt(5));
// console.log(lastName.charCodeAt(2));


// console.log(firstName.toUpperCase());
// console.log(lastName.toLowerCase());




// console.log(`
// $ { lastName[0].toUpperCase() }
// $ { lastName.slice(1).toLowerCase() }
// `);

// console.log(email.search("@"));
// console.log(email.search("-")); // olmayan değer için -1 döndürür

// console.log(email.indexOf("@"));
// console.log(email.indexOf("-"));


// console.log(email.slice(10 + 1)); //"@kodluyoruz.org"
// //@ ifadesini almak istemediğimiz için +1 kullandık.

// console.log(firstName.slice(1, 4)); //"ava"

// let domain = email.slice(email.search("@") + 1);
// console.log(domain);

// let domain = email.slice(email.indexOf("@") + 1);
// console.log(domain);

// console.log(email.includes("@"));
// console.log(email.includes("$"));

console.log(email.startsWith("@"));
console.log(email.endsWith("org"));