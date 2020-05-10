function appendFn() {
  var water = document.createElement("LI");
  var Text = document.createTextNode("Water");
  water.appendChild(Text);
  document.getElementById("List").appendChild(water);
}