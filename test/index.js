'use strict';
$(function () {
    $.ajax({
        url: 'subscribeEmailAddress.php',
        method: 'POST',
        dataType: 'json',
        data: {'email': 'brecht.heldens@student.ehb.be'}
    }).done(function (data) {
        //Geef succesbooschap
    }).fail(function (er1) {
        //Al gesubscribed
        console.log(er1.responseText);
    });
});