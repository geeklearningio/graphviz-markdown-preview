'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
var Viz = require('viz.js');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "graphviz-markdown-preview" is now active!');
    return {

        extendMarkdownIt(md) {

            const highlight = md.options.highlight;

            md.options.highlight = (code, lang) => {

                if (lang && lang.match(/\bgraphviz\b/i)) {

                    var svg = Viz(code);

                    return `<div class="graphviz">${svg}</div>`;
                }

                return highlight(code, lang);

            };

            return md;

        }

    }
}

// this method is called when your extension is deactivated
export function deactivate() {
}