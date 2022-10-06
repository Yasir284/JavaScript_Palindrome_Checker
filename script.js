// Palindrome Checker Game:
//    Users can enter text or numbers and check whether the entered value is palindrome or not by clicking on the check button.

let text = document.querySelector("#text");
let result = document.querySelector(".result");
let icon = result.querySelector("h2 i");
let h2 = result.querySelector("h2 span");
let p = result.querySelector("p");

function check() {
  let txt = text.value;
  if (txt == "") {
    alert("Please Enter Text");
  } else {
    txt = text.value
      .split("")
      .map((val) => val.toLowerCase().trim())
      .filter((val) => val != "" && val != " " && val != ".");
    console.log(txt);

    if (txt.join("") == txt.reverse().join("")) {
      changeElements(
        "#90e990",
        "fa-circle-check",
        "fa-circle-xmark",
        "Correct",
        "The Text is Palindrome"
      );
    } else {
      changeElements(
        "#E21717",
        "fa-circle-xmark",
        "fa-circle-check",
        "Wrong",
        "The Text is not Palindrome"
      );
    }

    result.style.transform = "translateY(0rem) translateY(12rem)";
  }
}

function cancel() {
  result.style.transform = "translateY(12rem) translateY(-12rem)";
}

function clearText() {
  text.value = "";
}

function changeElements(color, classToAdd, classToRemove, resultH2, resultP) {
  result.style.background = color;
  if (icon.classList.contains(classToRemove)) {
    icon.classList.replace(classToRemove, classToAdd);
  } else {
    icon.classList.add(classToAdd);
  }
  h2.textContent = resultH2;
  p.textContent = resultP;
}
