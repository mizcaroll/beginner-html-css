function validateTextbox() {
  var box = document.getElementById("name");  
  var box2 = document.getElementById("address");
  var box3 = document.getElementById("phone");
  var box4 = document.getElementById("email");
  if (box.value == "" || box2.value == "" || box3.value == "" || box4.value == "") 
    {
      alert("The field cannot be blank");
      
      //the following stops the onSubmit from submitting the form
      return false;
    
    }

  }