function displayElement() {
  displayValue = document.getElementById("moreAboutBattery").style.display;
  document.getElementById("moreAboutBattery").style.display = "flex";

  if (displayValue == "none") {
    document.getElementById("moreAboutBattery").style.display = "flex";
  } else if (displayValue == "flex") {
    document.getElementById("moreAboutBattery").style.display = "none";
  }
}

function displayVent() {
  if (document.getElementById("ventButton") !== null) {
    document.getElementById("ventButton").id = "ventButtonRota";
  } else if (document.getElementById("ventButtonRota") !== null) {
    document.getElementById("ventButtonRota").id = "ventButton";
  }
}

function changeImg() {
  if (
    document.getElementById("imageSecu").getAttribute("src") ===
    "img/icons/chaleur.png"
  ) {
    document
      .getElementById("imageSecu")
      .setAttribute("src", "img/icons/chaleur2.png");
  } else {
    document
      .getElementById("imageSecu")
      .setAttribute("src", "img/icons/chaleur.png");
  }
}
