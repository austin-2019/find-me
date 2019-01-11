  // Initialize Firebase
  
  var config = {
    apiKey: "AIzaSyD123PvPBnD0L4Nw6DKvlyjPzYIE9Sx_Jo",
    authDomain: "find-me-eba22.firebaseapp.com",
    databaseURL: "https://find-me-eba22.firebaseio.com",
    projectId: "find-me-eba22",
    storageBucket: "find-me-eba22.appspot.com",
    messagingSenderId: "511040371879"
  };
  firebase.initializeApp(config);
  
  /* adapted to firebaseconfig in config.js */
  /*firebase.initializeApp(firebaseconfig);*/


// Reference messages collection
var messagesRefNoCamera = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('nocameraform').addEventListener('submit', submitNoCameraForm);

// Submit form
function submitNoCameraForm(e){
  e.preventDefault();
  var latcoords = getInputValNoCamera('latcoords');
  var longcoords = getInputValNoCamera('longcoords'); 
  var name = getInputValNoCamera('name');
  var phone = getInputValNoCamera('phone');
  var myHiddenField = getInputValNoCamera('myHiddenField');
  
  saveMessageNoCamera(name, phone, latcoords, longcoords, myHiddenField);
  
    // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  
  document.getElementById('nocameraform').reset();
} 

// Function to get get form values
function getInputValNoCamera(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessageNoCamera(name, phone, latcoords, longcoords, myHiddenField){
  var newMessageRefNoCamera = messagesRefNoCamera.push();
  newMessageRefNoCamera.set({
    name: name,
    phone:phone,
    latcoords: latcoords,
    longcoords:longcoords,
    myHiddenField:myHiddenField
  });
}
