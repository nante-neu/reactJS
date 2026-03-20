import React, { useRef } from 'react';
import Webcam from 'react-webcam';


const DetectFace = () => {
  const webcamRef = useRef(null);

  const captureAndVerify = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    
    // 1. Convert DataURL to Blob
    const response = await fetch(imageSrc);
    const blob = await response.blob();
    
    // 2. Wrap in FormData
    const formData = new FormData();
    formData.append('image', blob, 'face.jpg');

    try {
      // Capture the response in 'res'
      const res = await fetch('/api/verify-face/', {
        method: 'POST',
        body: formData,
      });

      // Only try to parse if the response is okay
      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      const data = await res.json();
      console.log("Server response:", data);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    
<div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center text-center">
  <div className="p-4 shadow-sm rounded bg-light">
    <h1 className="mb-4">Face Authentication</h1>
    
    <div className="overflow-hidden rounded border border-secondary mb-3">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
        className="d-block"
      />
    </div>

    <button 
      className="btn btn-primary btn-lg w-100" 
      onClick={captureAndVerify}
    >
      Capture & Verify
    </button>
  </div>
</div>

  );
};

export default DetectFace;
