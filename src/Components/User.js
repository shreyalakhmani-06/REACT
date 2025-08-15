import {useState} from "react";


const User=({name}) => {
    const [count,setCount]=useState(0);
    const [count2]=useState(1);

    useEffect(() => {
        //api calls
    },[]);

    

    return (
        <div className="user-card m-4 p-4 bg-red-100 rounded-lg">
            <h2>Name: Shreya</h2>
            <h3>Location: Mumbai</h3>
            <h4>Contact: @shreyalakhmani06</h4>
        </div>
    );
};

export default User;