var folder = "./Classified_Images/male/";
console.log("ok");
$.ajax({
    url: folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if (val.match(/\.(jpg)/)) {
                $("body").append("<img src='" + val + "'>");
            }
        });
    }
});
