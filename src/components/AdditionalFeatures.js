import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { useSelector } from "react-redux";
//import { addFeatures } from "../Actions/actions";

const AdditionalFeatures = () => {
  const additionalFeatures = useSelector((state) => state.additionalFeatures);

  // const dispatch = useDispatch();

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map((item) => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
