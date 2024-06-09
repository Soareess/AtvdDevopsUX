document.getElementById('passwordRecoveryForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    document.getElementById('recoveryConfirmationMessage').style.display = 'block';
});
document.getElementById('userRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    document.getElementById('confirmationMessage').style.display = 'block';
});
