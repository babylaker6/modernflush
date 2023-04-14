"use strict";

const testVar = document.querySelector(".divider");
// testVar.className
console.log(`${testVar.classList}`);
testVar.classList.add("divider.test");
console.log(`${testVar.classList}`);
testVar.classList.remove("divider");
console.log(`${testVar.classList}`);
console.log("test test test boom");
