export var searchTextReducer = (state='', action)=>{
  // test that df is working. action.something = 2; 
  switch(action.type){
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

export var toggleShowCompletedReducer = (state=false, action)=>{
  switch(action.type){
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};
