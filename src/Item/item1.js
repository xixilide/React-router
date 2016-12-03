import React, { PropTypes } from 'react';
import { getT } from '../utils/helper';
import hljs from 'highlight.js';
import marked from 'marked';
class ItemI extends React.Component {
  constructor(){
   super();
   this.state={
     data:[],
     wait:true
   }
 }
 componentDidMount(){
   let mdName = this.props.params.url;
   getT(mdName)
     .then( (recData) => {
       this.setState({
         data:recData.getT,
         wait:false
       })
     });
 }
  render () {
    marked.setOptions({
     highlight: function (code) {
       return hljs.highlightAuto(code).value;
     }
   });
    return(
      <div className="post-content">
          {this.state.wait ? '请稍等' : <div dangerouslySetInnerHTML={{__html: marked(this.state.data)}} />}
        </div>
    )
  }
}

export default ItemI;
