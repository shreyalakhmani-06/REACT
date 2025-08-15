import {CDN_URL} from "../../utils/constants";

const RestaurantCard= (props) => {
    const{resData}=props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        costForTwo
    } =resData?.info;

    return(
        <div data-testid="resCard" className="m-4 p-4 w-[250px] bg-slate-50 rounded-lg shadow-lg hover:bg-slate-200">
            <img
            className="rounded-lg"
            alt="logo1"
            src={CDN_URL +
            cloudinaryImageId
            }
            >
            </img>
            <h3 className="font-bold py-4 text-lg ">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;