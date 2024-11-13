
import React from "react";

export const Title=()=>(
    <a href="/">
    <div> 
        <img alt="Logo" src= "https://imgs.search.brave.com/UlUhjepfUS7--dyIP-LPS-rXEAIXx2sLL6uZEGaeoyw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby9zbW9r/aW5nLWJ1cmdlci13/aXRoLWxldHR1Y2Ut/MzYyNGxkLnBuZz9u/d209MSZud3M9MSZp/bmR1c3RyeT1yZXN0/YXVyYW50LWZvb2Qm/c2Y9JnR4dF9rZXl3/b3JkPUFsbA" className="imageIcon"></img>
    </div>
    </a>
);


const HeaderComponent=()=>{
    return (
        <div className="header"> 
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About </li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )
  };
  


// we need to export this also 

export default HeaderComponent;