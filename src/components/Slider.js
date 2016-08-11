import React from 'react';
import Slide from './Slide';

class Slider extends React.Component {

  constructor(props){
	super(props);

	this.state = {
	scroll: 0,
	windowSize: 0,
	slides : [
		{id:0, shouldFocus:true, caption:"filler", position:0, image:"/images/one.jpg"},
		{id:1, shouldFocus:false, caption:"filler", position:0, image:"/images/two.jpg"},
		{id:2, shouldFocus:false, caption:"filler", position:0, image:"/images/three.jpg"},
		{id:3, shouldFocus:false, caption:"1", position:0, image:"/images/four.jpg"},
		{id:4, shouldFocus:false, caption:"2", position:0, image:"/images/five.jpg"},
		{id:5, shouldFocus:false, caption:"3", position:0, image:"/images/six.jpg"},
		{id:6, shouldFocus:false, caption:"4", position:0, image:"/images/seven.jpg"},
		{id:7, shouldFocus:false, caption:"5", position:0, image:"/images/eight.jpg"},
		{id:8, shouldFocus:false, caption:"6", position:0, image:"/images/nine.jpg"},
		{id:9, shouldFocus:false, caption:"filler", position:0, image:"/images/ten.jpg"}
	]
	};

  }

  render() {

var carouselStyle = {
  width:"100%",
  border:"none",
  height:"500px",
  overflowX: "scroll",
  overflowY: "hidden",
  whiteSpace: "nowrap",
	perspective:"600px"
};

    return (
<div>
<div>
	<div style={carouselStyle} onLoad={this.scrollAction.bind(this)} onScroll={this.scrollAction.bind(this)}>
    <div style={{width:"30%", display:"inline-block"}}></div>
		{this.state.slides.map(function(el,i){
			return  <Slide key={i} caption={el.caption+" <br> <hr> <br>"+el.position} {...el} />;
		})}
		<div style={{width:"90%", display:"inline-block"}}></div>
	</div>
</div>

</div>
	);
  }

scrollAction(event){

  const ch = Array.prototype.slice.call(event.target.children);
  var newState = this.state;
  var scrollBar = event.target.scrollLeft;
	var maxWidth = event.target.clientWidth;
	var slideLength = newState.slides.length;

  var greater = maxWidth*.15;
	var less = greater+416;

ch.map(function(el){

	if(el.dataset.id !== undefined){

    newState.slides[el.dataset.id].position = Math.round(el.getBoundingClientRect().left);

	  if( el.getBoundingClientRect().left >= greater && el.getBoundingClientRect().left < less){
		  newState.slides[el.dataset.id].shouldFocus = true;
		}else{
		  newState.slides[el.dataset.id].shouldFocus = false;
	  }
	}

  });
newState.scroll = scrollBar;
newState.windowSize = maxWidth;

this.setState(newState);

}


}

module.exports = Slider;
