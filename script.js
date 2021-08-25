function validate() {
  var nimi = document.getElementById("nimi").value;
  var tieto = document.getElementById("tieto").value;
  var submit = document.getElementById("submit").value;
  if (nimi == "" || tieto == "") {
    document.getElementById("submit").style.background = "red";
    document.getElementById("submit").value = "Virhe! En lisännyt tietoa.";
    setTimeout(function() {
    document.getElementById("submit").style.background = "rgb(61, 61, 61)";
    document.getElementById("submit").value = "Lisää tieto";
    }, 2000 );
  }
  else {
    let tiedot = (nimi + ": " + tieto);
    document.getElementById("tiedot").value = "tiedot";
  }
}