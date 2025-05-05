import React from "react";
import GenericInfiniteSlider from "./InfiniteSlider";

function GenericSolutionsSection(props) {
  const techSolutions = props.techSolutions || [];

  return (
    <>
      <div
        className="w-full overflow-hidden mx-auto flex justify-between  items-center px-[80px] relative max-md:px-5 gap-10 pt-[80px] max-md:pt-[40px] max-md:flex-col"
        id="techSolutionsSection"
      >
        <div className="flex flex-col gap-6 w-[80%] pl-[30px] max-md:pl-0 justify-center items-center ">
          <div className="flex justify-baseline items-center w-full">
            <h4 className="text-[48px] max-md:text-[32px] font-bold bg-gradient-to-r from-[#181818] to-[#999] bg-clip-text text-transparent">
              {techSolutions.heading}
            </h4>
          </div>

          <div className="w-full justify-baseline items-center">
            <p className="text-[24px] font-medium text-[#292929] max-md:text-lg">
              {techSolutions.description.line1} <br className="max-md:hidden" />
              {techSolutions.description.line2}
            </p>
          </div>

          <div className="w-full flex justify-baseline items-center">
            <div className="flex-wrap flex justify-start overflow-wrap w-full gap-3">
              {techSolutions.features.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-3 text-[20px] max-md:text-lg rounded-full border text-[#464646] border-[#DCDCDC] bg-[rgba(215,215,215,0.2)] max-md:py-2 max-md:px-4"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="   absolute top-0   right-[10%] max-md:right-0 w-[20%] max-md:flex max-md:w-[70%] max-md:static max-md:justify-baseline max-md:items-center max-md:mt-10 max-md:gap-5">
          <button className="bg-[#FF7D12] mt-[85px] max-md:mt-[0px]  text-[#F7F7F7] text-[18px] flex justify-center items-center whitespace-nowrap rounded-lg px-[24px] py-[16px] max-md:py-2 max-md:px-4">
            <span>Start Your Project</span>
            <img
              src="/assets/arrowrightWhite.svg"
              alt="Arrow"
              loading="lazy"
              className="object-cover object-center w-[24px] h-[24px] inline-block ml-2"
              id="headerArrowUp"
            />
          </button>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        {techSolutions.caseStudies !== undefined && (
          <div className="w-full relative flex justify-center items-center  left-[100px] max-md:left-[60px] py-[80px] !mx-0 font-semibold !text-2xl text-[#292929] max-md:text-xl">
            <GenericInfiniteSlider
              featuresList={techSolutions.caseStudies}
              speed={80}
              speedOnHover={20}
              direction="horizontal"
              clientLoad
              component="image-infinite-slider"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default GenericSolutionsSection;
