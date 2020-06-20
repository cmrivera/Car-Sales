import { createStore } from "redux";
import { updateTotalReducer } from "./Reducers/totalUpdate";
import { addRemoveFeature } from "./Reducers/featuresReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  updateTotal: updateTotalReducer,
  updateFeatures: addRemoveFeature,
  updateTotalPrice: updateTotalReducer,
});
//let store = createStore(reducer)

//store -> globalized state

//Action increment(action to be completed wehn terms are met), function that returns an object
const addFeature = () => {
  return {
    type: "Add_Feature",
  };
};
const removeFeature = () => {
  return {
    type: "Remove_Feature",
  };
};

const totalUpdate = () => {
  return {
    type: "Update_Total",
  };
};
//reducer

const add = (state = 0, action) => {
  switch (action.type) {
    case "Add_Feature":
      return state + 1;
  }
};

const remove = (state = 0, action) => {
  switch (action.type) {
    case "Remove_Feature":
      return state - 1;
  }
};

let store = createStore(add);

//display to the console
store.subscribe(() => console.log(store.getState()));

//dispatch (execute action)
store.dispatch(addFeature());
store.dispatch(removeFeature());
store.dispatch(totalUpdate());
