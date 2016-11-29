import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Img3 from '../img/3.jpg';
import Img4 from '../img/x.jpg';


class BlogCard1 extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
    };
  }
handleExpandChange(expanded){
  this.setState({expanded: expanded});
}
handleToggle(event, toggle){
  this.setState({expanded: toggle});
}

handleExpand(){
  this.setState({expanded: true});
}

handleReduce(){
    this.setState({expanded: false});
}
  render () {
    return(
      <div>
        <MuiThemeProvider>
          <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange.bind(this)}>
           <CardHeader
             title="Moxike"
             subtitle="2014.7"
             avatar={Img4}
             actAsExpander={true}
             showExpandableButton={true}
           />
         <CardText>
           <Toggle
             toggled={this.state.expanded}
             onToggle={this.handleToggle.bind(this)}
             labelPosition="right"
             label="This toggle controls the expanded state of the component."
           />
         </CardText>
         <CardMedia
           expandable={true}
           overlay={<CardTitle title="Picture" subtitle="Overlay subtitle" />}
         >
           <img src={Img3} />
         </CardMedia>
         <CardTitle title="power" subtitle="dream" expandable={true} />
         <CardText expandable={true}>
          <p> Many people start a career with a dream, then get busy forgetting it.
             A man is but the product of his thoughts.what he thinks,he becomes</p>
         <p>Everyone has his inherent power, which is easily concealed by habits,
           blurred by time, and eroded by laziness.</p>
         </CardText>
         <CardActions>
           <FlatButton label="Expand" onTouchTap={this.handleExpand.bind(this)} />
           <FlatButton label="Reduce" onTouchTap={this.handleReduce.bind(this)} />
         </CardActions>
       </Card>
      </MuiThemeProvider>
      </div>
    )
  }
}

export default BlogCard1;
