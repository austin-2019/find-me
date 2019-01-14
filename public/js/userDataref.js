/* currently database is over-writing out current data check for append */
/* based on stackoverflow questions/42684712/display-data-from-firebase-database-in-a-html-page */
/* https://stackoverflow.com/questions/38541098/how-to-retrieve-data-from-firebase-database */
var messagesDataRef = firebase.database().ref("messages").orderByKey();
userDataRef.once("value").then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
        var key = childSnapshot.key;
        var childData = childSnapshot.val();

        var latcoords_val = childSnapshot.val().LatCoords;
        var longcoords_val = childSnapshot.val().LongCoords;
        var myhiddenfield_val = childSnapshot.val().MyHiddenField;
        var name_val = childSnapshot.val().Name;
        var phone_val = childSnapshot.val().Phone;
        $("#displaylat").append(latcoords_val);
        $("#displaylong").append(longcoords_val);
        $("#displayhiddenfield").append(name_val);
        $("#displayname").append(name_val);
        $("#displayphone").append(phone_val);
    });
});
var leadsRef = database.ref('TextMessages');
leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
    });
});