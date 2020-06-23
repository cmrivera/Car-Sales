import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { Add_Features, Remove_Features } from "./Actions/actions";

const App = (props) => {
  /*this next part moved to reducers, ot needed here, commented out
  const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: "2019 Ford Mustang",
      image:
        "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: [],
    },
    additionalFeatures: [
      { id: 1, name: "V-6 engine", price: 1500 },
      { id: 2, name: "Racing detail package", price: 1500 },
      { id: 3, name: "Premium sound system", price: 500 },
      { id: 4, name: "Rear spoiler", price: 250 },
    ],
  };
*/
  const removeFeature = (item) => {
    //dispatch an action to remove an item
    props.Remove_Features(item);
  };

  /* const buyItem = (item) => {
    console.log("item", item);
    props.Add_Features(item);
  };*/

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures
          car={props.car}
          remove_features={props.Remove_Features}
        />
      </div>
      <div className="box">
        <AdditionalFeatures
          add_features={props.Add_Features}
          additionalFeatures={props.additionalFeatures}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, { Add_Features, Remove_Features })(App);
