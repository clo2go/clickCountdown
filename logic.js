
// Initialize Firebase
var config = {
	apiKey: "AIzaSyCrfV-CBXw8LY4l13OwIxGsOYwdXb29VEA",
	authDomain: "clickcountdown-65e4f.firebaseapp.com",
	databaseURL: "https://clickcountdown-65e4f.firebaseio.com",
	storageBucket: "clickcountdown-65e4f.appspot.com",
	messagingSenderId: "1074301807549"
};
firebase.initializeApp(config);

firebase.database().ref().on("value",function(snapshot){
	$('#clickValue').html(snapshot.val().clicks);
})