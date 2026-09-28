
export default function WelcomePageVideo() {
    return (
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video-background">
          <source src="/videos/welcomePageVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional: Overlay to make text more readable */}
        <div className="video-overlay"></div>
      </div>
    );
  }
  