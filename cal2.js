function storeData() {
  const dob = document.getElementById("dob").value;
  const regno= document.getElementById("regno").value;

  localStorage.setItem("dob", dob);
  localStorage.setItem("regno",regno);
  if (regno==="25139261"){
	  document.write("reload!!")
  window.location.href = "25139261.html";
  }
}
