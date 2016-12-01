import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Img1 from  '../img/f.jpg'
class SerchCard extends React.Component {
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
    let info = this.props.gitinfo;
    return(
      <div>
          <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange.bind(this)}>
           <CardHeader
             title={info.login}
             subtitle="2016.4"
             avatar={info.avatar_url}
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
           <img src={Img1} />
         </CardMedia>
         <CardTitle title="talent" subtitle="beautiful" expandable={true} />
         <CardText expandable={true}>
          <p> {info.bio}</p>
         <p>Like a person, began in appearance, in talent, loyal to the man.
           The broader than the sea, is the heart;
           the most beautiful is not the future, today.</p>
         </CardText>
         <CardActions>
           <FlatButton label="Expand" onTouchTap={this.handleExpand.bind(this)} />
           <FlatButton label="Reduce" onTouchTap={this.handleReduce.bind(this)} />
         </CardActions>
       </Card>
      </div>
    )
  }
}

export default SerchCard;
