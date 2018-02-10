[![Visual Studio Marketplace](https://img.shields.io/vscode-marketplace/d/geeklearningio.graphviz-markdown-preview.svg)](https://marketplace.visualstudio.com/items?itemName=geeklearningio.graphviz-markdown-preview)

Adds [GraphViz](http://www.graphviz.org/) support to VS Code's builtin markdown preview

![](https://github.com/geeklearningio/graphviz-markdown-preview/raw/master/docs/example.png)


# Usage
Create diagrams in markdown using `mermaid` code blocks:

~~~markdown
```graphviz
digraph finite_state_machine {
    rankdir=LR;
    size="8,5"

    node [shape = doublecircle]; S;
    node [shape = point ]; qi

    node [shape = circle];
    qi -> S;
    S  -> q1 [ label = "a" ];
    S  -> S  [ label = "a" ];
    q1 -> S  [ label = "a" ];
    q1 -> q2 [ label = "ddb" ];
    q2 -> q1 [ label = "b" ];
    q2 -> q2 [ label = "b" ];
}
```
~~~