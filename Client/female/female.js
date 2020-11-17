function display(url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = 'document';

    req.onload = () => {
        if (req.status === 200) {
            var elements = req.response.getElementsByTagName("a");
            for (x of elements) {
                if (x.href.match(/\.(jpg)$/)) {
                    let img = document.createElement("img");
                    img.src = x.href;

                    let div = document.createElement('div');
                    div.className = "female";
                    div.innerHTML = img.src
                    document.body.append(img);
                    // document.body.button.appendChild(img);
                }
            };
        }
        else {
            alert('Request failed.' + req.status);
        }
    }
    req.send()
}

display("../../Classified_Images/female")