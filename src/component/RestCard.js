import { FOOD_URL } from "../utils/constant";
const RestCard = (props)=>{
    const {resData} = props;
 const {name,cloudinaryImageId,cuisines,avgRating,costForTwo,deliveryTime} = resData?.info;
   return (<div className="res-card">
                <div className="res-logo">
                    <img className="Image" src={FOOD_URL + cloudinaryImageId}/>
                </div>
                <div className="details">
                <h3>{name}</h3>
                    <h4>{cuisines.join(", ")}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{resData.info.sla.deliveryTime} minutes</h4>
                </div>
            </div>);
}

export default RestCard;