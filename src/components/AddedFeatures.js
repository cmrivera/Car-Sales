import React from "react";
import AddedFeature from "./AddedFeature";
import { useSelector } from "react-redux";

const AddedFeatures = () => {
  const car = useSelector((state) => state.car);

  //console.log(dispatch);

  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map((item) => (
            <AddedFeature
              //  remove_features={() => props.remove_features(item)}
              car={car}
              key={item.id}
              feature={item}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
