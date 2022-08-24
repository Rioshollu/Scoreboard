const plus = document.querySelector(".hbtn"),
minus = document.querySelector(".hbtn1"),
num = document.querySelector(".h-score"),
plus1 = document.querySelector(".gbtn"),
mins1 = document.querySelector(".gbtn1"),
numb = document.querySelector(".g-score");

let a = 0;
let b = 0;

plus.addEventListener("click", () => {
a++;
a = (a < 10) ? + a : a;
num.innerText = a;
console.log(a);
});

minus.addEventListener("click", () => {
if (a > 1) {
    a--;
    a = (a < 20) ? + a : a;
    num.innerText = a;
}
});
plus1.addEventListener("click", () => {
b++;
b = (b < 10) ? + b : b;
numb.innerText = b;
console.log(b);
});

mins1.addEventListener("click", () => {
if (b > 1) {
    b--;
    b = (b < 2) ? + b : b;
    numb.innerText = b;
}
});