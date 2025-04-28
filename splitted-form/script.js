// Function to dynamically generate form fields from JSON config
function generateFormFields(config) {
    const form = document.getElementById('loginForm');
    form.innerHTML = ''; // Clear any existing content

    // Update form header
    const formHeader = document.querySelector('.form-header');
    formHeader.querySelector('h1').textContent = config.formTitle;
    formHeader.querySelector('p').textContent = config.formSubtitle;

    // Update success message
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = config.successMessage;

    // Generate form fields
    config.fields.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';

        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;
        formGroup.appendChild(label);

        const input = document.createElement('input');
        input.className = 'form-control';
        input.id = field.id;
        input.name = field.id;
        input.type = field.type;
        input.placeholder = field.placeholder;
        if (field.required) input.required = true;
        formGroup.appendChild(input);

        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.id = `${field.id}-error`;
        formGroup.appendChild(errorMessage);

        form.appendChild(formGroup);
    });

    // Add submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.className = 'btn btn-primary';
    submitBtn.textContent = config.submitButtonText;
    form.appendChild(submitBtn);
}

// Function to validate form
function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    formConfig.fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorElement = document.getElementById(`${field.id}-error`);
        errorElement.textContent = ''; // Clear previous error

        // Check if required
        if (field.required && !input.value.trim()) {
            errorElement.textContent = `${field.label} is required`;
            isValid = false;
            return;
        }

        // Check pattern if defined
        if (field.validation && field.validation.pattern && input.value) {
            const regex = new RegExp(field.validation.pattern);
            if (!regex.test(input.value)) {
                errorElement.textContent = field.validation.message;
                isValid = false;
                return;
            }
        }

        // Check minLength if defined
        if (field.validation && field.validation.minLength && input.value) {
            if (input.value.length < field.validation.minLength) {
                errorElement.textContent = field.validation.message;
                isValid = false;
                return;
            }
        }
    });

    // Form successful submission
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 3000);
    }

    return isValid;
}

// Initialize the form
document.addEventListener('DOMContentLoaded', () => {
    // Generate form fields from config
    generateFormFields(formConfig);
    
    // Add form validation
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', validateForm);
});