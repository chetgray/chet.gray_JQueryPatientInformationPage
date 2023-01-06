$(function () {
    // When a toggle checkbox is changed, show or hide the corresponding "data-for" section
    $(".form__optional-section-toggle").on("change", function () {
        $(this.dataset["for"]).toggleClass("form__optional-section--hidden", !this.checked);
    });

    // When the form is submitted, show an alert and reset the form
    // Also, trigger a change event on all inputs to let the toggle checkboxes hide their sections
    $("#patient-info-form").on("submit", function (event) {
        event.preventDefault();
        $form = $(this);
        alert(
            `Information for ${$form.find("[name='patient-name']").val()} submitted successfully.`
        );
        event.target.reset();
        $form.find(":input").trigger("change");
    });
});
