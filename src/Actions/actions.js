// an action creator is a function that "creates" actions!
// aka a function that returns an action object

// action creator
export const Add_Features = "Add_Features";
export const addFeatures = (item) => {
  console.log(item);
  // the returned object is an action
  return { type: "ADD_FEATURES", payload: item };
};

export const Remove_Features = "Remove_Features";
export const removeFeatures = (item) => {
  return { type: "Remove_Features", payload: item };
};

//   export const updateTitle = newTitle => {
//     return { type: 'UPDATE_TITLE', payload: newTitle };
//   };
