import RestCard from "./RestCard";
import resList from "../utils/dummyData";
import { useState } from "react";
const Body = ()=>{  
    let [listofRestaurants,setlistofRestaurants]= useState(resList);
    return(
    <div className="container">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const Filteredlist = listofRestaurants.filter(res=> res.info.avgRating > 4);
                setlistofRestaurants(Filteredlist);
                console.log(listofRestaurants);
            }}>TOP RATED Restaurants</button>
        </div>
        <div className="res-container">
        {
            listofRestaurants.map((restaurants) =>(
                <RestCard key = {restaurants.info.id} resData = {restaurants}/> // whenever we are using map try to use key 
            ))
        }
        </div>
    </div>
    );
}

export default Body;