/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let indexWho = Math.floor(Math.random() * 4);
  let indexAction = Math.floor(Math.random() * 4);
  let indexWhat = Math.floor(Math.random() * 3);
  let indexWhen = Math.floor(Math.random() * 4);

  function reloadPage() {
    event.preventDefault();
    location.reload();
  }

  let html = `
      <p id="excuse" class="display-5"> ${who[indexWho]} ${action[indexAction]} ${what[indexWhat]} ${when[indexWhen]} </p>
      <button type="submit" class="btn btn-danger" id="reloadPage"> New Excuse </button>
  `;

  document.querySelector("#excuse").innerHTML = html;
  document.querySelector("#reloadPage").addEventListener("click", reloadPage);
};
