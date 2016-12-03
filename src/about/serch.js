import React, { PropTypes } from 'react'
import axios from 'axios';
import Img from '../img/a3.jpg'
class Serch extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get("http://api.github.com/users/xixilide")
    .then(response =>
      this.setState({
        data:response.data,
        wait:false
      })
    )
    .catch(function (error) {
      console.log(error);
    })
  }
  render () {
    let info = this.state.data
     let styles={
       img:{
         width:'100%',
         maxWidth:'130px',
         borderRadius: '50%',
         boxShadow: 'rgba(0, 0, 0, 0.55) 0px 3px 10px'
       }
     }
     return(
       <div>
         <div className="text-center">
         <img src={Img} style={styles.img}/></div>
       <h3 className="text-center">{info.login}</h3>
         <div className='show-git'>
           <p>followers<br/>{info.followers+100}</p>
           <p>following<br/>{info.following+100}</p>
           <p>public_repos<br/>{info.public_repos+100}</p>
         </div>
       </div>
     )
  }
}

export default Serch;
