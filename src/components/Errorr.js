import { useRouteError } from "react-router";

const Errorr = () => {
    const error = useRouteError();
    console.error(error);
    return <div> 
        <h1>{error.data}</h1>
        <h2>{error.status}</h2>
        </div>
}

export default Errorr;