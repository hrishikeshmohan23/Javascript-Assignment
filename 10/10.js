function Convert(val) {
    var a;
    if (val == "C") {
      a = document.getElementById("c").value * 9 / 5 + 32;
      document.getElementById("f").value = Math.round(a);
    } else {
      a = (document.getElementById("f").value -32) * 5 / 9;
      document.getElementById("c").value = Math.round(a);
    }
  }