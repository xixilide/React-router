import React,{Component, PropTypes} from 'react';

import Echert from './aboutechert'
import Serch from './serch'

export default class About extends Component {



  render(){

    return(
      <div className="about_warp">
        <Serch />
        <Echert />
      </div>

    )
  }

}
