// Palindrome Checker Game:
//    Users can enter text or numbers and check whether the entered value is palindrome or not by clicking on the check button.

let text = document.querySelector("#text");

function check() {
  let txt = text.value
    .split("")
    .map((val) => val.toLowerCase().trim())
    .filter((val) => val != "" && val != " " && val != ".");
  console.log(txt);

  if (txt.join("") == txt.reverse().join("")) {
    return alert("yes");
  } else {
    return alert("no");
  }
}

function clearText() {
  text.value = "";
}
