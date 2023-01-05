$(function () {
    $(".form__optional-section").addClass("form__optional-section--hidden");

    // toggle primary insurance section based on checkbox
    $("#has-primary-insurance").on("change", function () {
        $("#primary-insurance-info").toggleClass("form__optional-section--hidden");
    });

    // toggle secondary insurance section based on checkbox
    $("#has-secondary-insurance").on("change", function () {
        $("#secondary-insurance-info").toggleClass("form__optional-section--hidden");
    });

    // toggle text alert section based on checkbox
    $("#has-text-alert").on("change", function () {
        $("#text-alert-info").toggleClass("form__optional-section--hidden");
    });
});
