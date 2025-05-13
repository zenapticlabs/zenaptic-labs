import { InfiniteSlider } from "./MotionPrimitivesComponents/infinite-slider";
import { Cursor } from "./MotionPrimitivesComponents/cursor-spring";
export default function InfiniteSliderBasic(props) {
  let featuresList = props.featuresList || [];
  let animationDirection = props.animationDirection;
  let component = props.component;
  let speed = props.speed;
  let speedOnHover = props.speedOnHover;
  let direction = props.direction === "left-to-right" ? true : false;

  return (
    <>
      {component === "Text-Infinite-Slider" && (
        <InfiniteSlider
          gap={24}
          speedOnHover={speedOnHover}
          direction={animationDirection}
          speed={speed}
          reverse={direction}
          type="text"
        >
          {featuresList.map((item, index) => (
            <span
              key={index}
              className="px-4 py-3 text-2xl max-lg:text-xl rounded-full border border-[#DCDCDC] bg-[#d7d7d7d5] whitespace-nowrap max-lg:py-2 max-lg:px-4 bullet-dark"
            >
              {item}
            </span>
          ))}
        </InfiniteSlider>
      )}
      {component === "image-infinite-slider" && (
        <InfiniteSlider
          gap={24}
          direction="horizontal"
          speedOnHover={speedOnHover}
          speed={speed}
          reverse={direction}
          type="image"
        >
          {featuresList.map((item, index) => (
            <div
              key={index}
              className="flex relative flex-col justify-center items-start max-lg:items-start max-lg:justify-start gap-4 max-lg:gap-3 w-[520px] max-lg:w-[260px]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="rounded-lg w-[520px]   h-[390px] max-lg:w-[260px] max-lg:h-[195px] object-center object-contain transition-all ease-linear"
              />
              <span className=" max-lg:w-[260px] text-[18px] hidden max-lg:block font-bold heading-dark">
                Enhancing Case Management for Increased Efficiency
              </span>
              <span className="hidden max-lg:block px-4 heading-dark py-3 text-[16px] rounded-full bullet-dark border border-[#DCDCDC] bg-[#D7D7D733] whitespace-nowrap max-lg:py-2 max-lg:px-4">
                HOOPSTOCOLLEGE
              </span>
            </div>
          ))}
        </InfiniteSlider>
      )}
      {component === "real-world-solutions" && (
        <InfiniteSlider
          gap={24}
          direction="horizontal"
          speedOnHover={20}
          speed={80}
          reverse={direction}
          type="image"
        >
          {featuresList.map((item, index) => (
            <div
              key={index}
              className="flex relative flex-col justify-center items-start max-lg:items-start max-lg:justify-start gap-4 max-lg:gap-3 w-[520px] max-lg:w-[260px] "
            >
              <div>
                <Cursor
                  attachToParent
                  variants={{
                    initial: { height: 0, opacity: 0, scale: 0.3 },
                    animate: { height: "auto", opacity: 1, scale: 1 },
                    exit: { height: 0, opacity: 0, scale: 0.3 },
                  }}
                  transition={{
                    type: "spring",
                    duration: 0.3,
                    bounce: 0.1,
                  }}
                  className="z-10"
                  springConfig={{
                    bounce: 0.01,
                  }}
                >
                  <img
                    src={item.caseStudy}
                    alt="real world solution "
                    className="rounded-lg   z-[10000]  h-[120px] max-lg:w-[200px] max-lg:h-[195px] object-center object-contain transition-all ease-linear"
                  />
                </Cursor>

                <img
                  src={item.caseStudy}
                  alt="real world solution "
                  className="rounded-lg    h-[390px] max-lg:w-[260px] max-lg:h-[195px] object-center object-contain transition-all ease-linear"
                />
              </div>
              <span className="max-lg:w-[260px] text-[20px] max-lg:text-[14px] text-[#525252] max-lg:text-sm max-lg:mt-[-10px] heading-dark">
                {item.highlight}
              </span>
              <span className="text-[28px] font-bold max-lg:text-[24px] ">
                {item.heading}
              </span>
              <span className=" text-wrap text-[18px] text-[#292929] max-lg:text-[16px] max-lg:text-base heading-dark">
                {item.subHeading}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      )}
    </>
  );
}
