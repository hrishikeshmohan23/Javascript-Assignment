function dateAndTime() {
  var today = new Date();
  var date = "Date: ";
  if (today.getDate() < 10) 
    date += "0" + today.getDate();
  else 
    date += today.getDate();
  if (today.getMonth() + 1 < 10) 
    date += "/0" + (today.getMonth()+1);
  else 
    date += "/" + (today.getMonth()+1);
  date += "/" + today.getFullYear();
  var time = "Time: ";
  if (today.getHours() < 10) 
    time += "0" + today.getHours();
  else 
    time += today.getHours();
  if (today.getMinutes() < 10) 
    time += ":0" + today.getMinutes();
  else 
    time += ":" + today.getMinutes();
  if (today.getSeconds() < 10) 
    time += ":0" + today.getSeconds();
  else 
    time += ":" + today.getSeconds();
  document.getElementById("date").innerHTML = date;
  document.getElementById("time").innerHTML = time; //This helps to insert the date and time in the id location 'datetime' in the html page
}