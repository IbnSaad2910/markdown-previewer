function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- list item one
- list item two
- list item three

### Links

[FreeCodeCamp](https://learn.freecodecamp.org)

[Google](https://www.google.com "World's Most Popular Search Engine")

### Text Decorations

*italic*

**bold**

***bold and italic***

### Images

![alt text](https://prod-discovery.edx-cdn.org/media/course/image/dc921dbd-434a-4994-acde-1430679bca2e-5897fb1383ad.small.jpg "Programming is fun!")

### Blockquote

> “Don't cry because it's over, smile because it happened.”

### Code

\`<h1>Hello World!</h1>\`

\`\`\`
function sayHello() {
  console.log("Hello There!");
}
\`\`\`

`;

var renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
  return `<a href=${href} target="_blank">${text}</a>`;
};

marked.setOptions({
  renderer,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  breaks: true });


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",






    event => {
      this.setState({ markdown: event.target.value });
    });this.state = { markdown: initialMarkdown };this.handleChange = this.handleChange.bind(this);}

  render() {
    return (
      React.createElement("div", { className: "container" },
      React.createElement(Title, null),
      React.createElement("div", { className: "container" },
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-lg-6 col-sm-12" },
      React.createElement(Toolbar, { text: " Editor" }),
      React.createElement(Editor, { markdown: this.state.markdown,
        onChange: this.handleChange })),

      React.createElement("div", { className: "col-lg-6 col-sm-12" },
      React.createElement(Toolbar, { text: " Previewer" }),
      React.createElement("div", { className: "scroller" },
      React.createElement(Preview, { markdown: this.state.markdown })))))));







  }}


const Editor = props => {
  return (
    React.createElement("textarea", { id: "editor",
      value: props.markdown,
      onChange: props.onChange,
      type: "text" }));

};

const Title = props => {
  return (
    React.createElement("div", { className: "title text-center" },
    React.createElement("h1", null, "Markdown Previewer")));


};

const Toolbar = props => {
  return (
    React.createElement("div", { className: "toolbar" },
    React.createElement("i", { className: "fab fa-free-code-camp" }),
    props.text));


};

const Preview = props => {
  return (
    React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(props.markdown, { renderer: renderer }) } }));

};

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));