$(document).ready(function () {
    $("#filters button").click(function () {
        var filterValue = $(this).data("filter");

        if (filterValue === "all") {
            $("#imageGallery .gallery").show();
        } else {
            $("#imageGallery .gallery").hide();
            $("#imageGallery .gallery." + filterValue).show();
        }
    });
});