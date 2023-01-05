$(function () {
    $(".form__optional-section").hide();

    // toggle primary insurance section based on checkbox
    $("#has-primary-insurance").on("change", function () {
        $("#primary-insurance-info").toggle();
    });

    // toggle secondary insurance section based on checkbox
    $("#has-secondary-insurance").on("change", function () {
        $("#secondary-insurance-info").toggle();
    });

    // toggle text alert section based on checkbox
    $("#has-text-alert").on("change", function () {
        $("#text-alert-info").toggle();
    });
});
