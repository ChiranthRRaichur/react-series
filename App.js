import React from "react";
import ReactDOM from "react-dom/client";

//React Element (i.e. Object)
//const headingJSX = <h1 id="crr" className="crr_1"> CRR_React </h1>;


const Title = () => <h1>This is CRR Adda</h1> // No need to use return since it is a single line. It is Implicit return

const TitleSub = () => (            // instead of return use () for returning compo
    <>              
    <h2>This is CRR Adda Sub Title</h2>
    <h2>{1000}</h2>
    <h3> Be Chill </h3>
    </>   
);

//Component Composition
const HeadingFunctionalComponent = () => {
    return <div id="Container">
        {Title()}
        <TitleSub />
        <h2 id="crr" className="crr_1"> CRR_React </h2>
    </div>
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingFunctionalComponent />);
