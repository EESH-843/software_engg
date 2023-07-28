function checkAlert(message) {
    const alertType = localStorage.getItem('alertType');
    if (alertType == 'success') {
        message = 'Added to ' + message;
    } else {
        message = 'Failed to add to ' + message;
    }
    showAlert(alertType, message);
}

function showAlert(type, message) {
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.classList.add(`alert-${type}`);
    alertBox.innerText = message;
    
    document.querySelector('.alert-container').appendChild(alertBox);
    
    alertBox.addEventListener('click', function() {
        alertBox.classList.add('slide-out');
        alertBox.addEventListener('animationend', function() {
        alertBox.remove();
        });
    });
    
    setTimeout(function() {
        alertBox.classList.add("alert-hide");
        alertBox.addEventListener("animationend", function() {
          alertBox.remove();
        });
    }, 2000);
}
    