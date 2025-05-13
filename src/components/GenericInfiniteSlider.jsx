import { InfiniteSlider } from "./MotionPrimitivesComponents/infinite-slider";

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
          direction={animationDirection}
          speed={speed}
          reverse={direction}
        >
          {featuresList.map((item, index) => (
            <span
              key={index}
              className="px-4 py-3 text-2xl max-lg:text-[18px] rounded-full border border-[#DCDCDC] bg-[rgba(215,215,215,0.2)] whitespace-nowrap max-lg:py-2 max-lg:px-4"
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
        >
          {featuresList.map((item, index) => (
            <img
              src={item.src}
              key={index}
              alt={item.alt}
              className="rounded-lg w-[520px]  h-[390px] max-lg:w-[45%] object-center object-contain transition-all ease-linear"
            />
          ))}
        </InfiniteSlider>
      )}
    </>
  );
}
