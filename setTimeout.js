function funct1() {
    console.log("funct1 yazdırılır")

};

function funct2() {
    setTimeout(function() {
        console.log("funct2 yazdırılır")
    }, 3000)
};

function funct3() {
    console.log("funct3 yazdırılır")

}

funct1()
funct2()
funct3()