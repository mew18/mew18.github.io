var findImages = function(){
    var parentDir = "../../Classified_Images/male/";

    var fileCrowler = function(data){
        var titlestr = $(data).filter('title').text();
        // "Directory listing for /Resource/materials/xxx"
        var thisDirectory = titlestr.slice(titlestr.indexOf('/'), titlestr.length)

        //List all image file names in the page
        $(data).find("a").attr("href", function (i, filename) {
            if( filename.match(/\.(jpe?g|png|gif)$/) ) { 
                var fileNameWOExtension = filename.slice(0, filename.lastIndexOf('.'))
                var img_html = "<img src='{0}' id='{1}' alt='{2}' width='75' height='75' hspace='2' vspace='2' onclick='onImageSelection(this);'>".format(thisDirectory + filename, fileNameWOExtension, fileNameWOExtension);
                $("#image_pane").append(img_html);
            }
            else{ 
                $.ajax({
                    url: thisDirectory + filename,
                    success: fileCrowler
                });
            }
        });}

        $.ajax({
        url: parentDir,
        success: fileCrowler
    });
}
// display("../../Classified_Images/male/")
