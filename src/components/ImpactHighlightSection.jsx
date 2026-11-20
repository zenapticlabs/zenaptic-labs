import { caseStudies } from "../data/caseStudies.js";
import { Cursor } from "./MotionPrimitivesComponents/cursor-spring";

export function ImpactHighlightsSection() {
  return (
    <div className="flex !w-full justify-around gap-5 items-start overflow-auto py-[72px] px-[80px] max-lg:px-[15px]">
      {caseStudies.map(({ caseStudy, heading, subHeading, href }) => (
        <div key={heading} className="flex-shrink-0 w-[400px]">
          {caseStudy && (
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
                src={caseStudy}
                alt=""
                className="h-[500px] block w-[500px] object-cover"
              />
            </Cursor>
          )}
          {caseStudy ? (
            <img
              src={caseStudy}
              alt={heading}
              className="h-[400px] w-[400px] object-cover"
            />
          ) : (
            <div className="h-[400px] w-[400px] border border-gray-300 rounded-lg p-5 flex flex-col justify-center">
              <h3 className="text-[28px] font-bold">{heading}</h3>
              <p className="mt-3 text-[18px] text-[#292929]">{subHeading}</p>
            </div>
          )}
          <div className="pt-4">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-[24px] font-bold no-underline text-inherit"
              >
                {heading}
              </a>
            ) : (
              <h3 className="text-[24px] font-bold">{heading}</h3>
            )}
            {caseStudy && (
              <p className="mt-2 text-[18px] text-[#292929]">{subHeading}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
