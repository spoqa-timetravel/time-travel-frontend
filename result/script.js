$(document).ready(() => {
    $.get("/post", function (data) {
        if (!data.image) { $('#image').css('display', 'none'); }
        if (!data.youtube) { $('#youtube').css('display', 'none'); }
        $('#date').text(data.date);
        $('#youtube').attr('src', data.youtube);
        $('#image').attr('src', data.image);
        $('#caption').text(data.caption);
    });

    $('#restart').click(() => {
        window.location.reload();
    });
});