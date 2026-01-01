/*
//Create a Nested elements using React

  <div id="parent">
        <div id="child">
            <h1>Iam H1 Tag</h1>
        </div>
    </div>
*/

const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    React.createElement(
        'div', 
        { id: "child" }, 
        React.createElement('h1', {}, "Iam H1 Tag")
    )
);


const heading = React.createElement("h1", {}, "Hey Hey !! My first React Programm");
const root = ReactDOM.createRoot(document.getElementById('head'));
root.render(heading);
