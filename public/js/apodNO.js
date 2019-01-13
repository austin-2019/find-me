
$.ajax({
  url: "/dataFromNasa",
  success: function (result) {
    let parsedResult = JSON.parse(result);


    if (parsedResult.copyright) {
      $("#copyright").text("Image Credits: " + parsedResult.copyright);
    }
    else {
      $("#copyright").text("Image Credits: " + "Public Domain");
      console.log(parsedResult);
    }

    if (parsedResult.media_type == "video") {
      $("#apod_img_id").css("display", "none");
      $("#apod_vid_id").attr("src", parsedResult.url);
    }
    
    else {
      $("#apod_vid_id").css("display", "none");
      $("#apod_img_id").attr("src", parsedResult.url);
    }
    //$("#reqObject").text('Hello' + result.explanation);

    
    $("#reqObject").text('Hello' + parsedResult);
    $("#reqObject").text(parsedResult.url);
    
    //$("#returnObject").text(JSON.stringify(result, null, 4));
    $("#apod_explanation").text(parsedResult.explanation);
    $("#apod_title").text(parsedResult.title);
  }
  
});
