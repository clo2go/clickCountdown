
// Initialize Firebase
var config = {
	apiKey: "AIzaSyCrfV-CBXw8LY4l13OwIxGsOYwdXb29VEA",
	authDomain: "clickcountdown-65e4f.firebaseapp.com",
	databaseURL: "https://clickcountdown-65e4f.firebaseio.com",
	storageBucket: "clickcountdown-65e4f.appspot.com",
	messagingSenderId: "1074301807549"
};
firebase.initializeApp(config);

var count = 100;

firebase.database().ref().on("value",function(snapshot){
	$('#clickValue').html(snapshot.val().clicks);
	count = snapshot.val().clicks;
	$('#clickValue').html(count);
})

$("#clickButton").on("click", function() {
	count --;
	firebase.database().ref().set({
		clicks:count
	})
})


