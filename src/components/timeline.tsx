
import experience, { type experienceItem } from "../data/experience";
import { ComputerIcon } from "../icons";
import TechCard from "./tech-card";

const colors = [
  "red-500",
  "blue-500",
  "yellow-500",
  "purple-500",
  "orange-500",
];

function Timeline() {
  return (
    <div>
      {experience.map((element: experienceItem, index: number) => {
        return (
          <div key={index} className="flex pb-10 w-full items-center justify-between relative">
            <div id="exp-time" className={`w-[42%] pt-2 ${index % 2 == 0 ? "order-last" : "order-first text-right"}`}>{element.startYear + " - " + element.endYear}</div>
            <div className="w-[15%] justify-center pt-0.5 sm:flex">
              <div
                className={`bg-zinc-950 h-[2px] w-8 translate-y-5 opacity-30 z-5 ${index % 2 == 0 ? "order-last" : "order-first"}`}
              ></div>
              <ComputerIcon className={`h-10 w-10 flex-none ${'fill-'+ colors[index % 5]} z-5`}/>
              <div
                className={`${'bg-'+colors[index % 5]} h-[2px] w-8 translate-y-5 opacity-30 z-5 ${index % 2 != 0 ? "order-last" : "order-first"}`}
              ></div>
            </div>
            <div id="exp-info" className={`w-[42%] border border-gray-600 rounded-lg px-8 py-6 bg-gray-800 text-center ${index % 2 != 0 ? "order-last" : "order-first"}`}>
              <div className="text-xl font-bold mb-2">{element.title}</div>
              <div className="text-gray-300 mb-2 text-sm italic">
                {element.organization + " | " + element.location}
              </div>
              {element.description && <div className="mb-2 text-left">{element.description}</div> }
              <div className="flex flex-wrap justify-center">
                {element.tech.map((tech, index) => <TechCard key={index} tech={tech} />)}
              </div>
              {/* <a
                className={`${color} text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white`}
              >
                {element.buttonText}
              </a> */}
            </div>
            <div className="absolute flex items-center h-full w-full">
              <div className={`mx-auto border-l-2 h-full ${'border-'+ colors[index % 5]} z-1 opacity-30`}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;