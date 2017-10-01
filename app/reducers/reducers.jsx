var moment = require('moment');
var uuid = require('uuid');

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

export var todosReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
        return [
          ...state, {
            id: uuid(),
            text: action.text,
            completed: false,
            createdAt: moment().unix(),
            compeletedAt: undefined,
          }
        ];
      case 'ADD_TODOS':
        return [
          ...state,
          ...action.todos,
        ];
      case 'TOGGLE_TODO':
        return state.map((t) => {
          if (t.id === action.id){
            var c = !t.completed;
            return {
              ...t,
              completed: c,
              completedAt: c?moment().unix():undefined,
            };
          }else{
            return t;
          }
        });
      break;
    default:
    return state;
  }
}
