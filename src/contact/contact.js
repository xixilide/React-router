import React,{Component, PropTypes} from 'react';
import axios from 'axios';


export default class Contact extends Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/xixilide')
    .then( res => this.setState({
      data:res.data,
      wait:false
    }))
  }
  render(){
    return(
      <div>
        {this.state.wait? '正在加载数据'　: <p>个人简介：{this.state.data.bio}</p>}
      </div>
    )
  }
}
