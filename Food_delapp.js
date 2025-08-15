import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
// import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./src/Components/RestaurantMenu";
// import Grocery from "./src/Components/Grocery";
import {useState,useEffect} from "react";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appstore";
import Cart from "./src/Components/Cart";


const Grocery = lazy(() => import("./src/Components/Grocery"));

const About = lazy(() => import("./src/Components/About"));

const AppLayout= () => {

  //authentication
const [userInfo,setUserInfo] = useState();

useEffect(() => {
  //make an API call and send username and password
    const data = {
      name: "Shreya Lakhmani",
    };
    setUserInfo(data.name);
},[]);


    return (

      <Provider store={appStore}>

        <UserContext.Provider value={{loggedInUser: userInfo,setUserName:setUserInfo}}>
          <div className="app">
            <Header/>
            <Outlet />
          </div>
        </UserContext.Provider>
        </Provider>
    );
};

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<Suspense fallback = {<h1>Loading..</h1>}> <About /> </Suspense>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback = {<h1>Loading..</h1>}> <Grocery /> </Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element:<RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart/>
      },
    ],
    errorElement:<Error/>,
  },
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
