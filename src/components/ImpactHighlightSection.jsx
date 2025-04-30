import { Cursor } from './MotionPrimitivesComponents/cursor-spring';
export function ImpactHighlightsSection() {
  const caseStudies = [
    { src: "/assets/CaseStudyTech1.png", alt: "Case Study 1" },
    { src: "/assets/CaseStudyTech2.png", alt: "Case Study 2" },
    { src: "/assets/CaseStudyTech3.png", alt: "Case Study 3" },
    { src: "/assets/CaseStudyTech1.png", alt: "Case Study 1" },
  ];
  return (
    <div className="flex !w-full justify-around gap-5 items-center overflow-auto py-[72px] px-[80px] max-md:px-[15px]">
      {caseStudies.map((caseStudy, index) => (
        <div key={index} className="flex-shrink-0">
          <Cursor
            attachToParent
            variants={{
              initial: { height: 0, opacity: 0, scale: 0.3 },
              animate: { height: 'auto', opacity: 1, scale: 1 },
              exit: { height: 0, opacity: 0, scale: 0.3 },
            }}
            transition={{
              type: 'spring',
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
              className="h-[500px] block w-[500px]"
            />
          </Cursor>
          <img
            src={caseStudy.src}
            alt={caseStudy.alt}
            className="h-[400px] w-[400px]"
          />
        </div>
      ))}
    </div>
  );
}

