import React, { PropTypes } from 'react'
import { getText } from '../utils/helper';
import {  Link } from 'react-router';

class BlogText extends React.Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    getText()
      .then( (recData) => {
        this.setState({
          data:recData.getText
        })
      });
  }
  render () {
    let address=`item1/${this.props.url}`;

    return(
      <div>
          <li className="list-group-item"　key={this.props.index}>
            <Link to={address} style={{ textDecoration: 'none' }}>
              <span> {this.props.title}</span>
            </Link>
          </li>

      </div>
    )
  }

}
BlogText.defaultProps={
   index:"1",
   title:'这里是标题'
}
BlogText.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default BlogText;
