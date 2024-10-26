import React, { useState, useRef, useEffect } from "react";
import ImageMagnify from "react-image-magnify";

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
    setZoomLevel(event.target.value);
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
    filter: `brightness(${brightness}%) contrast(${contrast}%)`,
  };

  useEffect(() => {
    if (isEditing) {
      imageRef.current.style.cursor = "crosshair";
    } else {
      imageRef.current.style.cursor = "default";
    }
  }, [isEditing]);

  return (
    <div>
      <div>
        <ImageMagnify
          imageSrc={src}
          zoomImageSrc={src}
          enlargedImagePosition="over"
          zoomLevel={zoomLevel}
          className="image-viewer"
          style={filterStyles}
          ref={imageRef}
          // Add event handlers for editing (e.g., onMouseDown, onMouseUp, etc.)
        />
      </div>

      <div className="controls">
        <div className="top-controls">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleReset}>Reset</button>
          {/* Add other top controls like zoom in/out, etc. */}
        </div>
        <label>Brightness:</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={brightness}
          onChange={handleBrightnessChange}
        />

        <label>Contrast:</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={contrast}
          onChange={handleContrastChange}
        />

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
  );
}

export default ImageViewer;
