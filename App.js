//created an Element i.e. h1 using React.
const heading = React.createElement("h1", { id: "header" }, "Hey Hey !! My first React Programm");

console.log(heading); // returns an object

// Now we have to render this h1 inside root and attach it to the Browser or DOM using ReactDOM
// root is the place where all the react will run/ render
const root = ReactDOM.createRoot(document.getElementById('head'));
// Now render the root
root.render(heading);
