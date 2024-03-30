import RestCard from "./RestCard";
import resList from "../utils/dummyData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
const Body = ()=>{  
    let [listofRestaurants,setlistofRestaurants]= useState([]);

    let [filteredRestaurant,setfilteredRestaurant] = useState([]);

    let [searchText,setsearchText] = useState("");



    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setlistofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

  // Conditional rendering

    return listofRestaurants.length === 0 ? (<Shimmer/>)
    : (
    <div className="container">
        <div className="filter">
            <div className="search">
                <input type="text"
                className="search-box"
                value={searchText}
                onChange={(e)=>{
                    setsearchText(e.target.value);
                }}/>

                <button onClick={()=>{
                    //Now here we will filter our UI according to searched input by the user
                    // It will change whole UI
                    console.log(searchText);
                    const filteredRestaurants = listofRestaurants.filter((res) => {
                       return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                });
                    setfilteredRestaurant(filteredRestaurants);
                }}>
                Search
                </button>
            </div>
            <button className="filter-btn" onClick={()=>{
                const Filteredlist = listofRestaurants.filter(res=> res.info.sla.deliveryTime > 25);
                 setlistofRestaurants(Filteredlist);
                console.log(listofRestaurants);
            }}>TOP RATED Restaurants</button>
        </div>
        <div className="res-container">
        {
           filteredRestaurant.map((restaurants) =>(
                <RestCard key = {restaurants.info.id} resData = {restaurants}/>
                 // whenever we are using map try to use key 
            ))
        }
        </div>
    </div>
    );
}

export default Body;