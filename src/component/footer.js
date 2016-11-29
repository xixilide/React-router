import React, { PropTypes } from 'react'

class  Footer extends React.Component {
  render () {
    let styles = {
      ul:{
        width:'100vw',
        height:'24px',
        marginLeft:'40vw'
      },
      li:{

        float:'left',
        listStyle:'none',
        color:'#fff'
      },
      a:{
        textDecoration: 'none',
        color:'#fff'
      },
      p:{
        marginTop:'20px',
        color:'#fff',
        clear:'both'
      }
    }
    return(
      <div className="footer">
        <div className="text-center">
          <ul style={styles.ul}>
            <li style={styles.li}><a herf="#" style={styles.a}>| 赞助本站 |</a></li>
            <li style={styles.li}><a herf="#" style={styles.a}>| 博客好友 |</a></li>
            <li style={styles.li}><a herf="#" style={styles.a}>| 留言板  |</a></li>
            <li style={styles.li}><a herf="#" style={styles.a}>| 在线投稿 |</a></li>
          </ul>
        </div>
        <p className="text-center" style={styles.p}>Copyright © 2015-2016 闫进霞个人博客
          Powered by WordPress, Theme by xixilide.</p>
        <p className="text-center" style={styles.p}>备案号：苏ICP备13026333号-1</p>

      </div>
    )
  }
}

export default Footer ;
