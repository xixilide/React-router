import React, { PropTypes } from 'react';

import Img1 from '../img/a.png'
import Img2 from '../img/b.png'
import Img3 from '../img/c.png'
import Img4 from '../img/e.png'
import Img5 from '../img/c1.jpg'
import Img6 from '../img/c2.jpg'
import Img7 from '../img/c3.jpg'
import Img8 from '../img/c4.jpg'

class Work extends React.Component {

  render () {
    return(
        <div className="row row1">
          <div className="col-xs-6 col-md-3">
            <a href="http://xixilide.coding.me/mydoc" className="thumbnail">
              <img src={Img1} />
            <h4>我的js学习笔记</h4>
          <p>关于javascript的知识点</p>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="#" className="thumbnail">
              <img src={Img2} />
            <h4>React项目笔记</h4>
          <p>初学React基础知识的学习笔记</p>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="http://xixilide.coding.me/API" className="thumbnail">
              <img src={Img3} />
            <h4>Express－React 框架实例笔记</h4>
              <p>记录一个完整的项目</p>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="#" className="thumbnail">
              <img src={Img4} />
            <h4>mongoDB数据库</h4>
          <p>初学后台知识整理</p>
            </a>
          </div>
        <div><h1　style={{color:'#263238',padding:'20px'}} className="css76d94ee1316c23">作品合集</h1></div>
        <div className="row row2">
          <div className="col-xs-6 col-md-3">
            <a href="https://xixilide.github.io/maisi.html" className="thumbnail">
              <img src={Img5} />
            <h4>作品一：迈思设计</h4>
              <p>2016.5.6</p>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="http://model.100autoshow.com/" className="thumbnail">
              <img src={Img6} />
            <h4>作品二：模特大赛</h4>
              <p>2015.10.6</p>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="http://www.cnpickups.com" className="thumbnail">
              <img src={Img7} />
            <h4>作品三：皮卡网站</h4>
              <p>2016.1.5</p>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="http://www.elutongxing.com" className="thumbnail">
              <img src={Img8} />
            <h4>作品四：ｅ路同行</h4>
              <p>2016.4.6</p>
            </a>
          </div>
      </div>
    </div>
    )
  }
}

export default Work;
