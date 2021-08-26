// function funct1() {
//     console.log("funct1 yazdırılır")

// };

// function funct2() {
//     setTimeout(function() {
//         console.log("funct2 yazdırılır")
//     }, 3000)
// };

// function funct3() {
//     console.log("funct3 yazdırılır")

// }

// funct1()
// funct2()
// funct3()

// function printScreen1() {
//     console.log("İlk ekran çıktısı");
// }

// function printScreen2(callback1, callback2) {
//     setTimeout(function() {
//         callback1();
//         console.log("İkinci ekran çıktısı")
//         callback2();
//     }, 3000);
// }

// function printScreen3() {
//     console.log("Üçüncü ekran çıktısı");
// }


// printScreen2(printScreen1, printScreen3);

// function makeCounter() {
//     let count = 0;

//     return function() {
//         return count++;
//     };
// }

// let counter = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1
// alert(counter()); // 2

function factorial(n) {
    if (n <= 10 && n >= 1) {

        if (n == 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    } else {
        console.log("hatalı değer")
    }
}

const num = prompt('Enter a positive number: ');
const result = factorial(num);
console.log(result);