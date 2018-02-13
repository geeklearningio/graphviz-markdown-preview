function contentLoaded() {
    var graphvizElements = document.getElementsByClassName('graphviz');

    var changes = [];

    for (let index = 0; index < graphvizElements.length; index++) {
        var element = graphvizElements.item(index);
        var source = element.textContent;

        changes.push({
            placeholder: element.parentElement.parentElement,
            svg: Viz(source)
        });
    }

    for (let index = 0; index < changes.length; index++) {
        const element = changes[index];
        element.placeholder.outerHTML = element.svg;
    }

    // use to debug rendered code.
    // document.body.appendChild(document.createTextNode(document.body.innerHTML));
}

window.addEventListener('load', function () {
    contentLoaded()
}, false)

