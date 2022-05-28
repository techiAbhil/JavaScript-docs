# JS Study Material

The purpost of this project is to test various javascript, HTML, CSS code snippets.

---

## basicHTML Directory

This directory contains only HTML/CSS code snippets, we can directly run this files in browser to see the output.

---

## basicJS Directory

This directory contains only JS specific code snippets.THe

- `index.html` file will be able to load different `.js` files present in this directory. Once we select the file from dropdown.
- There is a `files.json` file, which contains an array of all the JS file names present in the directory to be shown in the dropdown list.

### Scripts

To update the `files.json` file run below command in the root directory.

```
node .\GenerateBasicJSFIlesJSON.js
```

> Note: Please follow the naming conventions for javascript file, each newly created file should start with the incremental integer number then hypen & finally concept name should be written.

---

## jsexamples Directory

This directory contains some specific JS code snippets, like interview questions or some weired JS questions. TO run the examples mentioned here either run using `node fileName.js` or if HTML file is there then directly open it in web browser.

> Note:
> I would recommend using VS Code along with [Live Server](https://github.com/ritwickdey/vscode-live-server-plus-plus), it will help to test updated changes immidiatly(live reload).
