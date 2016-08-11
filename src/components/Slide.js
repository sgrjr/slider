import React from 'react';

import onePic from '../../dist/images/one.jpg';
import twoPic from '../../dist/images/two.jpg';
import threePic from '../../dist/images/three.jpg';
import fourPic from '../../dist/images/four.jpg';
import fivePic from '../../dist/images/five.jpg';
import sixPic from '../../dist/images/six.jpg';
import sevenPic from '../../dist/images/seven.jpg';
import eightPic from '../../dist/images/eight.jpg';
import ninePic from '../../dist/images/nine.jpg';
import tenPic from '../../dist/images/ten.jpg';

class Slide extends React.Component {

  render() {

var itemStyle = {
  border:"none",
  height:"300",
	minWidth:"400px",
  display:"inline-block",
  lineHeight:"100%",
  fontSize:"30px",
  textAlign:"center",
  verticalAlign:"middle",
  backgroundColor:"gray",
  color:"white",
  transform: "rotateY(30deg)",
  backgroundImage:"url("+this.props.image+")",
  backgroundSize:"100%",
  zIndex:1,
  overflow:"hidden",
	marginTop:"70px",
	padding:0,
	position:"relative",
	left:"-35px",
	transition: "all 1s",
  opacity:".7"
};

if(this.props.shouldFocus){
 itemStyle.backgroundColor = "red";
 itemStyle.transform = "rotateY(0deg)";
 itemStyle.transform = "scale(1.3)";
 itemStyle.zIndex = "10";
 itemStyle.opacity = "1";
}
    return (<div data-id={this.props.id} style={itemStyle} dangerouslySetInnerHTML={{__html: this.props.caption}}></div>);
  }

}

module.exports = Slide;
