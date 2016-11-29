import React, { PropTypes } from 'react';

import Img1 from '../img/a.png'
import Img2 from '../img/b.png'
import Img3 from '../img/c.png'
import Img4 from '../img/e.png'

class Work extends React.Component {

  render () {
    return(
      <div className="row">
          <div className="col-xs-6 col-md-3">
            <a href="#" className="thumbnail">
              <img src={Img1} />
                <h3>Thumbnail label</h3>
                <p>Thumbnail caption...</p>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="#" className="thumbnail">
              <img src={Img2} />
                <h3>Thumbnail label</h3>
                <p>Thumbnail caption...</p>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="#" className="thumbnail">
              <img src={Img3} />
                <h3>Thumbnail label</h3>
                <p>Thumbnail caption...</p>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="#" className="thumbnail">
              <img src={Img4} />
                <h3>Thumbnail label</h3>
                <p>Thumbnail caption...</p>
            </a>
          </div>
      </div>
    )
  }
}

export default Work;
