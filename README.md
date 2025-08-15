#Learning React

#Parcel
-Dev Build
-Local Server
-HMR = Hot Module Replacement
-File Watching Algorithm - Written in C++
-Reliable Caching -Faster Builds
-Image Optimization
-Minification
-Bundling
-Compress
-Consistent Hashing
-Code Splitting
-Differential Bundling -support older browsers
-Diagnostics
-Error Handling
-HTTPs
-Tree Shaking -remove unused code/functions present in files
-Different dev and prod bundles


Two types of export/import

1. Default:
        export default component;
        import component from "path";
2. Named:
        export const component;
        import {component} from "path";

Can we use both default and named import/export together ??

Why React is fast?
It has Virtual DOM
It can do efficient DOM manipulations using it.
It has diff algorithm.

=> Whenever a state variable updates , React re-renders its components.


Array Destructuring
const listOfRestaurants=arr[0]
const setListOfRestaurants=arr[1]

React has a virtual DOM (representation of actual DOM).

ReactAlgorithm: Reconciliation Algorithm (also knowm as React Fiber)
            => 7 cards->3 cards(keep rem 4 cards in virtual DOM).

Monolith Architecture & Microservice Architecture

Monolith Architecture: Having API,UI service,authentication code,Database connectivity,notification(SMS) service in a single project

Microservice Architecture: Separation of concerns and single responsibility principle


# Whenever state variables update,react triggers a reconciliation cycle(re-renders the whole component).

To keep header intact => use child routers.

Anchor tags reloads the complete page while link only refreshes the components.
=> Thus react applications are known as single page applications (use client side routing).

# Types of routing in web-apps
1. client side routing 
2. server side routing


Why do we write super{props} in class components?

ComponentDidMount(): Used to make API calls

Chunking = Code splitting = Dynamic Bundling = Lazy Loading = On-demand loading = dynamic import

# Redux Toolkit

-install @redux js toolkit
-install react redux
-Build our store
-connect store to our app
-slice(cartslice)
-dispatch action
-selector 