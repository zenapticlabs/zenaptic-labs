import React, { useEffect, useState } from "react";

export function ServiceDetails() {
  const [service, setService] = useState(null);
  const [serviceStackData, setServiceStackData] = useState([]);

  useEffect(() => {
    const storedService = JSON.parse(localStorage.getItem("service"));
    setService(storedService);
    if (storedService) {
      setServiceStackData([
        ["Technology Stack We Master", storedService.technologyStack],
        ["Backend Development", storedService.backendDevelopment],
        ["Mobile App Development", storedService.mobileAppDevelopment],
        ["Databases", storedService.databases],
        ["DevOps & Infrastructure", storedService.devOpsAndInfrastructure],
        ["Cloud & Deployment", storedService.cloudAndDeployment],
        ["Frontend Development", storedService.frontendDevelopment],
        ["Mobile Development", storedService.mobileDevelopment],
        ["Database Technologies", storedService.databaseTechnologies],
        ["DevOps & Tooling", storedService.devOpsAndTooling],
        ["Server & Hosting", storedService.serverAndHosting],
        ["Cloud Platforms", storedService.cloudPlatforms],
      ]);
    }
  }, []);

  return (
    <div className="relative p-6 max-lg:p-1">
      {!service ? (
        <>
          <div className="w-full h-fit flex justify-center items-center">
            <img
              src="/assets/loader.gif"
              alt="loading ..."
              className="w-[200px] h-[200px] block object-contain object-center"
            />
          </div>
          <a
            href="/"
            className="absolute bottom-6 right-6 anchor text-white bg-[#FF7D12] px-5 py-2 rounded-md text-sm font-medium shadow-2xl transition"
          >
            ← Back
          </a>
        </>
      ) : (
        <>
          <div className="relative ">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 border-b-2 border-red-500 inline-block text-wrap-auto max-w-[100%]w-fit pb-2">
              {service.heading}
            </h1>
            <p className="text-lg mb-10">{service.intro}</p>
          </div>

          {service.services?.length > 0 && (
            <section className="mb-10">
              <h2 className="text-3xl max-md:text-2xl font-semibold mb-4 text-center">
                Our Services
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {service.services.map(({ title, description }, index) => (
                  <div
                    key={`${title}-${index}`}
                    className="border border-gray-200 p-4 rounded-lg shadow-sm"
                  >
                    <h4 className="text-lg font-semibold mb-2">{title}</h4>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.webServices?.length > 0 && (
            <section className="mb-10">
              <h2 className="text-3xl max-md:text-2xl font-semibold mb-4 text-center">
                Web Development Services
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {service.webServices.map(({ title, description }, index) => (
                  <div
                    key={`${title}-${index}`}
                    className="border border-gray-200 p-4 rounded-lg shadow-sm"
                  >
                    <h4 className="text-lg font-semibold mb-2">{title}</h4>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.mobileServices?.length > 0 && (
            <section className="mb-10">
              <h2 className="text-3xl max-md:text-2xl font-semibold mb-4 text-center">
                Mobile Development Services
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {service.mobileServices.map(({ title, description }, index) => (
                  <div
                    key={`${title}-${index}`}
                    className="border border-gray-200 p-4 rounded-lg shadow-sm"
                  >
                    <h4 className="text-lg font-semibold mb-2">{title}</h4>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.serviceCategories?.length > 0 && (
            <section className="mb-10">
              {service.heading === "Data Warehousing & Analytics" && (
                <h2 className="text-3xl max-md:text-2xl font-semibold mb-4 text-center">
                  {" "}
                  Our Key Data Analytics Capabilities
                </h2>
              )}
              {service.serviceCategories.map(({ title, items }, catIdx) => (
                <div
                  key={`${title}-${catIdx}`}
                  className="mb-10 card-bg shadow-lg p-10 max-lg:p-4"
                >
                  <h3 className="text-xl font-semibold capitalize mb-5">
                    {title}
                  </h3>
                  <ul className="list-disc list-inside flex flex-wrap gap-3">
                    {items.map((item, itemIdx) => (
                      <li
                        key={`${item}-${itemIdx}`}
                        className="text-center mb-4 list-none"
                      >
                        <span className="px-4 py-2 text-xl max-lg:text-lg rounded-full inline-block text-wrap-auto max-w-[100%] service-border  max-lg:py-2 max-lg:px-4 bullet-dark m-2">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {service.heading === "Data Warehousing & Analytics" && (
                <h3>
                  {" "}
                  Empowering businesses with real-time, data-driven
                  decision-making
                </h3>
              )}
            </section>
          )}

          <div className="relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start ">
            {serviceStackData[0] &&
              serviceStackData[0][1] &&
              Object.entries(serviceStackData[0][1]).map(
                ([category, tools]) => (
                  <div
                    key={category}
                    className="w-full overflow-hidden relative min-h-fit rounded-2xl p-10 max-lg:p-4 text-xl md:text-4xl card-bg shadow-lg font-bold mb-8"
                  >
                    <h3 className="text-center text-2xl  mb-10 capitalize">
                      {category.replace(/([A-Z])/g, " $1")}
                    </h3>
                    {Array.isArray(tools) ? (
                      <ul className="flex flex-wrap justify-center gap-4">
                        {tools.map((tool, idx) => (
                          <li key={idx} className="list-none">
                            <span className="px-4 py-2 text-xl max-lg:text-[16px] break-words inline-block text-wrap-auto max-w-[100%] rounded-full service-border bullet-dark m-2 ">
                              {tool}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      Object.entries(tools).map(
                        ([subCategory, subTools], subIdx) => (
                          <div key={subIdx} className="mb-10">
                            <h4 className="text-lg font-semibold capitalize mb-3 text-center">
                              {subCategory.replace(/([A-Z])/g, " $1")}
                            </h4>
                            <ul className="flex flex-wrap gap-4 justify-center">
                              {subTools.map((tool, toolIdx) => (
                                <li key={toolIdx} className="list-none">
                                  <span className="px-4 py-2 text-xl max-lg:text-[16px] inline-block text-wrap-auto max-w-[100%] rounded-full service-border bullet-dark m-2 ">
                                    {tool}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )
                    )}
                  </div>
                )
              )}
          </div>

          <div className="w-full flex justify-between items-center">
            {service.heading !== "Data Warehousing & Analytics" &&
              service.cta && (
                <a
                  href="/#tellusabout"
                  className="block m-3 px-6 py-3 anchor text-white max-lg:p-[10px] bg-[#FF7D12] rounded-lg font-semibold shadow-2xl transition"
                >
                  {service.cta}
                </a>
              )}

            <a
              href="/"
              className="anchor block text-white bg-[#FF7D12] max-lg:p-[10px]  px-5 py-2 rounded-md text-sm font-medium shadow-2xl transition"
            >
              ← Back
            </a>
          </div>
        </>
      )}
    </div>
  );
}
