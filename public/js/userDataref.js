/* based on stackoverflow questions/42684712/display-data-from-firebase-database-in-a-html-page */
/* https://stackoverflow.com/questions/38541098/how-to-retrieve-data-from-firebase-database */
/* https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot#forEach */
var TextMessagesRef = firebase.database().ref("TextMessages").orderByKey();
TextMessagesRef.once("name").then(function(snapshot){
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
        $("#displayhiddenfield").append(name_val);
        $("#displayname").append(name_val);
        $("#displayphone").append(phone_val);
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