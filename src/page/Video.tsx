const Video = () => {
  return (
    <div className="VideoContainer">
      <video
        className="VideoExemplo"
        src="https://video.wixstatic.com/video/0c2907_480766b76e19418ca8fe63d7b4394ecd/1080p/mp4/file.mp4"
        autoPlay
        loop
        playsInline
        controls
      />
    </div>
  );
};

export default Video;
