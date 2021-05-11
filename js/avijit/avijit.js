console.log('hello avijit');
UserInfo.getInfo(function(data) {
    console.log(data);
}, function(err) {
    console.log(err)
});