function contentLoaded() {
    var viz = new Viz();
    var graphvizElements = document.getElementsByClassName('graphviz');

    var changes = [];

    for (let index = 0; index < graphvizElements.length; index++) {
        var element = graphvizElements.item(index);
        var source = element.textContent;

        changes.push({
            placeholder: element.parentElement.parentElement,
            svg: viz.renderString(source, {engine: 'dot', format:'svg'})
        });
    }

    for (let index = 0; index < changes.length; index++) {
        const change = changes[index];
        change.svg.then(svg=> {
            change.placeholder.outerHTML = svg;
        });
    }

    // use to debug rendered code.
    // document.body.appendChild(document.createTextNode(document.body.innerHTML));
}

window.addEventListener('load', function () {
    contentLoaded()
}, false)

