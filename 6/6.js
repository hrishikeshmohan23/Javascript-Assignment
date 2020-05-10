function formValidation()
{
var uname = document.registration.name;
var unum = document.registration.number;
var uadd = document.registration.address;
var ucity= document.registration.city;
var ustate = document.registration.state;
var uzip = document.registration.zip;
var a=Validatename(uname);
if(a==true)
{
    var b=ValidateNum(unum);
    if(b==true)
    {
        var c=ValidateASD(uadd,ucity,ustate);
        if(c==true)
        {
            var p=ValidateZip(uzip);
            if(p==true)
            {
                alert("All the details have been validated and submitted!");
            }
        }
    }

}
}
function Validatename(x) 
{
    var letters=/^[A-Za-z" "]+$/;
  if (x.value.length == 0)
   { 
      alert("Message:Name field is blank");  	
      return false; 
   }  	
   else if(x.value.match(letters))
   {
        return true;
   }
   else{
       alert("Message:Name field should contain alphabets only");
       return false;
   }
 }
 function ValidateNum(x)
 {
     var phoneno=/^\d{10}$/;
     if (x.value.length == 0)
   { 
      alert("Message:Number field is blank");  	
      return false; 
   }  
   else if(x.value.match(phoneno))
   {
       return true;
   }
   else
   {
       alert("Message:Number field should contain 10 digits");
       return false;
   }
 }
 function ValidateASD(x,y,z)
 {
     var def="Default";
     if(x.value.length==0)
     {
        alert("Message:Address field is blank");
        return false;
     }
     else if(y.value.length==0 || y.value.match(def))
     {
        alert("Message:City field is blank");
        return false;
     }
     else if(z.value.length==0)
     {
        alert("Message:State field is blank");
        return false;
     }
     else return true;
 }
 function ValidateZip(x)
 {
     var ZipCode=/^\d{6}$/;
     if(x.value.length==0)
     {
        alert("Message:Zip-Code field is blank");
        return false
     }
     else if(x.value.match(ZipCode)){
         return true;
    }
    else{
        alert("Message:Zip code shoudl contain 6 digits only")
        return false;
    }
 }
 function VALSET(val)
        {
            document.getElementById("ZIPid").value = val;
        }
function AutoZip(City){
    if (City == "Kochi")
        VALSET(683501);
    else if (City == "Thrissur")
        VALSET(6820680);
    else if (City == "Chalakudy")
        VALSET(680307);
}