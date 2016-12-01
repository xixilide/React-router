import React,{Component, PropTypes} from 'react';
import axios from 'axios';
import BlogCard from './card';
import BlogCard1 from './card1';
import SerchCard from './serchcard';
import Loding from './loding';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class Contact extends Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:0
    }
  }
  handleSubmit(e){
  e.preventDefault();
  this.setState({wait:1});
  var value = this.refs.gitname.getValue();
    axios.get("http://api.github.com/users/"+value)
    .then(response =>
      this.setState({
        data:response.data,
        wait:2
      })
    )
    .catch( error => {alert(error);this.setState({wait:0})} )
    this.refs.form.reset();

}

  render(){
    let styles={
      underline:{
        borderColor:'#00bcd4'
      }
    }
    return(
      <div>
        <div className='git-card'>
          <h2 className="css75d8cf6b716c23">Search Git Info</h2>
          <form ref='form' className='about-form' onSubmit={this.handleSubmit.bind(this)}>
              <TextField style={{width:'60%'}} ref='gitname' hintText="github name" underlineFocusStyle={styles.underline} />
              <RaisedButton onClick={this.handleSubmit.bind(this)} label="search" secondary={true} style={{marginLeft:'10px'}}/>
            </form>
        </div>
        {this.state.wait==0 ? '' :this.state.wait==1 ? <Loding />　: <div><SerchCard gitinfo={this.state.data} /></div>}
        <BlogCard />
      <BlogCard1 />

      </div>
    )
  }
}
