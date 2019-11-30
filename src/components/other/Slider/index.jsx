import React from 'react';
import Carousel from 'react-material-ui-carousel';

import './style.scss'
export const Slider = (props) => {
  var count = props.count;
  var list = [];
  for(let i=1; i<= count; i++){
    var style= {
      background : '#'+Math.floor(Math.random()*16777215).toString(16)
    };
    list.push(<div style={style} key={i}><span>{i}</span></div>)
  }

  return(
    <Carousel animation='slide' interval="1000">
      {
        list
      }
    </Carousel>
  )
}
