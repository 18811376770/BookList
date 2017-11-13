//state here is not the application state, it's only the state this reducer
//responsible for
export default function(state = null,action){
  switch (action.type) {
    case 'BOOK_SELECTED':
    //return a fresh object, don't do thing like state.title=book.title
      return action.payload;
  }
  return state;
}
