import React,{Component} from 'react';
import {connect} from 'react-redux';
class BookDetail extends Component{
  render(){
    if(!this.props.book){
      return <div>Select a Book to get started!</div>;
    }
    return(
       <div>
        <h3>Detail for:</h3>
        <div>{this.props.book.title}</div>  
       </div>
    );
  }
}
function mapStateToProps(state){
  return {
    book:state.activebook
  };
}
export default connect(mapStateToProps)(BookDetail);
