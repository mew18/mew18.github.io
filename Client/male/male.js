$(document).ready(function(){
  var dir = "../../Classified_Images/male/"; // folder location
  var fileextension = ".jpg"; // image format
  var i = "0";

  $(function imageloop(){
    $("<img />").attr('src', dir + "img_"+ i + fileextension ).appendTo(".testing");
    if (i==15){
      alert('loaded');
    }
    else{
      i++;
      imageloop();
    };
  });   
});
// display("../../Classified_Images/male/")
