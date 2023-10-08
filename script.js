function validateForm() {
    function validateEmail() {

        let input= document.getElementById("email-input");
        let validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]+)*$/u;
      
        if (input.value.match(validRegex)) {
            document.getElementById("valid-email").innerHTML=" ";
            return true;
        } else {
            document.getElementById("valid-email").innerHTML="Email is not valid";
            return false;
        }
    }

    function validatePassword() {
        let passwordInput= document.getElementById("password-input");
        let passwordRegex =/^[A-Z].{5,}$/;
      
        if (passwordInput.value.match(passwordRegex)) {
            document.getElementById("valid-password").innerHTML=" ";
            return true;
        } else {
            document.getElementById("valid-password").innerHTML="Password is not valid";
            return false;
        }
    }

    let isEmailValid = validateEmail();
    let isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
        document.getElementById("valid").innerHTML="All fields are valid";
        document.getElementById("valid-email").innerHTML=" ";
        document.getElementById("valid-password").innerHTML=" ";
    }
}
