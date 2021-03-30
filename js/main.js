"use strict";
// const keyZero = document.querySelector('.zero');
// const keyOne = document.querySelector('.one');
// const keyTwo = document.querySelector('.two');
// const keyThree = document.querySelector('.three');
// const keyFour = document.querySelector('.four');
// const keyFive = document.querySelector('.five');
// const keySix = document.querySelector('.six');
// const keySeven = document.querySelector('.seven');
// const keyEight = document.querySelector('.eight');
// const keyNine = document.querySelector('.nine');
const displayOperation = document.querySelector(".calc-operation");
const displayTyped = document.querySelector(".calc-typed");

const keyNums = document.querySelectorAll(".num");

const keyMultiply = document.querySelector(".multiply");
const keySubtract = document.querySelector(".subtract");
const keyAdd = document.querySelector(".add");
const keyDivide = document.querySelector(".divide");
const keyEqual = document.querySelector(".equal");

const keyClear = document.querySelector('.clr')

displayOperation.textContent = 0;

let st = ["", "", ""],
  position1 = true;

  let opert = '';
const displayCalculator = function (n, op) {

    opert += n + op;
    console.log(opert);
    displayOperation.textContent = opert;
};

const calculator = function (operator) {
  const answer =
    operator === "multiply"
      ? +st[0] * +st[1]
      : operator === "subtract"
      ? +st[0] - +st[1]
      : operator === "add"
      ? +st[0] + +st[1]
      : operator === "divide"
      ? +st[0] / +st[1]
      : "undefined";

    displayTyped.textContent = answer;
};

keyNums.forEach(function (num) {
  num.addEventListener("click", function () {
    if (position1) {
      st[0] !== 0? st[0] += num.textContent : st[0] = num.textContent;
      //1. Reqemi yazdirmaq.
      displayTyped.textContent = st[0];
      console.log(st);
    } else {
      st[1] += num.textContent;
      //2. Reqemi yazdirmaq.
      displayTyped.textContent = st[1];
      console.log(st);
    }
  });
});

keyMultiply.addEventListener("click", function (e) {
  //Store`a funksiyanin adini godneririk
  st[2] = "multiply";

  //Ilk reqemi de ozune qatma;
  //Funksiyani ekrana yazdiririq.
  displayCalculator(st[0], "x");

  position1 = false;
});

keySubtract.addEventListener("click", function (e) {
  st[2] = "subtract";

  //Ilk reqemi de ozune qatma;
  //Funksiyani ekrana yazdiririq.
  displayCalculator(st[0], "-");

  position1 = false;
});

keyAdd.addEventListener("click", function (e) {
  st[2] = "add";

  //Ilk reqemi de ozune qatma;
  //Funksiyani ekrana yazdiririq.
  displayCalculator(st[0], "+");

  position1 = false;
});

keyDivide.addEventListener("click", function (e) {
  st[2] = "divide";

  //Ilk reqemi de ozune qatma;
  //Funksiyani ekrana yazdiririq.
  displayCalculator(st[0], "/");

  position1 = false;
});

keyEqual.addEventListener("click", function () {
  // Funksiyalara deyeri atmaq lazimdi;
  calculator(st[2]);

  // Cavabi ekrana yazdirmaq
    displayCalculator(st[1],'=');
  // Reset
  position1 = true;
  st = ["", ""];
});


keyClear.addEventListener('click',function(){
    st = ['','',''];
    opert = '';
    displayOperation.textContent = 0;
    displayTyped.textContent = ''
})