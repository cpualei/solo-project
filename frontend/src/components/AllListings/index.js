import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListings } from "../../store/listings";
import "./AllListings.css"
// import "../images/map"

const AllListings = () => {
  const listings = useSelector((state) => {
    return Object.values(state.listings);
  });
  console.log(listings)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);

  return (
    <div className="listings-div">
      <ul className="listings-ul">
        {listings.map((listing) => (
          <i id="i" key={listing.id}>
            <img id="listing-imgs" src={listing.img1} alt="img"></img>
            <div className="listing-description" id="listing-name">{listing.name}</div>
            <div className="listing-description">{listing.state}</div>
            <div className="listing-description">{listing.country}</div>
            <div className="listing-description" id="listing-cost">From ${listing.cost} / night</div>
          </i>
        ))}
      </ul>
      {/* <img className="googlemap" src="images/map.png" alt="map" /> */}
    </div>
  );
};

export default AllListings;
