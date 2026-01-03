import React from "react";
import ReactDOM from "react-dom/client";


// Creating a React element using core React
const heading = React.createElement("h1", {id:"crr"}, "CRR_React");  //=> It's an Object
console.log(heading); 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

//JSX - JSX is a HTML-like or XML-like syntax. It is a JavaScript XML
const headingJSX = <h1 id="crr"> CRR_React </h1>;
console.log(headingJSX);

//Both heading and headingJSX provide the same object in the logs

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headingJSX);
root.render(heading);