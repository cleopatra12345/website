var mainContainer = document.getElementById("myOutput")
    var isChrome = !!window.chrome
    var url = "https://script.google.com/macros/s/AKfycbxz8NdaAxt2Ps5qNdtbN0C-4LEgaCOfdWBc2XCjxoa54MlL1dae5yb03F4vU1X3D0BogQ/exec"

    //if chrome write, then reload
    function comment(input, output) {
        if(isChrome) {
            comment2(input, output)
            location.reload()
        } else {
            location.reload()
        }
    }
    function refresh() {
        location.reload()
    }

    //if not chrome write, clear input, then read
    function onLoad(input) {
        var myInput = document.getElementById(input)
        fetch(url + "?path=Sheet2&action=write&Users=" + myInput.value)
        myInput.value = ""
        fetch(url + "?path=Sheet2&action=read")
        .then(res => res.json())
        .then(data => onLoad2(data))
    }
    function onLoad2(x) {
        for(let i = 0; i < x.data.length; i++) {
            let div = document.createElement("div")
            div.innerHTML = x.data[i].Users
            mainContainer.appendChild(div);
        }
    }
    function comment2(input, output) {
        var myInput = document.getElementById(input)
        fetch(url + "?path=Sheet2&action=write&Users=" + myInput.value)
        myInput.value = ""
        fetch(url + "?path=Sheet2&action=read")
        .then(res => res.json())
        .then(data => comment3(data, output))
    }
    function comment3(x, output) {
        let div = document.createElement(output)
        div.innerHTML = x.data[x.data.length - 1].Users
        mainContainer.appendChild(div);
    }