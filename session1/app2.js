const heading =React.createElement("h1",{"id":"heading1"},"new heading");
const root=ReactDOM.createRoot(document.getElementById("root"));

const heading2=React.createElement("h2",{"id":"heading2"},"h2 heading");

const root2=ReactDOM.createRoot(document.getElementById("root2"));

const container=React.createElement("div",{"id":"container"},[heading,heading2]);
root2.render(container);