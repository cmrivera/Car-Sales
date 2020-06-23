import React from "react";
import { useDispatch } from "react-redux";
import { removeFeatures } from "../Actions/actions";

const AddedFeature = (props) => {
  const dispatch = useDispatch();

  console.log("addedprops", props);

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => {
          dispatch(removeFeatures(props.feature));
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
