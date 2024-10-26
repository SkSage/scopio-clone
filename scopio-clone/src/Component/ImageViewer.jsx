import React, { useState, useRef, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './ImageViewer.css';

function ImageViewer({ src }) {
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isEditing, setIsEditing] = useState(false);

  const imageRef = useRef(null);

  const handleBrightnessChange = (event) => {
    setBrightness(event.target.value);
  };

  const handleContrastChange = (event) => {
    setContrast(event.target.value);
  };

  const handleZoomChange = (event) => {
    setZoomLevel(parseFloat(event.target.value));
  };

  const handleReset = () => {
    setBrightness(0);
    setContrast(0);
    setZoomLevel(1);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const filterStyles = {
    filter: `brightness(${100 + parseInt(brightness)}%) contrast(${100 + parseInt(contrast)}%)`,
    width: '100%',
    maxWidth: '800px'
  };

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.cursor = isEditing ? "crosshair" : "default";
    }
  }, [isEditing]);

  return (
    <div>
      <div className="image-container">
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={3}
          defaultPositionX={0}
          defaultPositionY={0}
        >
          <TransformComponent>
            <img
              ref={imageRef}
              src={src}
              alt="Viewable content"
              style={filterStyles}
            />
          </TransformComponent>
        </TransformWrapper>
      </div>

      <div className="controls">
        <div className="top-controls">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        
        <div className="slider-controls">
          <div className="control-group">
            <label>Brightness:</label>
            <input
              type="range"
              min="-100"
              max="100"
              value={brightness}
              onChange={handleBrightnessChange}
            />
          </div>

          <div className="control-group">
            <label>Contrast:</label>
            <input
              type="range"
              min="-100"
              max="100"
              value={contrast}
              onChange={handleContrastChange}
            />
          </div>

          <div className="control-group">
            <label>Zoom:</label>
            <input
              type="range"
              min="1"
              max="3"
              value={zoomLevel}
              step="0.1"
              onChange={handleZoomChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageViewer;
