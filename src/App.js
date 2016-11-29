import React,{Component, PropTypes} from 'react'
import MeunBar from './component/menuBar';
import Footer from './component/footer';
import Header from './component/header';


export default class App extends Component {
  render(){
    return(
      <div>
        <MeunBar />
        {this.props.children}
          <Footer />
      </div>
    )
  }
}
