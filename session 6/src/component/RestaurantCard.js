import React from "react";
import { IMG_CDN_URL } from "../config";


const RestaurantCard=({name,cloudinaryImageId,cuisines,avgRating})=>{
    return (
        <div className="card">
            <img src={IMG_CDN_URL+ cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>

        </div>       
    )
};

export default RestaurantCard