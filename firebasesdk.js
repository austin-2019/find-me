/* https://firebase.google.com/docs/admin/setup#add_firebase_to_your_app */
/* https://stackoverflow.com/questions/38541098/how-to-retrieve-data-from-firebase-database */

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://find-me-eba22.firebaseio.com"
});
