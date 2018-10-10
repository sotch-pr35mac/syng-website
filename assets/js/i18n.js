function select_language(language) {
    $('[lang]').each(function() {
        if($(this).attr('lang') == language) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

$(document).ready(function() {
    // Language switcher onclick listeners
    $('#switch-to-chinese').click(function() {
        select_language('cn');
    });
    $('#switch-to-english').click(function() {
        select_language('en');
    });

    // Set the default language
    select_language('cn');
});
