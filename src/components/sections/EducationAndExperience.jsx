import { AiOutlineMenu } from "react-icons/ai"; // For HamIcon replacement
import { MdSchool } from "react-icons/md"; // For Education icon
import { MdWorkOutline } from "react-icons/md"; // For Experience icon
import { AiFillGoogleCircle } from "react-icons/ai"; // For Google icon
import { TbCertificate } from "react-icons/tb"; // For Certificates icon
import { FaMicrosoft } from "react-icons/fa"; // For IBM replacement icon

import user_info from "../../data/user_info.js";

function EducationAndExperience() {
  return (
    <section id="education-and-experience" className="mt-20 mx-4 lg:mx-20 flex flex-col md:flex-row gap-4 md:gap-2">
      {/* =========== EDUCATION =========== */}
      <div className="w-full md:w-[80%]">
        <h4 className="text-xl dark:text-white mb-4 font-bold flex gap-2 items-center">
          <MdSchool className="text-xl text-blue-800 dark:text-blue-500" />
          Education
        </h4>

        {user_info.education.map((edu, index) => {
          return (
            <div key={index}>
              <div className="ps-2 my-2 first:mt-0 !mt-2">
                <h3 className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
                  {edu.duration}
                </h3>
              </div>

              <div className="flex gap-x-3 relative group rounded-lg">
                <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
                  <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-white border-2 border-zinc-300 group-hover:border-zinc-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-zinc-600"></div>
                  </div>
                </div>

                <div className="grow p-2 pb-8">
                  <h3 className="flex items-center gap-x-2 font-semibold text-zinc-800 dark:text-white">
                    <img className="w-9 h-9 rounded-full" src={edu.image} alt="School Logo" />
                    <div className="leading-5">
                      {edu.school}
                      <p className="font-normal text-xs text-zinc-600 dark:text-zinc-400">
                        {edu.degree}
                      </p>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          );
        })}

        <h4 className="text-xl dark:text-white mt-6 font-bold flex gap-2 items-center">
          <TbCertificate className="text-2xl text-blue-800 dark:text-blue-500" />
          Certificates
        </h4>

        <div data-hs-carousel='{"loadingClasses": "opacity-0"}' className="relative mt-4">
          <div className="hs-carousel relative overflow-hidden w-full h-48 bg-white dark:bg-gray-800 rounded-lg">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
              {user_info.certificates.map((cert, index) => {
                return (
                  <div className="hs-carousel-slide relative" key={index}>
                    {cert.icon === "ibm" ? (
                      <FaMicrosoft className="text-blue-500 absolute right-5 top-0 text-5xl" />
                    ) : cert.icon === "google" ? (
                      <AiFillGoogleCircle className="text-blue-500 absolute right-5 top-3 text-3xl" />
                    ) : (
                      <AiOutlineMenu className="text-green-500 absolute right-5 top-3 text-3xl" />
                    )}

                    <div className="flex justify-center items-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
                      <div className="hs-tooltip [--placement:bottom] inline-block">
                        <a href={cert.link} target="_blank" rel="noreferrer" className="hs-tooltip-toggle text-center text-gray-800 dark:text-white hover:text-blue-800 hover:dark:text-blue-500">
                          <p className="transition duration-700 px-6 font-bold">
                            {cert.title}
                          </p>
                          <p className="transition duration-700 px-6 text-sm">
                            {cert.description}
                          </p>
                        </a>

                        <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium dark:text-white rounded shadow-sm" role="tooltip">
                          Open Certificate
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <h4 className="text-xl dark:text-white mb-4 font-bold flex gap-2 items-center">
          <MdWorkOutline className="text-2xl text-blue-800 dark:text-blue-500" />
          Experience
        </h4>

        <div className="md:h-[480px] md:overflow-y-scroll scroll-smooth">
          {user_info.experience.map((exp, index) => {
            return (
              <div key={index}>
                <div className="ps-2 my-2 first:mt-0 !mt-2">
                  <h3 className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
                    {exp.duration}
                  </h3>
                </div>

                <div className="flex gap-x-3 relative group rounded-lg">
                  <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-white border-2 border-zinc-300 group-hover:border-zinc-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-zinc-600"></div>
                    </div>
                  </div>

                  <div className="grow p-2 pb-8">
                    <h3 className="flex items-center gap-x-2 font-semibold text-zinc-800 dark:text-white">
                      <img className="w-9 rounded-full" src={exp.image} alt="Company Logo" />
                      <div className="leading-5">
                        {exp.company}
                        <p className="font-normal text-xs text-zinc-600 dark:text-zinc-400">
                          {exp.position}
                        </p>
                      </div>
                    </h3>

                    <ul className="list-disc list-inside text-zinc-800 dark:text-white mt-2">
                      {exp.descriptions.map((desc, index) => {
                        return (
                          <li className="flex space-x-3" key={index}>
                            <svg
                              className="flex-shrink-0 size-4 mt-0.5 text-blue-800 dark:text-blue-500"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>{desc}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EducationAndExperience;
