import React, { useState } from "react";
import { InfiniteSlider } from "./MotionPrimitivesComponents/infinite-slider";
function TellUsAbout() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    budget: "",
    projectDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    setFormData({
      fullName: "",
      email: "",
      companyName: "",
      budget: "",
      projectDescription: "",
    });
  };
  return (
    <>
      <div className="min-w-full px-20 py-18 flex justify-center items-center max-md:bg-[url(/assets/tell-us-aboutsmall.png)] max-md:bg-contain max-md:bg-[center_top_-135px]   bg-[url(/assets/TellUSAboutBG.png)] bg-cover bg-no-repeat bg-[center_top_-30px]  flex-col gap-y-10 max-md:px-[20px]">
        <div className="w-full flex justify-center items-center ">
          <h3 className="text-4xl font-bold text-center leading-[1.35] from-[#999999] to-[#181818] bg-clip-text text-transparent bg-gradient-to-l">
            Tell us about your project
          </h3>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="w-full md:w-[50%]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-10">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border-0 border-b border-[#BDBDBD] text-[#BDBDBD] text-[24px] placeholder-[#BDBDBD] focus:outline-none focus:border-black"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-0 border-b border-[#BDBDBD] text-[#BDBDBD] text-[24px] placeholder-[#BDBDBD] focus:outline-none focus:border-black"
              />

              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full md:flex-1 border-0 border-b border-[#BDBDBD] text-[#BDBDBD] text-[24px] placeholder-[#BDBDBD] focus:outline-none focus:border-black"
                />
                <input
                  type="text"
                  name="budget"
                  placeholder="What’s Your Budget?"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full md:flex-1 border-0 border-b border-[#BDBDBD] text-[#BDBDBD] text-[24px] placeholder-[#BDBDBD] focus:outline-none focus:border-black"
                />
              </div>

              <textarea
                name="projectDescription"
                placeholder="Project Description"
                rows="1" cols="50"
                value={formData.projectDescription}
                onChange={handleChange}
                className="w-full border-0 border-b border-[#BDBDBD] text-[#000000f8] text-[24px] placeholder-[#BDBDBD] focus:outline-none resize-none"
              ></textarea>

              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  className="max-md:mb-[78px] bg-[#FF7D12] text-[#F7F7F7] text-[18px] font-bold py-[16px] px-[24px] rounded-[8px]"
                >
                  Send Message
                  <img
                    src="/assets/arrowrightWhite.svg"
                    alt="arrow"
                    className="inline ml-2 w-[24px] h-[24px]"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full flex justify-center items-center"></div>
      </div>

      <div className="w-full flex justify-center  items-center ">
        <InfiniteSlider
          gap={100}
          direction={"horizontal"}
          speed={80}
          speedOnHover={20}
        >
          <span
            className=" text-transparent max-md:!text-[36px] stroke-text  text-center font-urbanist font-bold text-[56px] leading-[135%] "
            style={{
              WebkitTextStroke: "1px #000",
            }}
          >
            TRANSFORMING SOFTWARE IDEAS FOR YOUR BUSINESS INTO LIFE
          </span>
          <span className="w-[24px] h-[24px] z-1 rounded bg-gradient-to-l self-center from-orange-500 to-amber-300 shadow-[0px_0px_32px_8px_rgba(255,179,120,0.25)] "></span>
          <span className="  from-[#999999] max-md:!text-[36px] to-[#181818] bg-clip-text text-transparent bg-gradient-to-r text-[56px] font-extrabold leading-[135%] ">
            TRANSFORMING SOFTWARE IDEAS FOR YOUR BUSINESS INTO LIFE
          </span>
          <span className="w-[24px] h-[24px] z-1 rounded bg-gradient-to-l self-center from-orange-500 to-amber-300 shadow-[0px_0px_32px_8px_rgba(255,179,120,0.25)] "></span>
        </InfiniteSlider>
      </div>
    </>
  );
}

export default TellUsAbout;
