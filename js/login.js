function validateForm() {
    let username = document.forms["form"]["username"].value;
    if (username == "") {
      alert("please fill up your username");
      return false;
    
    }
    let password = document.forms["form"]["password"].value;
    if (password == "") {
      alert("please fill up your password");
      return false;
    }
  }