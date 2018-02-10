function contentLoaded() {
    var graphvizElements = document.getElementsByClassName('graphviz');

    for (let index = 0; index < graphvizElements.length; index++) {
        const element = graphvizElements.item(index);
        var source = element.textContent;
        element.parentElement.parentElement.outerHTML = Viz(source);
    }

    // use to debug rendered code.
    // document.body.appendChild(document.createTextNode(document.body.innerHTML));
}

window.addEventListener('load', function () {
    contentLoaded()
}, false)

