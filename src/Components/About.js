import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../../utils/UserContext";

class About extends React.Component{

    constructor(props){
        super(props);

        console.log("Parent Constructor");
    }

    render(){
        console.log("Parent render");
        return (
            <div>
                <h1>About Class Component</h1>
                <div>
                    loggedInUser
                    <UserContext.Consumer>
                        {({ loggedInUser}) => (
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2>Learning React</h2>
                <UserClass name={"Shreya Lakhmani(Class)"} location={"Mumbai Class"}/>

            </div>
        );
    };
};

export default About;