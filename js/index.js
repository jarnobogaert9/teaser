'use strict';
$(function () {
    $('#form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: 'subscribeEmailAddress.php',
            method: 'POST',
            dataType: 'json',
            data: $('#form').serializeArray()
        }).done(function (data) {
            //Geef succesbooschap
        }).fail(function (er1) {
            //Al gesubscribed
            console.log(er1.responseText);
        });

        $('#email').val("");
    });
});