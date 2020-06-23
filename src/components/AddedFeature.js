import React from "react";

const AddedFeature = (props) => {
  console.log("addedprops", props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => {
          props.remove_features(props.feature.id);
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
