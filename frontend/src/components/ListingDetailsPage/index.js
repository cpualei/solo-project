import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteListing, getListings } from "../../store/listings";
import EditListingForm from "../EditListingModal";
import EditListingFormModal from "../EditListingModal/editListingModal";

const ListingDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const listings = useSelector((state) => state.listings);
  const listing = listings[id];

  useEffect(() => {
    dispatch(getListings(id));
  }, [dispatch, id]);

  return (
    <div>
      <EditListingFormModal />
      <button onClick={(e) => dispatch(deleteListing(id))}>Delete Listing</button>
      <img src={listing?.img1} alt="img1"></img>
      <img src={listing?.img2} alt="img2"></img>
      <img src={listing?.img3} alt="img3"></img>
      <img src={listing?.img4} alt="img4"></img>

      <div>{listing?.name}</div>
      <div>{listing?.state}</div>
      <div>{listing?.country}</div>
      <div>From ${listing?.cost} / night</div>
    </div>

  );
};

export default ListingDetailsPage;