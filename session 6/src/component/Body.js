import React from "react";
import { IMG_CDN_URL } from "../config";
import { restaurantData } from "../config";
import RestaurantCard from "./RestaurantCard";

import { useState } from "react";

const BodyComponent = () => {
  // searchText is a local variable
  const [searchText,setSearchText] = useState(); // to create a state variable //[variable,, function to update the variable]

  const [restaurantList,setRestaurantList]=useState(restaurantData);
  const [restaurant_list_copy, set_restaurant_list_copy]=useState(restaurantData);

  return (
    <>
      <div>
        <input
          className="input-search"
          placeholder="Search"
          value={searchText}
          onChange={
            (e)=>{
                setSearchText(e.target.value);
                // this is known as two way binding
            }
          }
          
        ></input>
      {/* <h1>{searchText}</h1> */}
        <button className="search-button"
        onClick={()=>{
            //need to filter the data
            //update the state restaurant
            console.log("inside")
            const data=filterData(searchText,restaurant_list_copy)
            setRestaurantList(data);

        }}
        >Search</button>
      </div>

      <div className="restaurant_list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};


function filterData(searchText,restaurant){
    return restaurant.filter((restaurant)=>restaurant.info.name.includes(searchText))
}

export default BodyComponent;
