//Mad Lib Script
//Event Listener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);

function buildMadLib() {
  //Input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let gerrund = document.getElementById("gerrund").value;
  let commonNoun = document.getElementById("common-noun").value;
  //Process
  let result =
    '"There are too many ' +
    pluralNoun +
    " on this " +
    adjective +
    ' airplane!" , I screamed. "Somebody has to ' +
    verb +
    " on the " +
    noun +
    " to solve this problem. A new problem arrived, the pilot is " +
    gerrund +
    " and the plane is going to crash into the " +
    commonNoun +
    '."';
  //Output
  document.getElementById("result").innerHTML = result;
  //CSS
  document.getElementById("result").style.fontFamily =
    "Arial, Helvetica, sans-serif";
  document.getElementById("result").style.border = "2px solid orange";
  document.getElementById("html").style.backgroundImage =
    "url(images/plane.jpg)";
}

document.getElementById("mad-lib-btn2").addEventListener("click", buildMadLib2);
function buildMadLib2() {
  //input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let gerrund = document.getElementById("gerrund").value;
  let commonNoun = document.getElementById("common-noun").value;
  //process
  let result =
    '"The ' +
    pluralNoun +
    " hide in a  " +
    adjective +
    " brick house, near the " +
    commonNoun +
    ". There is an angry little " +
    noun +
    " that loves " +
    gerrund +
    " and he wants to " +
    verb +
    ' the house down."';
  //output
  document.getElementById("result").innerHTML = result;

  //CSS
  document.getElementById("result").style.border = "2px solid red";
  document.getElementById("result").style.fontFamily =
    "Verdana, Geneva, Tahoma, sans-serif";
  document.getElementById("html").style.backgroundImage =
    "url(images/Photograph_of_a_Small_Brick_Store_on_Main_Street_in_Ste_Genevieve_MO.jpg)";
}
