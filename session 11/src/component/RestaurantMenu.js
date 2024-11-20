import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

export const RestaurantMenu = () => {
  //read a dynamic url param
  const param = useParams();
  const { id } = param;

const restaurantData=useRestaurant(id);


  return (restaurantData.length==0)?<Shimmer/>:(
    
    <div className="restInfoCard">
        
      <div className="imageContainer">
        <img
          src="https://t3.ftcdn.net/jpg/01/09/84/42/240_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg"
          alt="Restaurant"
          className="restImage"
        />
      </div>
      <div className="restaurantInfo">
        <div className="ratingAndCost">
          <b className="rating">
            {restaurantData[2]?.card?.card?.info.avgRating}{" "}
            <span className="ratingCount">
              ({restaurantData[2]?.card?.card?.info.totalRatingsString})
            </span>
          </b>
          <span className="costForTwo">
            {restaurantData[2]?.card?.card?.info.costForTwoMessage}
          </span>
        </div>
        <div className="cuisine">
          <h4>{restaurantData[2]?.card?.card?.info.cuisines.join(", ")}</h4>
        </div>
        <div className="areaAndTime">
          <h4>
            <span className="outlet">
              {restaurantData[2]?.card?.card?.info.areaName}
            </span>
            <span className="deliveryTime">
              {" | "}
              {restaurantData[2]?.card?.card?.info.sla.minDeliveryTime}-
              {restaurantData[2]?.card?.card?.info.sla.maxDeliveryTime} min
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};
