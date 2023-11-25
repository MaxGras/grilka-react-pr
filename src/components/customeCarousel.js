import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider1_img_1 from '../../src/assets/images/carousel_1.jpg'
import Slider1_img_2 from '../../src/assets/images/carousel_6.jpg'
import Slider1_img_3 from '../../src/assets/images/carousel_5.jpg'
import Slider1_img_4 from '../../src/assets/images/carousel_2.png'
import Slider1_img_5 from '../../src/assets/images/carousel_3.png'
import Slider1_img_6 from '../../src/assets/images/carousel_4.jpg'
import Slider2_img_1 from '../../src/assets/images/carousel_second_1.png'
import Slider2_img_2 from '../../src/assets/images/carousel_second_2.png'
import Slider2_img_3 from '../../src/assets/images/carousel_second_6.png'
import Slider2_img_4 from '../../src/assets/images/carousel_second_4.png'
import Slider2_img_5 from '../../src/assets/images/carousel_second_5.png'
import Slider2_img_6 from '../../src/assets/images/carousel_second_3.png'
export default function CarouselCustom({whichSlider}) {
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
      let customStyles = {objectFit:'cover', height:'250px',borderRadius:'0.75em', padding:'3%'}
      if (isSelected) {
        customStyles.borderRadius = '1.25em';
      } else {
        customStyles.borderRadius = '1.6em';
        customStyles.padding = "5%"
      }
     return React.cloneElement(item,{style:customStyles});
    
  }
  return (
    <Carousel showArrows={false} centerMode={true} centerSlidePercentage={80} showStatus={false} useKeyboardArrows={true} showThumbs={false} emulateTouch={true} renderItem={renderCustomItem} renderIndicator={renderCustomIndicator}>


      <img  src={(whichSlider)?Slider1_img_1:Slider2_img_1} alt='grilka 1 '></img>
      <img  src={(whichSlider)?Slider1_img_2:Slider2_img_2} alt='grilka 2'></img>
      <img  src={(whichSlider)?Slider1_img_3:Slider2_img_3} alt='grilka 3'></img>
      <img  src={(whichSlider)?Slider1_img_4:Slider2_img_4} alt='grilka 4'></img>
      <img  src={(whichSlider)?Slider1_img_5:Slider2_img_5} alt='grilka 5'></img>
      <img  src={(whichSlider)?Slider1_img_6:Slider2_img_6} alt='grilka 6'></img>
    </Carousel>
  )
}