import React from "react";
import { IMG_CDN_URL } from "../config";
import { restaurantData } from "../config";
import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useCardRestaurant from "../utils/useCardRestaurant";
import useOnline from "../utils/useOnline";


const BodyComponent = () => {
  const [searchText, setSearchText] = useState();
  const [restaurantList, filtered_restaurantList] = useCardRestaurant();

  const isOnline=useOnline();
  
  if(!isOnline){
    return <h1>Please check your internet  connection </h1>
  }

  if (!restaurantList) return null;
  return restaurantList?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <input
          className="input-search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value); }}
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
        {filtered_restaurantList.length == 0 ? (
          <h2>no restaurant with this search</h2>
        ) : (
          filtered_restaurantList.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            );
          })
        )}
      </div>
    </>
  );
};

export default BodyComponent;
