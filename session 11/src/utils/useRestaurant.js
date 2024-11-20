import React from 'react'
import { useEffect,useState } from 'react';
import { REST_MENU_URL } from '../config';
const useRestaurant=(id)=>{

    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
      getRestaurantItem();
    }, []);
  
    async function getRestaurantItem() {
      const data = await fetch(
        REST_MENU_URL+id
      );
      const json = await data.json();
      setRestaurantData(json.data.cards);
    }
  return restaurantData;

} 


export default useRestaurant;