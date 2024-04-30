import React from "react";
import VideoPlayer from "../VideoPlayer";

export default function Page2point1() {
  return (
    <div className="custom-bg flex flex-col items-center justify-center p-6 min-h-screen">
      <div className="custom-bg flex flex-col items-center justify-center font-sans p-6 min-h-screen">
        <div className="text-center mb-8">
          <p className="font-poor-story text-2xl font-semibold">
            To travel 7 cities! And work on projects in San Francsico, Berlin,
            London, Taipei, Seoul, and Beuno Aires, and India (didn't go bc of
            COVID)!
          </p>
        </div>
        <div className="flex justify-center">
          <VideoPlayer src="/rotation.mp4" autoplay={true} loop={true} />
        </div>
      </div>
    </div>
  );
}
