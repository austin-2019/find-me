var userDataRef = firebase.database().ref("TextMessages").orderByKey();
userDataRef.once("value").then(function(snapshot) {
snapshot.forEach(function(childSnapshot) {
  var key = childSnapshot.key;
  var childData = childSnapshot.val();              

  var name_val = childSnapshot.val().Name;
  var phone_val = childSnapshot.val().Phone;

  $("#displayname").append(name_val);
  $("#displayphone").append(phone_val);

  });
});