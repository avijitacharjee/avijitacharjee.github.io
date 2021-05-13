$('#contact_submit').click(function (e) {
    $.getJSON('http://ip-api.com/json', function (d) {
        var contact_name = document.getElementById("contact_name").value;
        var contact_email = document.getElementById("contact_email").value;
        var contact_message = document.getElementById("contact_message").value;
        $.ajax({
            type: 'POST',
            url: 'http://p-admin.androitech.tk/api.php',
            crossDomain: true,
            data: {
                m: 100,
                name: contact_name,
                email: contact_email,
                message: contact_message,
                user_info: JSON.stringify(d, null, 2)
            },
            contentType: "application/json",
            contentType: "application/x-www-form-urlencoded",
            // dataType: 'json',
            success: function(responseData, textStatus, jqXHR) {
                var value = responseData.responseText;
                console.log(value);
            },
            error: function (responseData, textStatus, errorThrown) {
                console.log(errorThrown);
                console.log('response data');
                console.log(responseData);
            }
        });
        // console.log(JSON.stringify(d, null, 2));
    });
});
