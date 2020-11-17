function display(url)
{
    var req = new XMLHttpRequest();
    console.log("1");
    req.open("GET", url, true);
    console.log("1.5");
    req.responseType = 'document';

    req.onload = () => {
        console.log("2");
        if (req.status === 200) {
            console.log("3");
            var elements = req.response.getElementsByTagName("a");
            for (x of elements) {
                if (x.href.match(/\.(jpg)$/)) {
                    console.log("4");
                    let img = document.createElement("img");
                    img.src = x.href;
                    document.body.appendChild(img);
                }
            };
        }
        else {
            console.log("5");
            alert('Request failed.' + req.status);
        }
    }
    req.send()
}

display("../../Classified_Images/male")
