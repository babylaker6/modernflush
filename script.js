"use strict";

async function helloWorld() {
  const url = `/.netlify/functions/TestFunction`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

console.log(helloWorld());
