import React from "react";
import ReactDOM from "react-dom/client";

//React Element (i.e. Object)
const headingJSX = <h1 id="crr" className="crr_1"> CRR_React </h1>;

//React Components:
// 1. Functional Component -> latest way to write React components
// 2. Class-based Component => old way

//Functional Component
const HeadingFunctionalComponent = () => {
    return <h1 id="crr" className="crr_1"> CRR_React </h1>;
}

// Class-based Component (old way)
class HeadingClassComponent extends React.Component {
  render() {
    return (
      <h1 id="crr" className="crr_1">
        CRR_React
      </h1>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingFunctionalComponent />);
//root.render(<HeadingClassComponent />);