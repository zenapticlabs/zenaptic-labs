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
              className="px-4 py-3 text-2xl max-md:text-xl rounded-full border border-[#DCDCDC] bg-[#d7d7d7d5] whitespace-nowrap max-md:py-2 max-md:px-4"
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
              className="flex relative flex-col justify-center items-start max-md:items-start max-md:justify-start gap-4 max-md:gap-3 w-[520px] max-md:w-[260px]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="rounded-lg w-[520px]   h-[390px] max-md:w-[260px] max-md:h-[195px] object-center object-contain transition-all ease-linear"
              />
              <span className=" max-md:w-[260px] text-[18px] hidden max-md:block font-bold">
                Enhancing Case Management for Increased Efficiency
              </span>
              <span className="hidden max-md:block px-4 py-3 text-2xl max-md:text-xl rounded-full border border-[#DCDCDC] bg-[#D7D7D733] whitespace-nowrap max-md:py-2 max-md:px-4">
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
              className="flex relative flex-col justify-center items-start max-md:items-start max-md:justify-start gap-4 max-md:gap-3 w-[520px] max-md:w-[260px]"
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
                    className="rounded-lg   z-[10000]  h-[120px] max-md:w-[200px] max-md:h-[195px] object-center object-contain transition-all ease-linear"
                  />
                </Cursor>

                <img
                  src={item.caseStudy}
                  alt="real world solution "
                  className="rounded-lg    h-[390px] max-md:w-[260px] max-md:h-[195px] object-center object-contain transition-all ease-linear"
                />
              </div>
              <span className="max-md:w-[260px] text-[20px] text-[#525252] max-md:text-sm max-md:mt-[-10px]">
                {item.highlight}
              </span>
              <span className="text-[28px] font-bold max-md:text-2xl">
                {item.heading}
              </span>
              <span className=" text-wrap text-[18px] text-[#292929] max-md:text-base">
                {item.subHeading}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      )}
    </>
  );
}
