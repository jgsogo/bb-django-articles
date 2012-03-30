$(document).ready(function () {
    $('#id_tags').autocomplete(
        '/ajax/tag/autocomplete/', // if your prefix for articles differs, fix this
        {multiple: true, multipleSeparator: ' '}
    );
});

