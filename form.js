document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send the data to a server
        console.log('Form submitted with:', { name, email, message });

        // Optional: Show success message using Bootstrap alert instead of browser alert
        const formContainer = this.closest('.card-body');
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success mt-3 alert-dismissible fade show';
        alertDiv.role = 'alert';
        alertDiv.innerHTML = 'Thank you for your message! I will get back to you soon.';
        alertDiv.innerHTML += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        formContainer.appendChild(alertDiv);

        // Reset the form
        this.reset();

        // Remove alert after 5 seconds if Bootstrap JS is available
        if (typeof bootstrap !== 'undefined') {
            setTimeout(() => {
                const bsAlert = new bootstrap.Alert(alertDiv);
                bsAlert.close();
            }, 5000);
        } else {
            // Fallback if Bootstrap JS is not available
            setTimeout(() => {
                alertDiv.remove();
            }, 5000);
        }
    });
});