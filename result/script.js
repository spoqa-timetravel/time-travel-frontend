$(document).ready(() => {
    $('#youtube').attr('src', 'https://www.youtube.com/embed/NIld_iEc67s');
    $.get("/post", function (data) {
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
	if(token.includes('&')) {
    	token = token.substring(0, token.indexOf('&'));
    }
    return `https://www.youtube.com/embed/${token}`;
}