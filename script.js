function validate() {
  var nimi = document.getElementById("nimi").value;
  var tieto = document.getElementById("tieto").value;
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
    document.getElementById("box").style.display = "block";
    document.getElementById("box").textContent = tiedot;
    document.getElementById('nimi').value = "";
    document.getElementById('tieto').value = "";
  }
}

function merkkaa() {
  if (fix1.checked == true){
    document.getElementById("fixed1").textContent = "HTML Checked";
    document.getElementById("fixed1").style.color = "limegreen";
  }
  else if (fix1.checked == false) {
    document.getElementById("fixed1").textContent = "HTML";
    document.getElementById("fixed1").style.color = "black";
  }
    if (fix2.checked == true){
    document.getElementById("fixed2").textContent = "CSS Checked";
    document.getElementById("fixed2").style.color = "limegreen";
  }
    else if (fix2.checked == false) {
    document.getElementById("fixed2").textContent = "CSS";
    document.getElementById("fixed2").style.color = "black";
  }
    if (fix3.checked == true){
    document.getElementById("fixed3").textContent = "JavaScript Checked";
    document.getElementById("fixed3").style.color = "limegreen";
  }
    else if (fix3.checked == false) {
    document.getElementById("fixed3").textContent = "JavaScript";
    document.getElementById("fixed3").style.color = "black";
  }
    if (fix4.checked == true){
    document.getElementById("fixed4").textContent = "CI/CD Checked";
    document.getElementById("fixed4").style.color = "limegreen";
  }
    else if (fix4.checked == false) {
    document.getElementById("fixed4").textContent = "CI/CD";
    document.getElementById("fixed4").style.color = "black";
  }
}