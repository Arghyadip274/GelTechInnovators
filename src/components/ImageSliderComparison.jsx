import React, { useState } from 'react';

const ImageSliderComparison = ({ image1, image2 }) => {
  const [sliderValue, setSliderValue] = useState(50); // Default to 50% visibility

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value); // Update the slider value based on user input
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto' }}> {/* Increased maxWidth */}
      {/* Title for the Image Slider */}
      <h2 className="text-3xl font-semibold text-center mb-10">Visual Difference between the kinds</h2>
      <div style={{ display: 'flex', width: '100%', height: '600px', overflow: 'hidden', position: 'relative' }}> {/* Increased height */}
        {/* First Image Container */}
        <div style={{ width: `${sliderValue}%`, overflow: 'hidden', position: 'relative', transition: 'width 0.5s ease' }}> {/* Added transition */}
          <img
            src={image1}
            alt="Comparison 1"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure the image covers the container
          />
          <span style={{ position: 'absolute', left: '10px', top: '10px', color: 'white', fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px' }}>
            Fuel Injector (liquid)
          </span>
        </div>
        {/* Second Image (static) */}
        <div style={{ width: `${100 - sliderValue}%`, overflow: 'hidden', position: 'relative', transition: 'width 0.5s ease' }}> {/* Added transition */}
          <img
            src={image2}
            alt="Comparison 2"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure the image covers the container
          />
          <span style={{ position: 'absolute', right: '10px', top: '10px', color: 'white', fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px' }}>
            Gel Fuel Injector
          </span>
        </div>
      </div>
      {/* Instructional Text for the Slider */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p style={{ margin: '0', fontSize: '16px', fontStyle: 'italic' }}> {/* Changed fontWeight to fontStyle for italics */}
          Drag the slider to compare the two images
        </p>
      </div>
      {/* Slider input with text on both ends */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          style={{
            flex: 1,
            cursor: 'pointer', // Change cursor to pointer for better UX
          }}
        />
      </div>
    </div>
  );
};

export default ImageSliderComparison;