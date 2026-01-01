/*
//Create a Nested elements using React

  <div id="parent">
        <div id="child1">
            <h1>Iam H1 Tag</h1>
            <h1> Iam H2 Tag </h1>
        </div>
         <div id="child2">
            <h1>Iam H1 Tag</h1>
            <h1> Iam H2 Tag </h1>
        </div>
    </div>
*/

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
