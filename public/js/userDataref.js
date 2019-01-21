/* based on stackoverflow questions/42684712/display-data-from-firebase-database-in-a-html-page */
/* https://stackoverflow.com/questions/38541098/how-to-retrieve-data-from-firebase-database */
/* https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot#forEach */
/* https://firebase.google.com/docs/reference/rest/database/ */

var TextMessagesRef = firebase.database().ref("TextMessages").orderByKey();
TextMessagesRef.once("value").then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
        var key = childSnapshot.key;
        var childData = childSnapshot.val();

        var latcoords_val = childSnapshot.val().latcoords;
        var longcoords_val = childSnapshot.val().longcoords;
        var myhiddenfield_val = childSnapshot.val().myHiddenField;
        var name_val = childSnapshot.val().name;
        var phone_val = childSnapshot.val().phone;
        $("#displaylat").append(latcoords_val);
        $("#displaylong").append(longcoords_val);
        $("#displayhiddenfield").append(myhiddenfield_val);
        $("#displayname").append(name_val);
        $("#displayphone").append(phone_val);
        console.log("hello");
    });
});

/*
var testRef = database.ref('messages');
testRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
    });
});
*/
/* https://stackoverflow.com/questions/50887636/realtime-database-templating-using-node-ejs-and-firebase */
/*
var textMessagesRef = firebase.database().ref("TextMessages/");
textMessagesRef.orderByKey().on("child_added", function(data) {

   //console.log("the name is " + data.val().name);
   console.log("The  UserData longitude is" + (data.val().latcoords) + "The  UserData latitude is " + (data.val().longcoords) + "The User Data name is " + (data.val().name) + "The User Data phone is"+ (data.val().phone));
   var phonetest = " the phone"; 
   //var phonetest = (data.val().phone);
   console.log(phonetest);

});
*/