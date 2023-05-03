function storeData() {
  const dob = document.getElementById("dob").value;
  const regno= document.getElementById("regno").value;
 
  localStorage.setItem("dob", dob);
  localStorage.setItem("regno",regno);
  if (regno==="25139261"){
  window.location.href = "25139261.html";}
  
  else if(regno=="25139280"){
  window.location.href="25139280.html";}
  
  else if(regno=="25139314"){
  window.location.href="25139314.html";}
  
  else {window.location.href="invalid.html"}
}
function FrontPage_Form1_Validator(theForm)
{

  if (theForm.regno.value == "")
  {
    alert("Please enter a value for the \"Roll Number\" field.");
    theForm.regno.focus();
    return (false);
  }

  if (theForm.regno.value.length < 1)
  {
    alert("Please enter at least 1 characters in the \"Roll Number\" field.");
    theForm.regno.focus();
    return (false);
  }

  if (!checkNumeric(theForm.regno.value))
  {
    alert("Please enter only digit characters in the \"Roll Number\" field.");
    theForm.regno.focus();
    return (false);
  }     
  
  
   if (theForm.dob.value == "") {
      alert("Invalid DOB");
      theForm.dob.focus();
      return (false);
  }
  if (theForm.dob.value.length < 10) {
      alert("Invalid DOB");
      theForm.dob.focus();
      return (false);
  } 
  re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

      if (theForm.dob.value != '') {
          if (regs = theForm.dob.value.match(re)) {
              // day value between 1 and 31 
              if (regs[1] < 1 || regs[1] > 31) {
                  alert("Invalid value for day: " + regs[1]);
                  theForm.dob.focus();
                  return false;
              }
              // month value between 1 and 12 
              if (regs[2] < 1 || regs[2] > 12) {
                  alert("Invalid value for month: " + regs[2]);
                  theForm.dob.focus();
                  return false;
              }
              // year value between 1902 and 2012
              if (regs[3] < 1902 || regs[3] > (new Date()).getFullYear()) {
                  alert("Invalid value for year: " + regs[3] + " - must be between 1902 and " + (new Date()).getFullYear());
                  theForm.dob.focus();
                  return false;
              }
          }
          else {
              alert("Invalid date format: " + theForm.dob.value);
              theForm.dob.focus();
              return false;
          }
      }
  
  if (theForm.sch.value == "")
  {
    alert("Please enter a value for the school number field.");
    theForm.sch.focus();
    return (false);
  }
  
  if (theForm.sch.value.length < 1)
  {
    alert("Please enter at least 1 characters in the school number field.");
    theForm.sch.focus();
    return (false);
  }
  
   if (!checkNumeric(theForm.sch.value))
  {
    alert("Please enter only digit characters in the \"school number \" field.");
    theForm.sch.focus();
    return (false);
  }
  
 
 if (theForm.admid.value == "")
  {
    alert("Please enter a value for the admit card number field.");
    theForm.admid.focus();
    return (false);
  }
  
  if (theForm.admid.value.length < 1)
  {
    alert("Please enter at least 1 characters in the admit card number field.");
    theForm.admid.focus();
    return (false);
  }
  storeData();
  
temp = new String(theForm.regno.value);
first_two_char = temp.substr(0,2);


   return true;
}
