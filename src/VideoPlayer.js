import React from "react";

const VideoPlayer = ({
  src,
  controls = true,
  autoplay = false,
  loop = false,
  width = "100%",
  height = "auto",
}) => {
  return (
    <video
      src={src}
      controls={controls}
      autoPlay={autoplay}
      loop={loop}
      width={width}
      height={height}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
