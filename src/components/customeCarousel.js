import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Slider_1_1 from '../assets/images/Slider_1_1.jpg'
import Slider_1_2 from '../assets/images/Slider_1_2.jpg'
import Slider_1_3 from '../assets/images/Slider_1_3.jpg'
import Slider_1_4 from '../assets/images/Slider_1_4.jpg'
import Slider_1_5 from '../assets/images/Slider_1_5.jpg'
import Slider_2_1 from '../assets/images/Slider_2_1.jpg'
import Slider_2_2 from '../assets/images/Slider_2_2.jpg'
import Slider_2_3 from '../assets/images/Slider_2_3.jpg'
import Slider_2_4 from '../assets/images/Slider_2_4.jpg'
import Slider_2_5 from '../assets/images/Slider_2_5.jpg'
import Slider_3_1 from '../assets/images/Slider_3_1.jpg'
import Slider_3_2 from '../assets/images/Slider_3_2.jpg'
import Slider_3_3 from '../assets/images/Slider_3_3.jpg'
import Slider_3_4 from '../assets/images/Slider_3_4.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader




export default function CarouselCustom({whichSlider, anotherSlider}) {
  const renderCustomIndicator = (onClickHandler, isSelected, index, label) => {
    let strBase = "inline-block w-[0.5em] h-[0.5em] mx-[1%] rounded-[50%] ";
    let strStyle = isSelected ? strBase + ' bg-[#636775]' : strBase + ' bg-[#C5C6CB] ';

    return (
      <div
        className={strStyle}
        key={index}
        onClick={onClickHandler}
        role='button'
        aria-label={`${label} ${index + 1}`}
      ></div>
    );
  };

  const renderCustomItem = (item, { isSelected }) => {
      let customStyles = {objectFit:'cover', height:'50 0px',borderRadius:'0.75em', padding:'3%'}
      if (isSelected) {
        customStyles.borderRadius = '1.25em';
      } else {
        customStyles.borderRadius = '1.6em';
        customStyles.padding = "8%"
   
      }
     return React.cloneElement(item,{style:customStyles});
    
  }
 
  return (

      <Carousel
        showArrows={false}
        centerMode={true}
        centerSlidePercentage={80}
        showStatus={false}
        useKeyboardArrows={true}
        showThumbs={false}
        emulateTouch={true}
        renderItem={renderCustomItem}
        renderIndicator={renderCustomIndicator}
      >
      <img  src={whichSlider ? (anotherSlider ? Slider_3_4 : Slider_1_1) : Slider_2_1} alt='grilka' />
      <img src={whichSlider ? (anotherSlider ? Slider_3_1 : Slider_1_2) : Slider_2_2} alt='grilka' />
      <img src={whichSlider ? (anotherSlider ? Slider_3_2 : Slider_1_3) : Slider_2_3} alt='grilka' />
      <img src={whichSlider ? (anotherSlider ? Slider_3_3 : Slider_1_4) : Slider_2_4} alt='grilka' />
      <img src={whichSlider ? (anotherSlider ? Slider_3_4 : Slider_1_5) : Slider_2_5} alt='grilka' />
      </Carousel>
    
  );
}