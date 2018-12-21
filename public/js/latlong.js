
           var x       = document.getElementById("demo"),
               xlat    = document.getElementById("latcoords"),
               xlong   = document.getElementById("longcoords");
              
           function getLocation() {
               if (navigator.geolocation) {
                   navigator.geolocation.getCurrentPosition(showPosition);
               } else { 
                   x.innerHTML = "Geolocation is not supported by this browser.";
               }
           }
           function showPosition(position) {
               x.innerHTML = "Latitude: " + position.coords.latitude + 
               "<br>Longitude: " + position.coords.longitude;
              
              document.getElementById("latcoords").value = position.coords.latitude;
              document.getElementById("longcoords").value = position.coords.longitude;
           }