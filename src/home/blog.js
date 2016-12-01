import React, { PropTypes } from 'react'
import { getJson } from '../utils/helper';
import {  Link } from 'react-router';

class Blog extends React.Component {
  constructor(){
    super();

  }
  componentDidMount(){
    getJson()
      .then( (recData) => {
        this.setState({
          data:recData.getJson
        })
      });
  }
  render () {
    let address=`item/${this.props.url}`;

    return(
      <div>
          <li className="list-group-item"　key={this.props.index}>
            <Link to={address} style={{ textDecoration: 'none' }}>
              <span> {this.props.index} {this.props.title}</span>
            </Link>
          </li>

      </div>
    )
  }

}
// Blog.defaultProps={
//    index:1,
//    title:'这里是标题'
// }
Blog.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default Blog;
