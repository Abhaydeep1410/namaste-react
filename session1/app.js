const heading=React.createElement("h1",{
    id:"hy",
},"hello inside react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


//to create heirarchy like this
//     <div id="container">
//     <h1></h1>

//     <h2></h2>
//    </div>
                                        //props 
const heading1=React.createElement("h1",{id:"heading1"},"heading1");
const heading2=React.createElement("h2",{id:"heading2"},"heading2");

const container=React.createElement("container",{id:"container"},[heading1,heading2]);
const root2=ReactDOM.createRoot(document.getElementById("root2"));
root2.render(container);


