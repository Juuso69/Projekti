function validate() {
  var nimi = document.getElementById("nimi").value;
  var tieto = document.getElementById("tieto").value;
  var submit = document.getElementById("submit").value;
  if (nimi == "" || tieto == "") {
    alert("testi");
  	submit.innerText = "TESTI";
  }
}