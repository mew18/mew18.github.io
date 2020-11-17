function display(url) {
var req = new XMLHttpRequest();
document.write("1");
req.open("GET", url, true);
document.write("1.5");
req.responseType = 'document';

req.onload = () => {
    document.write("2");
    if (req.status === 200) {
        document.write("3");
        var elements = req.response.getElementsByTagName("a");
        for (x of elements) {
            if (x.href.match(/\.(jpg)$/)) {
                document.write("4");
                let img = document.createElement("img");
                img.src = x.href;
                document.body.appendChild(img);
            }
        };
    }
    else {
        document.write("5");
        alert('Request failed lol fuck.' + req.status);
    }
}
req.send()
}

display("../../Classified_Images/male")
