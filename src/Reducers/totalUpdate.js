const updateTotalReducer = (state = false , action) => {
switch(action.type) {
  case 'Update_Total':
    return !state;
}
}export default updateTotalReducer;