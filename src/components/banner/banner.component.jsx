import { useRef, useState } from "react";
import { BannerContainer, BannerFadeEffect, TitleAndInfo } from "./banner.styles";
import mutePng from "../../assets/images/mute.png";
import volumePng from "../../assets/images/volume.png";
import narcos from "../../assets/videos/Narcos - Opening Credits [HD] - Netflix.mp4";

const Banner = () => {
  const videoRef = useRef(null);
  const [isMute, setIsMute] = useState(true);

  const handleclick = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMute((muteState) => !muteState);
  };

  return (
    <BannerContainer>
      <video ref={videoRef} width={"100%"} height={"100%"} loop autoPlay muted>
        <source src={narcos} type="video/mp4" />
      </video>

      <button onClick={handleclick}>
        {isMute ? (
          <img src={mutePng} alt="volume" />
        ) : (
          <img src={volumePng} alt="mute" />
        )}
      </button>
      <TitleAndInfo>
        <h1>Narcos</h1>
        <div className="btn-container">
          <button>
            <i className="fa-solid fa-play"></i>
            <span>Play</span>
          </button>
          <button>
            <i className="fa-solid fa-circle-info"></i>
            <span>More Info</span>
          </button>
        </div>
      </TitleAndInfo>
      <BannerFadeEffect />
    </BannerContainer>
  );
};

export default Banner;
