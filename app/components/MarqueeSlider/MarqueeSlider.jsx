import Image from "next/image";

const ContinuesSlider = (props) => {
  const {
    width,
    height,
    prefix,
    reverse,
    animationDuration,
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
            
        `}
      </style>

      <div className={`slideTrack${prefix}`}>
        {contents?.map((c, index) => {
          return (
            <div className={`slide${prefix}`} key={index}>
              <Image src={c} alt="" className="w-[170px]" />
            </div>
          );
        })}
        {/* Duplicate slides */}
        {contents?.map((c, index) => {
          return (
            <div className={`slide${prefix}`} key={index}>
              <Image src={c} alt="" className="w-[170px]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContinuesSlider;
