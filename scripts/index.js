const breakRow = () => console.log("-----------------------------------------");

const sayHi = () => console.log("Hi");

sayHi();
breakRow();

const sayHello = name => console.log(`Hi ${name}`);

sayHello("Abdulaziz");
breakRow();

const greetin = (name = "Unkown") => console.log(`Hi ${name}`);

greetin("Abdulaziz");
greetin();
breakRow();

const welcome = (isRegistered) => {
    if(isRegistered == false){
        console.log("access denied");
        return ;
    }
    console.log("passed");
}

welcome(true);
welcome(false);
breakRow();

const multiplication = (number_1 , number_2) => console.log(`The result of ${number_1} * ${number_2} is ${number_1 * number_2} `) ;

multiplication(3,6);
breakRow();

const printDetails = (username , age , ...courses) => {
    console.log(`Hi, my name is ${username}, I'm ${age} years old. My courses are:`);
    for (const element of courses) {
        console.log(`\t-${element}`);
    }
}

printDetails("Abdulaziz",29,"HTML","CSS","JS","SQL");
breakRow();
breakRow();

setTimeout(function () {
    console.log("Hi after 3 seconds"); } 
    , 3000 );

const arrowSayHi = () => console.log("Hi");

arrowSayHi();
breakRow();

const arrowGreeting = name => console.log(`Hi ${name}`);

arrowGreeting("Abdulaziz");
breakRow();

const summation = (number_1 , number_2) => console.log(`The result of ${number_1} + ${number_2} is ${number_1 + number_2} `) ;

summation(10,33);
breakRow();

const function_1 = () => {
    const function_2 = () => {
        console.log("Hi from function_2");
    }
    console.log("Hi from function_1");
    function_2();
}

function_1();
breakRow();

const division = (x) => {
    return (y) => {
        if(y == 0){
            console.log(`The result of ${x} / ${y} is ${null}`);
            return;
        }
        console.log(`The result of ${x} / ${y} is ${x/y}`);
    };
}

division(10)(0);
division(10)(5);
breakRow();

const arrowSummation = (n1 , n2) => console.log(`The result of ${n1} + ${n2} is ${n1+n2}`);
const arrowSubtraction = (n1 , n2) => console.log(`The result of ${n1} - ${n2} is ${n1-n2}`);
const arrowDivision = (n1 , n2) => {
    if(n2 == 0){
            return null;
        }
        return console.log(`The result of ${n1} / ${n2} is ${n1/n2}`);
}
const arrowMultiplication = (n1 , n2) => console.log(`The result of ${n1} * ${n2} is ${n1*n2}`);
const calculator = (callback , n1 , n2) => {
    return callback(n1,n2);
}

calculator(arrowSummation , 10 , 5);
calculator(arrowSubtraction , 10 , 5);
calculator(arrowDivision , 10 , 5);
calculator(arrowMultiplication , 10 , 5);
breakRow();
