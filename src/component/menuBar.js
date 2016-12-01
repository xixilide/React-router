import React, { PropTypes } from 'react'
import {  Link } from 'react-router';

class MeunBar extends React.Component {
  render () {
    let styles = {
      nav:{
        width:'100vw',
        height:'10vh',
        fontSize:'20px',
      },
      li:{
        width:'25vw',
        height:'10vh'
      }
    }
    return(
      <div>
          <ul className="nav nav-pills nav-justified" style={styles.nav}>
            <li style={styles.li}><Link to="/" onlyActiveOnIndex={true} activeStyle={{backgroundColor:'#F48FB1'}} >Home</Link></li>
            <li style={styles.li}><Link to="/work" activeStyle={{backgroundColor:'#F48FB1'}}>Work</Link></li>
            <li style={styles.li}><Link to="/contact" activeStyle={{backgroundColor:'#F48FB1'}}>Contact</Link></li>
            <li style={styles.li}><Link to="/about" activeStyle={{backgroundColor:'#F48FB1'}}>About</Link></li>
          </ul>
        {this.props.children}
      </div>
    )
  }
}

MeunBar.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MeunBar;
