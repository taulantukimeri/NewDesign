import React, { useState } from 'react';
import '../../../styles/AdSection/AdSection4.scss';


    const ImageSlider = ({ slides, currentIndex, goToCurrent }) => {
        const [currentIdx, setCurrentIdx] = useState(currentIndex || 0);

        // console.log('cuuuuuuuuuuurrentIndex:: ', currentIndex, currentIdx)

        const slideStyles = {
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url(${slides[currentIdx].pic})`,
        };
      
        const handleIndexChange = (index) => {
          setCurrentIdx(index);
         goToCurrent(index)
        };


            // handleIndexChange(goToCurrent);

      
        const goToPrevious = () => {
          const isFirstSlide = currentIdx === 0;
          const newIndex = isFirstSlide ? slides.length - 1 : currentIdx - 1;
          handleIndexChange(newIndex);
        };
      
        const goToNext = () => {
          const isLastSlide = currentIdx === slides.length - 1;
          const newIndex = isLastSlide ? 0 : currentIdx + 1;
          handleIndexChange(newIndex);
        };
      
        return (
          <div className='sliderStyles'>
            <div>
              <span className="btn-left" onClick={goToPrevious}>&#x2039;</span>
            </div>
            <div>
              <span className="btn-right" onClick={goToNext}>&#x203A;</span>
            </div>
            <div style={slideStyles} className='adsection-content-slider'>

                <h3>{slides[currentIdx].header}</h3>
                <p>{slides[currentIdx].paragraph}</p>

            </div>
          </div>
        );
      };
      
      export default ImageSlider;