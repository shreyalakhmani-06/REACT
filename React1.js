const parent=React.createElement("div",
    {id:"parent"},
    [React.createElement("div",
        {id:"child"},
        [React.createElement("h1",{},"This is Heading 1"),React.createElement("h2",{},"This is heading 2")]
        ),
        React.createElement("div",
        {id:"child2"},
        [React.createElement("h1",{},"This is Heading 1"),React.createElement("h2",{},"This is heading 2")]
        )]
    );  //nested elements example  

const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from React!"); 
//3 arguements: name of the tag, attributes(objects),children/array of children

const root=ReactDOM.createRoot(document.getElementById("root"));   //to assisgn a root in react
// console.log(heading);  //heading

// root.render(heading); // takes object and convert it into heading tag 

//ReactElement(object)=>HTML(Browser understands)
//Note: React element is an object not html element..browser understands it as an html ele 
root.render(parent);       //render is used to put that object onto our page
//root.render replaces (not appends) what is already there in root ele in html code
//react library(not a framework) can be applied to a small portion of the page also


console.log(parent);