import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class Loding extends React.Component {
  constructor(){
    super();
    this.state={
      wait:0
    }
  }
  render () {
  return(
    <div>
       <CircularProgress />
    </div>
  )
  }
}

export default Loding;
