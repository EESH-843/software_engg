function generateRandomToken() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      token += chars[randomIndex];
    }
    return token;
  }
  
  function generateToken() {
    const tokenElement = document.getElementById('token');
    const randomToken = generateRandomToken();
    tokenMessage = "Address:<br> G-30, Inavolu<br>Beside AP Secretariat Amaravati<br>Andhra Pradesh 522237<br>India<br><br>Token : "
    tokenElement.innerHTML = tokenMessage + randomToken;
  }
  