const hdConstraints = {

    video: {width: {min: 1280}, height: {min: 720}}
  
  };
  
  navigator.mediaDevices.getUserMedia(hdConstraints).
  
    then((stream) => {video.srcObject = stream});
  
  
  
  const vgaConstraints = {
  
    video: {width: {exact: 640}, height: {exact: 480}}
  
  };
  
  navigator.mediaDevices.getUserMedia(vgaConstraints).
  
    then((stream) => {video.srcObject = stream}); 
  
  
  
  const captureVideoButton =
  
  document.querySelector('#screenshot .capture-button');
  
  const screenshotButton = document.querySelector('#screenshot-button');
  
  const img = document.querySelector('#screenshot img');
  
  const video = document.querySelector('#screenshot video');
  
  const canvas = document.createElement('canvas');
  
  
  
  captureVideoButton.onclick = function() {
  
  navigator.mediaDevices.getUserMedia(constraints).
  
   then(handleSuccess).catch(handleError);
  
  };
  
  
  
  screenshotButton.onclick = video.onclick = function() {
  
  canvas.width = video.videoWidth;
  
  canvas.height = video.videoHeight;
  
  canvas.getContext('2d').drawImage(video, 0, 0);
  
  // Other browsers will fall back to image/png
  
  img.src = canvas.toDataURL('image/webp');
  
  imageData = img.src; 
  
  //img.src = canvas.toDataURL('image/png');
  
  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
  
  document.getElementById("hidden-screenshot").value = canvas.toDataURL('image/webp');                   
  
  document.getElementsByName("myHiddenField")[0].setAttribute("value", imageData);
  
  };
  
  
  
  function handleSuccess(stream) {
  
  screenshotButton.disabled = false;
  
  video.srcObject = stream;
  
  }
  
  
  
  const videoElement = document.querySelector('video');
  
     const audioSelect = document.querySelector('select#audioSource');
  
     const videoSelect = document.querySelector('select#videoSource');
  
  
  
     navigator.mediaDevices.enumerateDevices()
  
       .then(gotDevices).then(getStream).catch(handleError);
  
  
  
     audioSelect.onchange = getStream;
  
     videoSelect.onchange = getStream;
  
  
  
     function gotDevices(deviceInfos) {
  
       for (let i = 0; i !== deviceInfos.length; ++i) {
  
         const deviceInfo = deviceInfos[i];
  
         const option = document.createElement('option');
  
         option.value = deviceInfo.deviceId;
  
         if (deviceInfo.kind === 'audioinput') {
  
           option.text = deviceInfo.label ||
  
             'microphone ' + (audioSelect.length + 1);
  
           audioSelect.appendChild(option);
  
         } else if (deviceInfo.kind === 'videoinput') {
  
           option.text = deviceInfo.label || 'camera ' +
  
             (videoSelect.length + 1);
  
           videoSelect.appendChild(option);
  
         } else {
  
           console.log('Found another kind of device: ', deviceInfo);
  
         }
  
       }
  
     }
  
  
  
  function getStream() {
  
    if (window.stream) {
  
      window.stream.getTracks().forEach(function(track) {
  
        track.stop();
  
      });
  
    }
  
  
  
    const constraints = {
  
      audio: {
  
        deviceId: {exact: audioSelect.value}
  
      },
  
      video: {
  
        deviceId: {exact: videoSelect.value}
  
      }
  
    };
  
  
  
    navigator.mediaDevices.getUserMedia(constraints).
  
      then(gotStream).catch(handleError);
  
  }
  
  
  
  function gotStream(stream) {
  
    window.stream = stream; // make stream available to console
  
    videoElement.srcObject = stream;
  
  }
  
  
  
  function handleError(error) {
  
    console.error('Error: ', error);
  
  }