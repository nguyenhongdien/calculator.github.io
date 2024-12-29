const workSpace = document.getElementById("workSpace");
const calculator_container = document.getElementById("calculator_container");
const grpButt = [...document.getElementsByClassName("grpButt")];
const screen = document.getElementById("screen");

const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn0 = document.getElementById("btn0");
const btnDivide = document.getElementById("btn/");
const btnTimes = document.getElementById("btn*");
const btnMinus = document.getElementById("btn-");
const btnPlus = document.getElementById("btn+");
const btnDecimal = document.getElementById("btn.");
const btnDel = document.getElementById("btnDel");
const btnClean = document.getElementById("btnClean");
const btnTheme1 = document.getElementById("btnTheme1");
const btnTheme2 = document.getElementById("btnTheme2");
const btnResult = document.getElementById("btn=");


let isEnter = false;

let tempNum1;
let tempNum2;
let tempOperation;

let isNum1 = true;

let isDecimaled = false;

function isEntered(){
    console.log(isEnter);
    if (!isEnter){
        workSpace.style.fontSize = "40px";
        workSpace.textContent = ``;
        isEnter = true;
    }
}

function add0(){
    isEntered();
    workSpace.textContent = `${workSpace.textContent}0`;
}

function add1(){
    isEntered();
    workSpace.textContent = `${workSpace.textContent}1`;
}

function add2(){
    isEntered();
    workSpace.textContent = `${workSpace.textContent}2`;
}

function add3(){
    isEntered();
    workSpace.textContent = `${workSpace.textContent}3`;
}

function add4(){
    isEntered();
    workSpace.textContent = `${workSpace.textContent}4`;
}

function add5(){
    isEntered();
    workSpace.textContent = `${workSpace.textContent}5`;
}

function add6(){
    isEntered();
    workSpace.textContent = `${workSpace.textContent}6`;
}

function add7(){
    isEntered();
    workSpace.textContent = `${workSpace.textContent}7`;
}

function add8(){
    isEntered();
    workSpace.textContent = `${workSpace.textContent}8`;
}

function add9(){
    isEntered();
    workSpace.textContent = `${workSpace.textContent}9`;
}

function getResult(){
    if(isNum1){
        tempNum1 = Number(workSpace.textContent);
        workSpace.textContent = calculate();
        workSpace.style.fontSize = "50px";
        console.log(workSpace.textContent);
        // isEnter = false;
    } else {
        tempNum2 = Number(workSpace.textContent);
        if(tempNum2 == ""){
            tempNum2 = tempNum1;
        }
        workSpace.textContent = calculate();
        console.log(`Num 1: ${tempNum1}`);
        console.log(`Num 2: ${tempNum2}`);
        console.log(`Operation: ${tempOperation}`);
        workSpace.style.fontSize = "50px";
    }
    tempNum1 = Number(workSpace.textContent);
    tempOperation = "";
    tempNum2 = "";
    isNum1 = true;
    isEnter = false;
    isDecimaled = false;
}

function calculate(){
    switch(tempOperation){
        case "+":
            return tempNum1 + tempNum2;
            break;
        case "-":
            return tempNum1 - tempNum2;
            break;
        case "*":
            return tempNum1 * tempNum2;
            break;
        case "/":
            return tempNum1 / tempNum2;
            break;
        default:
            return tempNum1;
    }
}

function addDivide(){
    if(isNum1){
        tempNum1 = Number(workSpace.textContent);
        console.log(tempNum1);

        tempOperation = "/";
        isNum1 = false;
        isEnter = false;
        isDecimaled = false;
    } else if (!isNum1 && !isEnter){
        tempOperation = "/";
    } else if (!isNum1 && isEnter){
        getResult();
        tempOperation = "/";
        isEnter = false;
        isNum1 = false;
        isDecimaled = false;
        workSpace.style.fontSize = "40px";
    }
    
}

function addTimes(){
    if(isNum1){
        tempNum1 = Number(workSpace.textContent);
        console.log(tempNum1);

        tempOperation = "*";
        isNum1 = false;
        isEnter = false;
        isDecimaled = false;
    } else if (!isNum1 && !isEnter){
        tempOperation = "*";
    } else if (!isNum1 && isEnter){
        getResult();
        tempOperation = "*";
        isEnter = false;
        isNum1 = false;
        isDecimaled = false;
        workSpace.style.fontSize = "40px";
    }
    
}

function addMinus(){
    if(isNum1){
        tempNum1 = Number(workSpace.textContent);
        console.log(tempNum1);

        tempOperation = "-";
        isNum1 = false;
        isEnter = false;
        isDecimaled = false;
    } else if (!isNum1 && !isEnter){
        tempOperation = "-";
    } else if (!isNum1 && isEnter){
        getResult();
        tempOperation = "-";
        isEnter = false;
        isNum1 = false;
        isDecimaled = false;
        workSpace.style.fontSize = "40px";
    }
    
}

function addPlus(){
    if(isNum1){
        tempNum1 = Number(workSpace.textContent);
        console.log(tempNum1);

        tempOperation = "+";
        isNum1 = false;
        isEnter = false;
        isDecimaled = false;
    } else if (!isNum1 && !isEnter){
        tempOperation = "+";
    } else if (!isNum1 && isEnter){
        getResult();
        tempOperation = "+";
        isEnter = false;
        isNum1 = false;
        isDecimaled = false;
        workSpace.style.fontSize = "40px";
    }
    
}

function deletes(){
    if (workSpace.textContent != "0"){
        workSpace.textContent = workSpace.textContent.substring(0, workSpace.textContent.length - 1);
    }
    if (workSpace.textContent == ""){
        workSpace.textContent = 0
        isEnter = false;
    }
    if(!workSpace.textContent.includes(".")){
        isDecimaled = false;
    }
        
}

function clean(){
    tempNum1 = "";
    tempNum2 = "";
    tempOperation = "";
    workSpace.textContent = "0";

    isNum1 = true;
    isEnter = false;
    isDecimaled = false;

    workSpace.style.fontSize = "40px";
}

function addDecimal(){
    if (!isDecimaled){
        workSpace.textContent = `${workSpace.textContent}.`;
        isDecimaled = true;
        isEnter = true;
    }
}

function activateTheme1(){
    calculator_container.style.backgroundColor = "rgb(255, 255, 255)";
    grpButt.forEach((element) => {
        element.style.border = "solid rgb(255, 255, 255) 1px";
        element.style.backgroundColor = "rgb(243, 243, 243)";
        element.style.color = "rgb(0, 0, 0)";

        element.removeEventListener("mouseenter", addHoverTheme1.bind(null, element));
        element.removeEventListener("mouseenter", addHoverTheme2.bind(null, element));
        element.removeEventListener("mouseleave", removeHoverTheme1.bind(null, element));
        element.removeEventListener("mouseleave", removeHoverTheme2.bind(null, element));
        element.addEventListener("mouseenter", addHoverTheme1.bind(null, element));
        element.addEventListener("mouseleave", removeHoverTheme1.bind(null, element));

    });
    screen.style.backgroundColor = "rgb(255, 255, 255)";
    screen.style.color = "rgb(0, 0, 0)";
    screen.style.border = "solid gray 1px";
}

function addHoverTheme1(element){
    element.style.border = "solid black 1px";
}

function removeHoverTheme1(element){
    element.style.border = "solid white 1px";
}

function activateTheme2(){
    calculator_container.style.backgroundColor = "rgb(12, 29, 119)";
    grpButt.forEach((element) => {
        element.style.border = "solid rgb(12, 29, 119) 1px";
        element.style.backgroundColor = "rgb(49, 75, 142)";
        element.style.color = "rgb(255, 255, 255)";

        element.removeEventListener("mouseenter", addHoverTheme1.bind(null, element));
        element.removeEventListener("mouseenter", addHoverTheme2.bind(null, element));
        element.removeEventListener("mouseleave", removeHoverTheme1.bind(null, element));
        element.removeEventListener("mouseleave", removeHoverTheme2.bind(null, element));
        element.addEventListener("mouseenter", addHoverTheme2.bind(null, element));
        element.addEventListener("mouseleave", removeHoverTheme2.bind(null, element));

    });
    screen.style.backgroundColor = "rgb(12, 29, 119)";
    screen.style.color = "rgb(255, 255, 255)";
    screen.style.border = "solid rgb(12, 29, 119) 1px";
}

function addHoverTheme2(element){
    element.style.border = "solid white 1px";
}

function removeHoverTheme2(element){
    element.style.border = "solid rgb(12, 29, 119) 1px";
}

btn0.addEventListener("click", add0);
btn1.addEventListener("click", add1);
btn2.addEventListener("click", add2);
btn3.addEventListener("click", add3);
btn4.addEventListener("click", add4);
btn5.addEventListener("click", add5);
btn6.addEventListener("click", add6);
btn7.addEventListener("click", add7);
btn8.addEventListener("click", add8);
btn9.addEventListener("click", add9);
btnResult.addEventListener("click", getResult);
btnDivide.addEventListener("click", addDivide);
btnTimes.addEventListener("click", addTimes);
btnMinus.addEventListener("click", addMinus);
btnPlus.addEventListener("click", addPlus);
btnDel.addEventListener("click", deletes);
btnClean.addEventListener("click", clean);
btnDecimal.addEventListener("click", addDecimal);
btnTheme1.addEventListener("click", activateTheme1);
btnTheme2.addEventListener("click", activateTheme2);