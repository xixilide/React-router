import React, { PropTypes } from 'react'
import { getJson } from '../utils/helper';
import { getText } from '../utils/helper';
import {  Link } from 'react-router';
import Blog from './blog';
import BlogText from './blogtext';
class Home extends React.Component {
  constructor(){
   super();
   this.state={
    data:[],
    dataI:[],
     wait:true
   }
 }
 componentDidMount(){
   getJson()
     .then( (recData) => {
       this.setState({
         data:recData.getJson,
         wait:false
       })
     });
     getText()
       .then( (recData) => {
         this.setState({
           dataI:recData.getText,
           wait:false
         })
       });
 }

  render () {

    return(
      <div className="content-warp">
        <div className="jumbotron home_contain ">
          <h1 className="text-center">Hi! I Am xixilide</h1>
          <p className="text-center">As long as your heart is sunny, no rain in your life. <br />
            只要你的心是晴朗的，你的人生里就没有雨天。by --闫进霞</p>
       </div>
       <div className="row">
         <div className="col-sm-6 col-md-4">
           <div className="thumbnail">
             <div className="caption">
               <h3>心情随笔</h3>
               <p>   草木的芬芳荡漾在空气中，微风吹皱水面，打碎桥的倒影，垂柳依依，一群鸭子拖起长长的涟漪，在水面游过，
                 一直游进我的记忆。</p>
               <p>   我不愿回忆也不愿追问，时间停在那场深秋，那些鸭子游得好不自在，我看得出神，甚至想成为一只鸭子就那么什么都不想的和你游下去多好，
                  但深情早已被锁在那个回不来的夏天。我永远记得那一场出走，
                  带着我偏执的爱情奋不顾身去找你。我不曾后悔过，那是我欠你的勇气，但你欠我的却是一场深情。</p>
                <p><a href="#" className="btn btn-primary" role="button">MORE ></a></p>
      </div>
      </div>
    </div>
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail thumbnail1">
          <div className="caption">
            <h3>博客日志</h3>
            <div className="list-group">
                {this.state.data.map( (item,index) => <Blog index={item.index} title={item.title} key={index} url={item.url}/> ) }
           </div>
          <p><a href="#" className="btn btn-primary" role="button"> MORE > </a></p>
     </div>
   </div>
 </div>
 <div className="col-sm-6 col-md-4">
   <div className="thumbnail thumbnail1">
      <div className="caption">
        <h3>文章推荐</h3>
          <div className="list-group">
              {this.state.dataI.map( (item1,index) => <BlogText index={item1.index} title={item1.title} key={index} url={item1.url} /> ) }
        </div>
        <p><a href="#" className="btn btn-primary" role="button">MORE > </a></p>
        </div>
      </div>
    </div>
  </div>

</div>
    )
  }
}


export default Home;
