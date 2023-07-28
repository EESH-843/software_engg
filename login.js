function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Replace the following dataset with your Excel data once you have a server-side mechanism to fetch the data.
    const userData = [
      { username: "user1", password: "password1" },
      { username: "user2", password: "password2" },
      { username: "user3", password: "password3" },
      // Add more users as needed
    ];
  
    const foundUser = userData.find(user => user.username === username && user.password === password);
  
    if (foundUser) {
      document.getElementById("loginMessage").innerText = "Login successful!";
      return true;
    } else {
      document.getElementById("loginMessage").innerText = "Invalid username or password!";
      return false;
    }
  }
  