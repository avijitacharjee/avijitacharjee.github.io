$('#contact_submit').click(function (e) {
    $.getJSON('https://ipinfo.io/json', function (d) {
        var contact_name = document.getElementById("contact_name").value;
        var contact_email = document.getElementById("contact_email").value;
        var contact_message = document.getElementById("contact_message").value;
        $.ajax({
            type: 'POST',
            url: 'https://p-admin.androitech.tk/api.php',
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
                showSnackbar("Message sent successfully",3000);
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
$('#hire_me_now').click(function(e) {
    showSnackbar("Please send a message in contact section to continue", 4000);
})

function showSnackbar(message,time) {
    var x = document.getElementById("snackbar");
    x.innerText = message;
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, time);
}
