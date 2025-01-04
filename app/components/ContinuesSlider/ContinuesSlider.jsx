import Recommendations from "app/components/LinkdienRecommendations/Recommendations";

const ContinuesSlider = (props) => {
  const {
    width,
    mobileWidth,
    mobileHeight = 0,
    mobileGap = 0,
    height,
    prefix,
    reverse,
    animationDuration,
    mobileAnimationDuration = animationDuration,
    contents,
    gap,
    className,
  } = props;

  return (
    <div className={`slider${prefix} ${className ? className : ""}`}>
      <style>
        {`
            .slider${prefix}{
              width: 100%;
              height: ${height ? height + "px" : "auto"};
              overflow: hidden;
              position: relative;
            }

            .slideTrack${prefix}{
                display: flex;
                width: calc(${width}px * ${contents?.length * 2});
                animation: scroll${prefix} ${animationDuration}s linear infinite;
                gap: ${gap ? gap + "px" : ""}
            }

            .slide${prefix}{
              width: ${width}px;
              height: ${height ? height + "px" : "auto"};
              line-height: 100px;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              box-sizing: border-box;
              flex-shrink: 0;
            }
            
            @keyframes scroll${prefix} {
              0% {
                transform: ${
                  reverse
                    ? `translateX(calc(-${width}px * ${contents?.length}))`
                    : "translateX(0)"
                } 
              }
              100% {
                transform: ${
                  reverse
                    ? "translateX(0)"
                    : `translateX(calc(-${width}px * ${contents?.length}))`
                }
              }
            }
            @media only screen and (max-width: 600px) {
              .slideTrack${prefix}{
                  display: flex;
                  width: calc(${mobileWidth}px * ${contents?.length * 2});
                  animation: scroll${prefix} ${mobileAnimationDuration}s linear infinite;
                  gap: ${mobileGap ? mobileGap + "px" : ""}
              }
              .slide${prefix}{
                width: ${mobileWidth}px;
                height: ${mobileHeight ? mobileHeight + "px" : "auto"};
                line-height: 100px;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                flex-shrink: 0;
                padding: 35px;
              }

              .slider${prefix}{
                width: 100%;
                height: ${mobileHeight ? mobileHeight + "px" : "auto"};
              }

                          @keyframes scroll${prefix} {
              0% {
                transform: ${
                  reverse
                    ? `translateX(calc(-${mobileWidth}px * ${contents?.length}))`
                    : "translateX(0)"
                } 
              }
              100% {
                transform: ${
                  reverse
                    ? "translateX(0)"
                    : `translateX(calc(-${mobileWidth}px * ${contents?.length}))`
                }
              }
            }
            }
        `}
      </style>

      <div className={`slideTrack${prefix}`}>
        {contents?.map((content, index) => {
          return (
            <div className={`slide${prefix}`} key={index}>
              <Recommendations {...content} />
            </div>
          );
        })}
        {/* Duplicate slides */}
        {contents?.map((content, index) => {
          return (
            <div className={`slide${prefix}`} key={index}>
              <Recommendations {...content} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContinuesSlider;
