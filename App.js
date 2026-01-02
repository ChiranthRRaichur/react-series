import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    { id: "parent" }, 
   [ React.createElement(
        'div', 
        { id: "child1" }, 
        [React.createElement('h1', {}, "Iam H1 Tag"), React.createElement('h1', {}, "Iam H2 Tag")]
    ),
     React.createElement(
        'div', 
        { id: "child" }, 
        [React.createElement('h1', {}, "Iam H1 Tag"), React.createElement('h1', {}, "Iam H2 Tag")]
    )
    ]
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('head'));


// const heading = React.createElement("h1", {}, "Hey Hey !! My first React Programm");
// const root = ReactDOM.createRoot(document.getElementById('head'));
root.render(parent);
