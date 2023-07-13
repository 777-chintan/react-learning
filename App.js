/**
 *
 * <div id="parent">
 *  <div id="child">
 *    <h1>I'm h1 tah</h1>
 *    <h2>I'm h2 tah</h2>
 *  </div>
 *  <div id="child2">
 *    <h1>I'm h1 tah</h1>
 *    <h2>I'm h2 tah</h2>
 *  </div>
 * </div>
 *
 * ReactElement (Object) ==> render method converts to HTML (that browser understands)
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

// JSX

let heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World from React"
);

console.log("first", parent);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
