document.getElementById("registrationForm").addEventListener("submit", function(event){
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault(); // Prevent form submission
    } 
    else {
        // Redirect to success page
        window.location.href = "https://github.com/"; // Replace "success.html" with the URL of your success page
        alert("DONE...");
        event.preventDefault();
    }
});
