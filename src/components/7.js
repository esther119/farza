import React, { useState } from "react";

export default function Page7() {
  const [showAlternateImage, setShowAlternateImage] = useState(false);
  const ride = new Audio("/ride.mp3");
  const [hideText, setHideText] = useState(false);

  const handleImageClick = () => {
    // Toggle the state to show/hide the alternate image
    setShowAlternateImage(!showAlternateImage);
    setHideText(!hideText);
    ride.play();
  };

  return (
    <div className="custom-bg flex flex-col items-center justify-center p-6 min-h-screen">
      <div className="custom-bg flex flex-col items-center justify-center font-sans p-6 min-h-screen">
        <div className="w-full max-w-sm">
          {!hideText && (
            <p className="font-poor-story text-center font-semibold text-2xl mt-8 mb-8">
              She wanted to be invited to meet you in person. Bc she really
              wants to join{" "}
              <span className="text-4xl text-red-500">the ride</span> .
            </p>
          )}
          <div className="flex items-center justify-center h-full">
            {showAlternateImage ? (
              <img src="/ride.png" alt="Alternate" onClick={handleImageClick} />
            ) : (
              <img src="/7.png" alt="7" onClick={handleImageClick} />
            )}
          </div>
          {!hideText && (
            <p className="font-poor-story text-center font-semibold text-2xl mt-8 mb-8">
              (Don't press the button)
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
