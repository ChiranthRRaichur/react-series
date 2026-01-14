import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>This is the about page.</p>

             <UserClass name={"CRR_Class"} mail={"crr@gmail.com"}/>
        </div>

       
    );
}

export default About;