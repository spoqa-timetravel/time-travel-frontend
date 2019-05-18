$(document).ready(() => {
    $.post("https://timetravel-5ebe0.web.app/api/post", function (res) {
        const data = res.result
        if (!data.image) { $('#image').css('display', 'none'); }
        if (!data.youtube) { $('#youtube').css('display', 'none'); }
        $('#date').text(data.date);
        $('#youtube').attr('src', formatYoutubeUrl(data.youtube));
        $('#image').attr('src', data.image);
        $('#caption').text(data.caption);
    });

    $('#restart').click(() => {
        window.location.reload();
    });
});

function formatYoutubeUrl(url) {
    let token;
    if (url.startsWith('https://youtu.be/')) {
        token = url.replace('https://youtu.be/', '');
    } else {
        token = url.substring(url.indexOf('v=') + 2, url.length);
    }
    if (token.includes('&')) {
        token = token.substring(0, token.indexOf('&'));
    }
    return `https://www.youtube.com/embed/${token}`;
}