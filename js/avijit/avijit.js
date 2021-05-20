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

// Subscriber 
$('#subscriber_button').click(function (e) {
    var mail = document.getElementById('subscriber_email').value;
    if (!validateEmail(mail)) {
        showSnackbar("Invalid email", 1000);
        return;
    }
    $.ajax({
        type: 'POST',
        url: 'https://p-admin.androitech.tk/api.php',
        crossDomain: true,
        data: {
            subscribe: true,
            email: mail
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function (responseData, textStatus, jqXHR) {
            console.log(responseData);
            showSnackbar(responseData, 1000);
        },
        error: function (responseData, textStatus, errorThrown) {
            console.log(errorThrown);
            showSnackbar(responseData, 1000);
        }
    });
});
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}