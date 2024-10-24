import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX
// JSX => using babel-- React.createElement => Object => html(dom)
const heading1 = (
  <h1 id="sdf" key="asdf">
    This is a heading using JSX
  </h1>
);

const value = (
  <div id="cont" key="div">
    <h1 id="head" key="sadf" className="skdfh">
      this is a using heirarchy using JSX
    </h1>
  </div>
);
// root.render([heading1, value]);

// Functional Component - name should be start with capital letter - they are like normal js functions
const HeaderComponent = () => {
  return (
    <div>
      {/* component inside component is component composition*/}
      <Title />
      { /* we can write any js code here in {} brackets*/}
      {/* using react element inside functional component */}
      {value}
      <h1>This is a fucntional component</h1>
      <h2>This is heading2</h2>
    </div>
  );
};


// jsx is very secure when we inject any code here is sanitizes it 

const Title = () => {
  return (
    <h2 id="ad" key="ad">
      this is a title
    </h2>
  );
};

root.render(<HeaderComponent />);
