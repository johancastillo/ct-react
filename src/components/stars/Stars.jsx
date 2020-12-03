import React from 'react';

let star = null;

const validationStars = nStars => {
  if(nStars === 1){
    star = {
      one: "icon-star-full",
      two: "icon-star-empty",
      three: "icon-star-empty",
      four: "icon-star-empty",
      five: "icon-star-empty"
    }
  }else if(nStars === 1.5){
    star = {
      one: "icon-star-full",
      two: "icon-star-half",
      three: "icon-star-empty",
      four: "icon-star-empty",
      five: "icon-star-empty"
    }
  }else if(nStars === 2){
    star = {
      one: "icon-star-full",
      two: "icon-star-full",
      three: "icon-star-empty",
      four: "icon-star-empty",
      five: "icon-star-empty"
    }
  }else if(nStars === 2.5){
    star = {
      one: "icon-star-full",
      two: "icon-star-full",
      three: "icon-star-half",
      four: "icon-star-empty",
      five: "icon-star-empty"
    }
  }else if(nStars === 3){
    star = {
      one: "icon-star-full",
      two: "icon-star-full",
      three: "icon-star-full",
      four: "icon-star-empty",
      five: "icon-star-empty"
    }
  }else if(nStars === 3.5){
    star = {
      one: "icon-star-full",
      two: "icon-star-full",
      three: "icon-star-full",
      four: "icon-star-half",
      five: "icon-star-empty"
    }
  }else if(nStars === 4){
    star = {
      one: "icon-star-full",
      two: "icon-star-full",
      three: "icon-star-full",
      four: "icon-star-full",
      five: "icon-star-empty"
    }
  }else if(nStars === 4.5){
    star = {
      one: "icon-star-full",
      two: "icon-star-full",
      three: "icon-star-full",
      four: "icon-star-full",
      five: "icon-star-half"
    }
  }else if(nStars === 5){
    star = {
      one: "icon-star-full",
      two: "icon-star-full",
      three: "icon-star-full",
      four: "icon-star-full",
      five: "icon-star-full"
    }
  }
}



const Stars = ({numberStars}) => (
    <>
    {validationStars(numberStars)}
    <div className="star-color">
        <span className={star.one}></span>
        <span className={star.two}></span>
        <span className={star.three}></span>
        <span className={star.four}></span>
        <span className={star.five}></span>
    </div>
    </>
);

export default Stars;