$(function () {
    // When a toggle checkbox is changed, show or hide the corresponding "data-for" section
    $(".form__optional-section-toggle").on("change", function () {
        $(this.dataset["for"]).toggleClass("form__optional-section--hidden", !this.checked);
    });
});
