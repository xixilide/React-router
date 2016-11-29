import React, { PropTypes } from 'react'

class Home extends React.Component {

  render () {
    let styles= {
      home:{
        backgroundColor:'#B39DDB'
      }
    }
    return(
      <div className="content-warp">
        <div className="jumbotron" style={styles.home}>
          <h1 className="text-center">Welcome!</h1>
          <p className="text-center">xixilide</p>
          <p><a className="btn btn-primary btn-lg" href="https://github.com/xixilide" role="button">kown More</a></p>
       </div>
       </div>
    )
  }
}

export default Home;
