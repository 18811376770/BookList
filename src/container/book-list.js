import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map((book)=>{
      return (
        <li
        key={book.title}
         className="list-group-item"
         onClick={()=>this.props.selectBook(book)}>
         {book.title}
         </li >
      );
    });
  }
  render(){
    return(
      <ul className="list-group col-sm-4">
      {this.renderList()}
    </ul>
    );
  }
}
//glue between redux and component
function mapStateToProps(state){
  //whatever it returns will show up as props in BookList
   return {
     books:state.books
   };
}
//anything returned from this function will end as props in booklist container
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed
  //to all of our reducers(flow through this dispatch function here )
  return bindActionCreators({selectBook:selectBook},dispatch);
}
//promote booklist from a component to a container,it need to know about
//this new dispatch methodselectBook.Make it avaliable as props
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
