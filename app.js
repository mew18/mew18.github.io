var folder = "Classified_Images/male/";
console.log("ok1");
$.ajax({
    url: folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            console.log("ok2");
            if (val.match(/\.(jpg)/)) {
                console.log("ok3");
                $("body").append("<img src='" + val + "'>");
                console.log("ok4");
            }
        });
    }
});
