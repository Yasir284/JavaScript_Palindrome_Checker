// Palindrome Checker Game:
//    Users can enter text or numbers and check whether the entered value is palindrome or not by clicking on the check button.

let text = document.querySelector("#text");
let result = document.querySelector(".result");
let icon = result.querySelector("h2 i");
let h2 = result.querySelector("h2 span");
let p = result.querySelector("p");
let i = 0;
function check() {
  result.classList.add("hide");
  result.classList.remove("forword");
  result.classList.remove("reverse");
  let txt = text.value;
  if (txt == "") {
    result.style.background = "#ffc796";
    h2.textContent = "Enter text first !";
    p.textContent = "";
    if (
      icon.classList.contains("fa-circle-xmark") ||
      icon.classList.contains("fa-circle-check")
    ) {
      icon.classList.remove(icon.classList[1]);
    }
  } else {
    txt = text.value
      .split("")
      .map((val) => val.toLowerCase().trim())
      .filter(
        (val) =>
          val != "" && val != " " && val != "." && val != "," && val != "?"
      );
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
  }
  setTimeout(() => {
    result.classList.remove("hide");
  }, 10);

  setTimeout(() => {
    result.classList.add("forword");
  }, 100);
}

function cancel() {
  result.classList.add("reverse");
  result.classList.remove("forword");
}

function clearText() {
  cancel();
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
