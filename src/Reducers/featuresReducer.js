const addRemoveFeature = (state = 0, action) => {
  switch (action.type) {
    case "Add_Feature":
      return state + 1;
    case "Remove_Feature":
      return state - 1;
  }
};

export default addRemoveFeature;
