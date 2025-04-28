// Form configuration JSON - You can extend this to add more fields
const formConfig = {
    "formTitle": "Welcome Back",
    "formSubtitle": "Sign in to your account",
    "submitButtonText": "Sign In",
    "successMessage": "Successfully logged in!",
    "fields": [
        {
            "id": "email",
            "type": "email",
            "label": "Email Address",
            "placeholder": "example@domain.com",
            "required": true,
            "validation": {
                "pattern": "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
                "message": "Please enter a valid email address"
            }
        },
        {
            "id": "password",
            "type": "password",
            "label": "Password",
            "placeholder": "Enter your password",
            "required": true,
            "validation": {
                "minLength": 6,
                "message": "Password must be at least 6 characters"
            }
        }
        // To add more fields, simply add new objects to this array
        // Example for adding a username field:
        /*
        {
            "id": "username",
            "type": "text",
            "label": "Username",
            "placeholder": "Enter your username",
            "required": true,
            "validation": {
                "minLength": 3,
                "message": "Username must be at least 3 characters"
            }
        }
        */
    ]
};