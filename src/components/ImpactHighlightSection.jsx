import { Cursor } from "./MotionPrimitivesComponents/cursor-with-image-and-spring";

const ImpactHighlightsSection = () => {
  const caseStudies = [
    { src: "/assets/CaseStudyTech1.png", alt: "Case Study 1" },
    { src: "/assets/CaseStudyTech2.png", alt: "Case Study 2" },
    { src: "/assets/CaseStudyTech3.png", alt: "Case Study 3" },
  ];
  return (
    <div className="p-4">
      {caseStudies.map((caseStudy, index) => (
        <div key={index}>
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
            className="overflow-clip"
            springConfig={{
              bounce: 0.01,
            }}
          >
            <img
              src={caseStudy.src}
              alt={caseStudy.alt}
              className="h-[100px] w-[100px] overflow-clip"
            />
          </Cursor>
          <div>{caseStudy.alt}</div>
        </div>
      ))}
    </div>
  );
};

export default ImpactHighlightsSection;
