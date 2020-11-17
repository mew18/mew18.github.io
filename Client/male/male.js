$(document).ready(function(){
  var dir = "../../Classified_Images/male/"; // folder location
  var fileextension = ".jpg"; // image format
  var i = "1";

  $(function imageloop(){
    $("<img />").attr('src', dir + i + fileextension ).appendTo(".testing");
    if (i==13){
      alert('loaded');
    }
    else{
      i++;
      imageloop();
    };
  });   
});
// display("../../Classified_Images/male/")
