
function ecrireJobs(){
var yeah=" <select id=\"monjob1\" name=\"job\">";
var maliste=["bibliotheque"]
var technicien=["detecter mensonge "," intelligence artificielle "]
yeah+="  <optgroup label=\"bibliotheque\">"
for (var i=0;i<maliste.length;i++){
yeah+="<option value=\""+maliste[i].toLowerCase().replace("&","").replace("(","").replace(")","")+"\">"+maliste[i].toLowerCase()+"</option>";
}
yeah+="  </optgroup>"
yeah+="  <optgroup label=\"livre\">"
for (var i=0;i<technicien.length;i++){
yeah+="<option value=\" bibliotheque livre "+technicien[i].toLowerCase().replace("&","").replace("(","").replace(")","")+"\">"+" bibliotheque livre "+technicien[i].toLowerCase()+"</option>";
}
yeah+="  </optgroup>"
yeah+="</select>";
monjob1.outerHTML=yeah;
}
window.onload=function(){
}

$(function(){

$('form:not(#jobform):not(#jobformweb)').on('submit', function () {
  if (window.filesize > 1024*5) {
    alert('max upload size is 5k');
return false;
  }
  $.ajax({
    // Your server script to process the upload
    url: $(this).attr("action"),
    type: 'POST',

    // Form data
    data: new FormData($(this)[0]),

    // Tell jQuery not to process data or worry about content-type
    // You *must* include these options!
    cache: false,
    contentType: false,
    processData: false,

    // Custom XMLHttpRequest
    success: function (data) {
	    console.log("HEY")
	    console.log(JSON.stringify(data))
	    console.log(JSON.stringify(data.redirect))
	    if (data.redirect){
	    window.location=data.redirect;
	    }else{
	    window.location="/welcome";
	    }
},
    xhr: function () {
      var myXhr = $.ajaxSettings.xhr();
      if (myXhr.upload) {
        // For handling the progress of the upload
        myXhr.upload.addEventListener('progress', function (e) {
          if (e.lengthComputable) {
            $('progress').attr({
              value: e.loaded,
              max: e.total,
            });
          }
        }, false);
      }
      return myXhr;
    }
  });
	return false;
  });
  
});
