import { InfiniteSlider } from "./MotionPrimitivesComponents/infinite-slider";
import { CardBody, CardContainer, CardItem } from "../components/MotionPrimitivesComponents/3d-effect.jsx";
import Tilt from "react-parallax-tilt";
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
               <Tilt
                  scale={0.9}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  glareEnable={true}
                  glareColor="#808080" 
                  glarePosition="all"
                  glareBorderRadius="8px"
                  client:load
                >
              <img
                src={item.src}
                alt={item.alt}
                className="rounded-lg w-[520px]   h-[390px] max-lg:w-[260px] max-lg:h-[195px] object-center object-contain transition-all ease-linear"
              />
              </Tilt>
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
    <CardContainer key={index} className="inter-var w-[560px]  max-lg:w-[260px] ">
      <CardBody
        className="flex flex-col justify-start items-start h-[650px] max-lg:h-[600px]   gap-2  max-lg:mt-[5px] w-full rounded-xl p-5 bg-white/5 dark:bg-black border border-black/[0.1] dark:border-white/[0.1] group/card transition-all duration-300"
      >
        <CardItem translateZ="50" className="w-full">
          <img
            src={item.caseStudy}
            alt="real world solution"
            className="w-full h-[390px] max-lg:h-[195px] !object-cover rounded-lg group-hover/card:shadow-xl"
          />
        </CardItem>

        <CardItem
          translateZ="90"
          as="span"
          className="max-lg:w-full text-[20px]  max-lg:text-[14px] text-[#525252] max-lg:text-sm  heading-dark"
        >
          {item.highlight}
        </CardItem>

        <CardItem
          translateZ="50"
          as="span"
          className="text-[28px]  font-bold max-lg:text-[24px]"
        >
          {item.heading}
        </CardItem>

        <CardItem
          translateZ="10"
          as="span"
          className="text-[18px] text-[#292929] max-lg:text-[16px] max-lg:text-base heading-dark"
        >
          {item.subHeading}
        </CardItem>
      </CardBody>
    </CardContainer>
  ))}
</InfiniteSlider>

      )}
    </>
  );
}
