import React, { useState } from "react";
import { InfiniteSlider } from "./MotionPrimitivesComponents/infinite-slider";
import {  toast, Bounce } from "react-toastify";

function TellUsAbout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    budget: "",
    projectDescription: "",
  });
const [loading ,setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const theme = document
      .getElementsByTagName("body")[0]
      .classList.contains("dark")
      ? "dark"
      : "light";

    const { email } = formData;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      toast.warn(" Please enter a valid email", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
        transition: Bounce,
      });
      return;
    }
    setLoading(true);
    const res = await fetch("/api/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    setTimeout(() => {
    setLoading(false);
    }, 300);
    if (result.ok) {
      toast.success(`${result.message}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
        transition: Bounce,
      });

      setFormData({
        name: "",
        email: "",
        companyName: "",
        budget: "",
        projectDescription: "",
      });
    } else {
      toast.error(`${result.message}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
        transition: Bounce,
      });

      setFormData({
        name: "",
        email: "",
        companyName: "",
        budget: "",
        projectDescription: "",
      });
    }
  };

  return (
    <>
      <div id="tellusabout" className="min-w-full px-20 py-18 flex justify-center items-center max-lg:bg-[center_top_-135px] bg-[url(/assets/tellusaboutbg-light.png)] tellusbg bg-cover bg-no-repeat bg-[center_top_-30px] flex-col gap-y-10 max-lg:px-[20px]">
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="text-4xl w-full font-bold text-center heading-dark leading-[1.35] from-[#999999] to-[#181818] bg-clip-text text-transparent bg-gradient-to-l max-lg:text-[32px]">
         Let’s Build Something Bold Together
          </h3>
          <p className="text-[24px] w-full font-medium  max-lg:text-lg text-center pt-[30px]">
            Whether you're a startup founder with a big idea, a growing company in need of smarter systems, or an enterprise ready to scale with AI and automation—we’re here to help.
At Zenaptic Labs, we collaborate with innovative teams to design, build, and launch intelligent digital products that make an impact.
       </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full md:w-[50%]">
            <form className="flex flex-col gap-y-10">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-0 border-b border-[#BDBDBD]  text=[24px] max-lg:text-[20px] placeholder-[#BDBDBD] focus:outline-none focus:border-black"
              />

              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-0 border-b border-[#BDBDBD]  text=[24px] max-lg:text-[20px] placeholder-[#BDBDBD] focus:outline-none focus:border-black"
              />

              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full md:flex-1 border-0 border-b border-[#BDBDBD]  text=[24px] max-lg:text-[20px] placeholder-[#BDBDBD] focus:outline-none focus:border-black"
                />
                <input
                  type="text"
                  name="budget"
                  placeholder="What’s Your Budget? USD"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full md:flex-1 border-0 border-b border-[#BDBDBD]  text=[24px] max-lg:text-[20px] placeholder-[#BDBDBD] focus:outline-none focus:border-black"
                />
              </div>

              <textarea
                name="projectDescription"
                placeholder="Project Description"
                rows="1"
                cols="50"
                value={formData.projectDescription}
                onChange={handleChange}
                className="w-full border-0 border-b border-[#BDBDBD]  text=[24px] max-lg:text-[20px] placeholder-[#BDBDBD] focus:outline-none resize-none"
              ></textarea>

              <div className="w-full flex justify-center items-center">
                <button
                  onClick={handleSubmit}
                  className="max-lg:mb-[78px] bg-[#FF7D12] text-[#F7F7F7] text-[18px] font-bold py-[16px] px-[24px] rounded-[8px]"
                >
                 {loading ? (
                   <>
                     Loading{" "}
                     <img src="/assets/loader.gif" alt="Loading..." className="w-[24px] ml-2 inline-block" />
                   </>
                 ) : (
                  <>
                   Send Message
                    <img
                    src="/assets/arrowupright-light.svg"
                    alt="arrow"
                    className="inline ml-2 w-[24px] h-[24px] toggle-image"
                  />
                  </>
                 )}
                 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <InfiniteSlider
          gap={100}
          direction={"horizontal"}
          speed={80}
          speedOnHover={20}
        >
          <span
            className=" text-transparent max-lg:!text-[36px] stroke-text  text-center font-urbanist font-bold text-[56px] leading-[135%]"
            style={{
              WebkitTextStroke: "1px #686868",
            }}
          >
            TRANSFORMING SOFTWARE IDEAS FOR YOUR BUSINESS INTO LIFE
          </span>
          <span className="w-[24px] h-[24px] z-1 rounded bg-gradient-to-l self-center from-orange-500 to-amber-300 shadow-[0px_0px_32px_8px_rgba(255,179,120,0.25)] lamp"></span>
          <span className="  from-[#999999] max-lg:!text-[36px] to-[#181818] bg-clip-text text-transparent bg-gradient-to-r text-[56px] font-extrabold leading-[135%]">
            TRANSFORMING SOFTWARE IDEAS FOR YOUR BUSINESS INTO LIFE
          </span>
          <span className="w-[24px] h-[24px] z-1 rounded bg-gradient-to-l self-center from-orange-500 to-amber-300 shadow-[0px_0px_32px_8px_rgba(255,179,120,0.25)] lamp"></span>
        </InfiniteSlider>
      </div>
    </>
  );
}

export default TellUsAbout;
