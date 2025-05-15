import React, { useState } from "react";
import { toast, Bounce } from "react-toastify";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewsletterEmail((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    const theme = document
      .getElementsByTagName("body")[0]
      .classList.contains("dark")
      ? "dark"
      : "light";
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!newsletterEmail.email || !emailPattern.test(newsletterEmail.email)) {
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

    const res = await fetch("/api/followUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsletterEmail),
    });

    const result = await res.json();

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
      setNewsletterEmail({ email: "" });
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
      setNewsletterEmail({ email: "" });
    }
  };

  return (
    <>
      <footer className="w-full flex flex-col justify-center items-center">
        <div className="w-[80%] py-[72px] pb-[45px] max-lg:pt-[72px] max-lg:pb-[0px] flex justify-center items-center max-lg:flex-col border-b-1 border-gray-400">
          <div className="w-[50%] max-lg:w-full flex flex-col justify-center items-center gap-10">
            <img
              src="/assets/headerlogo-light.svg"
              alt="Logo"
              width={227}
              height={100}
              loading="lazy"
              className="inline-block mr-2 w-[227px] self-baseline max-lg:self-center toggle-image"
            />

            <div className="flex items-center space-x-4 max-lg:flex-col w-full max-lg:justify-center">
              <span className="text-[18px] font-[400] max-lg:pb-[16px]">
                Follow us
              </span>
              <div className="flex gap-1.5 w-[20%] max-lg:gap-[20px] max-lg:justify-center max-lg:w-full max-lg:pb-[40px]">
                <img
                  src="/assets/facebook-light.svg"
                  alt="Facebook"
                  className="inline-block w-[24px] h-[24px] max-lg:h-[40px] max-lg:w-[40px] toggle-image"
                />
                <img
                  src="/assets/linkedin-light.svg"
                  alt="LinkedIn"
                  className="inline-block w-[24px] h-[24px] max-lg:h-[40px] max-lg:w-[40px] toggle-image"
                />
                <img
                  src="/assets/X-light.svg"
                  alt="X (Twitter)"
                  className="inline-block w-[24px] h-[24px] max-lg:h-[40px] max-lg:w-[40px] toggle-image"
                />
              </div>
              <span className="text-[18px] font-[400] max-lg:hidden">
                Privacy Policy
              </span>
              <span className="text-[18px] font-[400] max-lg:hidden">
                Terms of Use
              </span>
            </div>
          </div>

          <div className="w-[50%] max-lg:w-full">
            <form className="flex flex-col items-center justify-center">
              <label
                htmlFor="newsletter"
                className="font-[400] leading-[150%] normal-case self-start ml-2 mb-4 text-[16px] max-lg:w-full max-lg:text-center"
              >
                Ready to start working on your next big idea?
              </label>
              <div className="flex items-center max-lg:flex-col w-full rounded-4xl max-lg:bg-transparent bg-[#9F9F9F1A]">
                <input
                  type="email"
                  id="newsletter"
                  name="email"
                  value={newsletterEmail.email}
                  onChange={handleChange}
                  placeholder="Subscribe to our newsletter"
                  className="max-lg:py-[10px] max-lg:text-center max-lg:rounded-[100px] email max-lg:border-2 placeholder-[#BDBDBD] max-lg:border-[#BDBDBD] flex-1 w-full outline-0 px-4"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="px-4 py-2 h-[48px] m-2 mr-2 bg-[#FF7D12] text-white rounded-[100px] border toggleFooterButton max-lg:w-full border-white"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="hidden max-lg:flex w-full justify-between items-center py-[40px]">
              <span className="text-[18px] font-[400]">Privacy Policy</span>
              <span className="text-[18px] font-[400]">Terms of Use</span>
            </div>
          </div>
        </div>

        <p className="w-[80%] text-[#989898] font-[16px] pb-[72px] mt-2.5 ">
          © 2024 copyrightzenaptic. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
