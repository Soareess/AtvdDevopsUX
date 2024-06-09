document.getElementById('passwordRecoveryForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    document.getElementById('recoveryConfirmationMessage').style.display = 'block';
});
