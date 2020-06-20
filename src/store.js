import { createStore } from "redux";

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
//dispatch (execute action)
