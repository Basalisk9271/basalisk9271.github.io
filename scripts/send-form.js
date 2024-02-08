// formScript.js

$(document).ready(function () {
    // Handle form submission
    $("#contactForm").submit(function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Disable submit button to prevent multiple submissions
        $("#submitButton").prop("disabled", true);

        // Get form data
        var formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            message: $("#message").val(),
        };

        // Send form data to the backend
        $.ajax({
            type: "POST",
            url: "API_ENDPOINT", // Replace with your actual API endpoint
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function (response) {
                // Handle successful form submission
                $("#submitSuccessMessage").removeClass("d-none");
            },
            error: function (error) {
                // Handle form submission error
                $("#submitErrorMessage").removeClass("d-none");
            },
            complete: function () {
                // Re-enable submit button after the request is complete
                $("#submitButton").prop("disabled", false);
            },
        });
    });
});
