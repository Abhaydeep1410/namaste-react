import React from "react";
import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";

const RestaurantCard=({id,name,cloudinaryImageId,cuisines,avgRating})=>{
    return (
        <Link to={"/restaurant/"+{id}}  className="link_card">
            <div className="card">
                <img src={IMG_CDN_URL+ cloudinaryImageId}></img>
                <h2>{name}</h2>
                <h4>{cuisines.join(",")}</h4>
                <h4>{avgRating}</h4>

            </div>
        </Link>       
    )
};

export default RestaurantCard