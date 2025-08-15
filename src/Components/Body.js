import RestaurantCard from "./RestaurantCards";
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body= () => {

// hook calls must be inside functional components on the top
//avoid creating state variables in if-else,for,function block  
//Local variable - super powerful variable

const [listOfRestaurants,setListOfRestaurant]= useState([]);
const [filteredRestaurant,setFilteredRestaurant]=useState([]);

const [searchText , setSearchText]=useState("");

// Whenever state variables update,react triggers a reconciliation cycle(re-renders the component)

// console.log("Body Rendered",listOfRestaurants);

useEffect(() => {
    fetchData();
}, []);

const fetchData=async () => {
    const data=await fetch(
        "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

const json=await data.json();

//optional chaining

  setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return (
            <h1>Looks like you are offline!!
            Please Check your internet Connection
            </h1>
        )
    };

    const {loggedInUser,setUserName} =useContext(UserContext);

    return listOfRestaurants.length==0 ? (
    <Shimmer/> 
    ) : (
        <div className="body">
            <div className="filter flex">
                <br></br>
                <div className="m-4 p-4">
                    <input type="text"
                    data-testid="searchInput" className=" border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={()=>{
                        console.log(searchText);

                        const filteredRestaurant=listOfRestaurants.filter(
                            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center ">
                    <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" 
                onClick={() => {
                    //filter logic
                    const filteredList=listOfRestaurants.filter(
                        (res)=>parseFloat(res.info.avgRatingString)>4.2
                    );
                    setFilteredRestaurant(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="m-4 p-4 flex items-center ">
                    <label>UserName : </label>
                    <input className="border border-black p-2"
                    value={loggedInUser} 
                    onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                filteredRestaurant.map((restaurant) => (
                    <Link 
                    key={restaurant.info.id}
                    to={"/restaurants/"+restaurant.info.id}>
                        <RestaurantCard resData={restaurant}/></Link> 
                )
            )
        }
            </div>
        </div>
    );
};

export default Body;