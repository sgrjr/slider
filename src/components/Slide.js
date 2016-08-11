import React from 'react';

class Slide extends React.Component {

  render() {

var itemStyle = {
  border:"none",
  height:"300px",
  width:"300px",
  display:"inline-block",
  lineHeight:"100%",
  fontSize:"30px",
  textAlign:"center",
  verticalAlign:"middle",
  backgroundColor:"gray",
  color:"white",
  transform: "rotateY(30deg)",
  backgroundRepeat:"no-repeat",
  backgroundSize:"100% 300px",
  zIndex:1,
  overflow:"hidden",
	marginTop:"70px",
  marginLeft:"50px",
	padding:0,
	transition: "all 1s",
  opacity:".7",
  boxShadow: "10px 10px 5px #888888"
};

var imageStyle = {
  border:"none",
  width:"100%"
};

var captionStyle = {
  border:"none",
  position:"absolute",
  bottom:10,
  left:15
};

if(this.props.shouldFocus){
 itemStyle.backgroundColor = "#46465f";
 itemStyle.transform = "rotateY(0deg)";
 itemStyle.transform = "scale(1.3)";
 itemStyle.zIndex = "100";
 itemStyle.opacity = "1";
}
    return (<div data-id={this.props.id}
                style={itemStyle}>
                <h2 style={captionStyle}>{this.props.caption}</h2>
                <img style={imageStyle} src={this.props.image} />
            </div>);
  }

}

module.exports = Slide;
