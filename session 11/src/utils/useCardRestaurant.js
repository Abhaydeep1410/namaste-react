import React from "react";
import { useEffect, useState } from "react";
import { GET_RestaurantCard_URL } from "../config";
const useCardRestaurant = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filtered_restaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(GET_RestaurantCard_URL);
    const json = await data.json();
    setRestaurantList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurantList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  return [restaurantList, filtered_restaurantList];
};

export default useCardRestaurant;