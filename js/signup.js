let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});

document.addEventListener('DOMContentLoaded', function() {
    const submitButtons = document.querySelectorAll('.clkbtn');

    submitButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default form submission behavior

            const parentForm = button.parentElement;
            const emailInput = parentForm.querySelector('.email');
            const passwordInputs = parentForm.querySelectorAll('.password');
            let isValid = true;

            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                alert('Please enter a valid email address.');
                isValid = false;
            }

            // Password validation (for signup form)
            if (passwordInputs.length > 0 && passwordInputs[0].value !== passwordInputs[1].value) {
                alert('Passwords do not match.');
                isValid = false;
            }

            if (isValid) {
                // Redirect to index.html
                window.location.href = 'index.html';
            }
        });
    });
});
