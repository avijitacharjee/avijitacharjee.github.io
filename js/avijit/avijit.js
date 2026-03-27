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
        url: 'https://p-admin.avijitacharjee.com/api.php',
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

// Video modal functionality
function playVideo(videoUrl) {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    
    // Extract YouTube video ID
    const videoId = getYouTubeId(videoUrl);
    
    // Embed the video
    videoFrame.innerHTML = `
        <iframe width="100%" height="100%" 
                src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    `;
    
    // Show modal
    modal.style.display = 'block';
}

function getYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Close modal when clicking X
document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('videoModal').style.display = 'none';
    document.getElementById('videoFrame').innerHTML = '';
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
        document.getElementById('videoFrame').innerHTML = '';
    }
});