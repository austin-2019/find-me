
$.ajax({
  url: "/dataFromFirebase",
  success: function (result) {
    let parsedResult = JSON.parse(result);


    if (parsedResult.fbdbimage) {
      $("#fbdbimage").text("Image Credits: " + parsedResult.fbdbimage);
    }
    else {
      $("#fbdbimage").text("Image Credits: " + "Public Domain");
      console.log(parsedResult);
    }

    if (parsedResult.media_type == "video") {
      $("#fbvideo_img_id").css("display", "none");
      $("#fbvideo_vid_id").attr("src", parsedResult.url);
    }
    
    else {
      $("#fbother_vid_id").css("display", "none");
      $("#fbother_img_id").attr("src", parsedResult.url);
    }
    //$("#reqObject").text('Hello' + result.explanation);

    
    $("#reqObjectFB").text('Hello' + parsedResult);
    $("#reqObjectFB").text(parsedResult.url);
    
    //$("#returnObject").text(JSON.stringify(result, null, 4));
    $("#fb_explanation").text(parsedResult.explanation);
    $("#fb_title").text(parsedResult.title);
  }
  
});
