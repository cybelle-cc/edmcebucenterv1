function login() {
    const role = document.getElementById("role").value;
    const error = document.getElementById("error");
  
    if (!role) {
      error.textContent = "Please select a role.";
      return;
    }
    if (role === "SCHOLAR") {
      window.location.href = "scholar.html";
    } else if (role === "Center SDO") {
      window.location.href = "approver.html";
    } else if (role === "House Parent") {
      window.location.href = "releasing.html";
    }
  }
  
  function showForgot() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('forgot-container').style.display = 'block';
  }
  
  function showLogin() {
    document.getElementById('forgot-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
  }
  