import React from "react";
import { IMG_CDN_URL } from "../config";
import { restaurantData } from "../config";
import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState();

  const [restaurantList, setRestaurantList] = useState([]);
  const [filtered_restaurantList, setFilteredRestaurantList] = useState([]);
  
  const [data,setData]=useState();

  // useEffect(()=>{
  //     console.log('render')
  // },[searchText])

  useEffect(() => {
    // API call 
    getRestaurant();
    
  }, []);

  async function getRestaurant(){
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    setRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }


  //Conditional rendering
  //Shimmer Ui - skeleton like structure to display to user when api data is not loaded
  // if resturant data is empty-> shimmer ui
  // if resturant data has data-> actual ui

  // if(restaurantList.length==0){
  //   return (
  //     <>
  //     Shimmer .........
  //     </>
  //   )
  // }

    // when dont have restaurantList (Early return ) not render or we can do optional chaining 
  if(!restaurantList) return null;


  return (restaurantList?.length==0) ? <Shimmer/> : (

    <>
      <div>
        <input
          className="input-search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // this is known as two way binding
          }}
        ></input>

        <button
          className="search-button"
          onClick={() => {
            
            const data = filterData(searchText, restaurantList);
            setFilteredRestaurantList(data);
            

          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant_list">
        {
          (filtered_restaurantList.length==0) ? <h2>no restaurant with this search</h2>:
        filtered_restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

function filterData(searchText, restaurant) {
  return restaurant.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}

export default BodyComponent;
