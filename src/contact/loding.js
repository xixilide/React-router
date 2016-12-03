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
    <div className="text-center">
       <CircularProgress />
    </div>
  )
  }
}
export default Loding;
