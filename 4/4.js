function Edit(element) {
  var NEW = document.getElementById("text");
  if (NEW.contentEditable == "true") {
    NEW.contentEditable = "false";
    element.innerHTML = "Edit";
  } else {
    NEW.contentEditable = "true";
    element.innerHTML = "Save";
  }
}