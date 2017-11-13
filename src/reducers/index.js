import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js';
import ActiveBook from './reducer_book_active.js';
const rootReducer = combineReducers({
  books:BooksReducer,
  activebook:ActiveBook
});

export default rootReducer;
