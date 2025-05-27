import React, { useState } from "react";

const ChooseYourPlan = () => {
  const [openFeature, setOpenFeature] = useState(null);

  const toggleDropdown = (feature) => {
    setOpenFeature(openFeature === feature ? null : feature);
  };

  const plans = [
    {
      title: "Regular Development Plan",
      icon: "/assets/rocketlaunch-light.svg",
      features: [
        "Dedicated Team",
        "Weekly Deliverables",
        "Unlimited Requests & Revisions",
        "Transparent Progress Tracking",
        "Monthly Strategy Sessions",
        "Standard Turnaround Time",
        "Detailed Documentation",
      ],
      responses: [
        "A team dedicated to your project for consistent progress.",
        "Receive updates and deliverables every week.",
        "Make as many requests and revisions as needed.",
        "Track your project’s progress with full transparency.",
        "Monthly sessions to align on strategy and goals.",
        "Projects completed within a standard timeframe.",
        "Comprehensive documentation for all deliverables.",
      ],
    },
    {
      title: "Expedited Development",
      icon: "/assets/magicwand-light.svg",
      features: [
        "Priority Queue",
        "Accelerated Turnaround Time",
        "Dedicated Team",
        "Real-Time Communication",
        "Custom Integrations",
        "Flexible Strategy Sessions",
        "Comprehensive Reporting",
        "Flexible Strategy Sessions",
        "Flexible Strategy Sessions",
      ],
      responses: [
        "Your requests are prioritized above others.",
        "Faster completion of tasks and deliverables.",
        "A team dedicated to your project for consistent progress.",
        "Communicate with the team in real-time.",
        "Tailored integrations to meet your specific needs.",
        "Your requests are prioritized above others.",
        "Faster completion of tasks and deliverables.",
        "Flexible Strategy Sessions",
        "Flexible Strategy Sessions",
      ],
    },
  ];

  return (
    <div className="w-full px-[80px] py-[80px] bg-light  max-lg:py-[40px] max-lg:px-[20px] max-lg:pl-[50px] flex flex-col relative before:content-[''] before:w-[2px] before:absolute before:left-[60px] before:max-lg:left-[25px] before:h-full before:bg-[#DCDCDC]">
      <span className="w-[24px] h-[24px] z-1 rounded bg-gradient-to-l from-orange-500 to-amber-300 shadow-[0px_0px_32px_8px_rgba(255,179,120,0.25)] top-[110px] left-[49px] max-lg:left-[15px] absolute lamp"></span>
      <div className="w-full flex flex-col justify-center items-center gap-[24px]">
        <h2 className="w-full text-center heading-dark from-[#999999] to-[#181818] bg-clip-text text-transparent font-urbanist text-[48px] font-bold leading-[135%] bg-gradient-to-l max-lg:text-[32px]">
          Choose the Perfect Plan for Your Goals
        </h2>
        <span className="text-center text-[24px] font-[500] max-lg:text-[18px]">
          Unlock exceptional development tailored to your pace and priorities.
        </span>
      </div>

      <div className="w-full justify-center gap-[40px] py-[80px] max-lg:py-[40px] max-lg:items-center flex h-[700px] max-lg:h-fit max-lg:flex-col">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-[460px] !h-fit  hover:[box-shadow:0px_0px_20px_0px_rgba(255,179,120,0.10),0px_0px_80px_8px_rgba(255,179,120,0.10)] hover:backdrop-blur-[2px]  max-md:w-full max-lg:w-[70%] rounded-[16px] border border-solid border-[#EFEFEF] bg-light shadow-[0px_4px_40px_0px_rgba(255,255,255,0.25)] backdrop-blur-[2px] overflow-hidden transition-all duration-300 ease-in-out 
                            
                        `}
          >
            <div className="p-4 flex justify-baseline gap-y-[8px] items-baseline flex-col">
              <img
                src={plan.icon}
                alt="Rocket"
                className="w-[72px] h-[72px] max-lg:w-[56px] max-lg:h-[56px] mr-3 toggle-image "
              />
              <h2 className="text-[28px] font-semibold max-lg:text-[24px]">
                {plan.title}
              </h2>
            </div>

            <div className="divide-y divide-gray-200">
              {plan.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className={`transition-all duration-300 ease-in-out overflow-hidden !max-h-fit`}
                >
                  <div
                    className="flex justify-between  items-center px-4 py-3 cursor-pointer  transition-all ease-in-out transition-300 "
                    onClick={() =>
                      toggleDropdown(
                        openFeature === `${index}-${featureIndex}`
                          ? null
                          : `${index}-${featureIndex}`
                      )
                    }
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src="/assets/checkmark-light.svg"
                        alt="Check Mark"
                        className="w-6 h-6 toggle-image"
                      />
                      <span className="text-[18px] font-medium">{feature}</span>
                    </div>
                    <span
                      className={`w-6 h-6 transition-transform !border-0 duration-300 transform ${
                        openFeature === `${index}-${featureIndex}`
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                    >
                      <img
                        src="/assets/caretdown-light.svg"
                        className="toggle-image"
                        alt="Caret Down"
                      />
                    </span>
                  </div>
                  {openFeature === `${index}-${featureIndex}` && (
                    <div className="px-4 py-2">
                      <p className="text-[16px]">
                        {plan.responses[featureIndex]}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseYourPlan;
