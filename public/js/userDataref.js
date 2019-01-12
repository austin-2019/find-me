/* currently database is over-writing out current data check for append */
/* based on stackoverflow questions/42684712/display-data-from-firebase-database-in-a-html-page */
var userDataRef = firebase.database().ref("UserData").orderByKey();
userDataRef.once("value").then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
        var key = childSnapshot.key;
        var childData = childSnapshot.val();

        var name_val = childSnapshot.val().Name;
        var id_val = childSnapshot.val().AssignedID;
        $("#name").append(name_val);
        $("#id").append(id_val);
    });
});