import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            userInfo: {
                name:"dummy",
                default:"dummy",
            }
        };
        //console.log("Child Constructor");
    }

    async componentDidMount(){
        //console.log("Child Component Did Mount");

        const data = await fetch("https://api.github.com/users/shreyalakhmani-06");
        const json=await data.json();

        this.setState({
            userInfo:json,
        });

        console.log(json);
    }

    render(){
        const{name,location,login}=this.state.userInfo;
            
        // console.log("Child render");

        return(
            <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>UserId: {login}</h4>
        </div>
        );
    };
};

export default UserClass;