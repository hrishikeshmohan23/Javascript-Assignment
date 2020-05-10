function DateInWords() {
    var name =
      "Hi " +
      document.getElementById("myForm").elements[0].value +
      " ,the entered date in words "; 
    var gdate = document.getElementById("myForm").elements[1].value; 
    document.getElementById("Form").remove(); 
    date = ConvertToString(gdate); 
    document.getElementById("UserName").innerHTML = name; 
    document.getElementById("UserDate").innerHTML = date; 
  }
  function ConvertToString(date) {
    var y = date.substring(0, 4); 
    var m = date.substring(5, 7); 
    var d = date.substring(8); 
    var string = Day(d) + " " + Month(m); 
    if (y > 2000)
      string += " Two Thousand" + yearPart(y.substring(2));
    else if (y == 2000) 
        string += " Two Thousand";
    return string; 
  }
  
  function Month(month) {
    var monthDatabase = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      "11": "November",
      "12": "December",
    };
    return monthDatabase[month];
  }
  function yearPart(num) {
    var yearArray = {
      "01": " One",
      "02": " Two",
      "03": " Three",
      "04": " Four",
      "05": " Five",
      "06": " Six",
      "07": " Seven",
      "08": " Eight",
      "09": " Nine",
      "10": " Ten",
      "11": " Eleven",
      "12": " Twelve",
      "13": " Thirteen",
      "14": " Fourteen",
      "15": " Fifteen",
      "16": " Sixteen",
      "17": " Seventeen",
      "18": " Eighteen",
      "19": " Nineteen",
      "20": "Twenty",
    };
    return yearArray[num];
  }
  function decadePart(num) {
    var decadeArray = {
      "2": "Twenty",
      "3": "Thirty",
      "4": "Fourty",
      "5": "Fifty",
      "6": "Sixty",
      "7": "Seventy",
      "8": "Eighty",
      "9": "Ninty",
    };
    return decadeArray[num];
  }
  function Day(day) {
    var dayData = {
      "01": " First",
      "02": " Second",
      "03": " Third",
      "04": " Fourth",
      "05": " Fifth",
      "06": " Sixth",
      "07": " Seventh",
      "08": " Eighth",
      "09": " Ninth",
      "10": " Tenth",
      "11": " Eleventh",
      "12": " Twelfth",
      "13": " Thirteenth",
      "14": " Fourteenth",
      "15": " Fifteenth",
      "16": " Sixteenth",
      "17": " Seventeenth",
      "18": " Eighteenth",
      "19": " Nineteenth",
      "20": " Twenthy",
      "21": " Twenty first",
      "22": " Twenty second",
      "23": " Twenty third",
      "24": " Twenty fourth",
      "25": " Twenty fifth",
      "26": " Twenty sixth",
      "27": " Twenty seventh",
      "28": " Twenty eighth",
      "29": " Twenty nineth",
      "30": " Thirty",
      "31": " Thirty first",
    };
    return dayData[day];
  }