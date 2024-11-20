import React from "react";

export function filterData(searchText, restaurant) {
    return restaurant.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
  }