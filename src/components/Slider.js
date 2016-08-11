import React from 'react';
import Slide from './Slide';

const dummySlidesDataStore = [
  {id:0, shouldFocus:true, caption:"filler", position:0, image:"/img/one.jpg"},
  {id:1, shouldFocus:false, caption:"filler", position:0, image:"/img/two.jpg"},
  {id:2, shouldFocus:false, caption:"filler", position:0, image:"/img/three.jpg"},
  {id:3, shouldFocus:false, caption:"1", position:0, image:"/img/four.jpg"},
  {id:4, shouldFocus:false, caption:"2", position:0, image:"/img/five.jpg"},
  {id:5, shouldFocus:false, caption:"3", position:0, image:"/img/six.jpg"},
  {id:6, shouldFocus:false, caption:"4", position:0, image:"/img/seven.jpg"},
  {id:7, shouldFocus:false, caption:"5", position:0, image:"/img/eight.jpg"},
  {id:8, shouldFocus:false, caption:"6", position:0, image:"/img/nine.jpg"},
  {id:9, shouldFocus:false, caption:"filler", position:0, image:"/img/ten.jpg"},
  {id:10, shouldFocus:false, caption:"filler", position:0, image:"http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"},
];

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

class Slider extends React.Component {

  constructor(props){
	super(props);

	this.state = {
	  scroll: 0,
	  windowSize: 0,
	  slides : dummySlidesDataStore
	};

  }

  render() {

    var mainStyle = {
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
      	<div style={mainStyle} onLoad={this.scrollAction.bind(this)} onScroll={this.scrollAction.bind(this)}>
          <div style={{width:"30%", display:"inline-block", overflow:"hidden"}}></div>
      		{this.state.slides.map(function(el,i){
      			return  <Slide key={i} {...el} />;
      		})}
      		<div style={{width:"90%", display:"inline-block"}}></div>
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
	var less = greater+370;

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
