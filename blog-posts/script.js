function myFunction() {
    var x = document.getElementById("side-menu");
    var y = document.getElementsByTagName("main");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.marginLeft = "0";
    } else {
      x.style.display = "block";
      y.style.marginLeft = "15vw";
    }
  }