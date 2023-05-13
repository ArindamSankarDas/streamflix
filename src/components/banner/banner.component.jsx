import { useRef, useState } from "react";
import {
  BannerContainer,
  BannerFadeEffect,
  BtnContainer,
  TitleAndInfo,
} from "./banner.styles";
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

      <TitleAndInfo>
        <h1>Narcos</h1>
        <BtnContainer>
          <div className="Play_and_Info">
            <button>
              <i className="fa-solid fa-play"></i>
              <span>Play</span>
            </button>
            <button>
              <i className="fa-solid fa-circle-info"></i>
              <span>More Info</span>
            </button>
          </div>
          <button onClick={handleclick}>
            {isMute ? (
              <i className="fa-sharp fa-solid fa-volume-xmark"></i>
            ) : (
              <i className="fa-solid fa-volume-high"></i>
            )}
          </button>
        </BtnContainer>
      </TitleAndInfo>
      <BannerFadeEffect />
    </BannerContainer>
  );
};

export default Banner;
