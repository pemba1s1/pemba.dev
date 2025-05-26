
import experience, { type experienceItem } from "../data/experience";
import { ComputerIcon } from "../icons";

const bgColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-orange-500",
];

const borderColors = [
  "border-red-500",
  "border-blue-500",
  "border-yellow-500",
  "border-purple-500",
  "border-orange-500",
];

const fillColors = [
  "fill-red-500",
  "fill-blue-500",
  "fill-yellow-500",
  "fill-purple-500",
  "fill-orange-500",
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
              <ComputerIcon className={`h-10 w-10 flex-none ${ fillColors[index % 5]} z-5`}/>
              <div
                className={`${bgColors[index % 5]} h-[2px] w-8 translate-y-5 opacity-30 z-5 ${index % 2 != 0 ? "order-last" : "order-first"}`}
              ></div>
            </div>
            <div id="exp-info" className={`w-[42%] border border-gray-600 rounded-lg px-8 py-6 bg-gray-800 text-center ${index % 2 != 0 ? "order-last" : "order-first"}`}>
              <div className="text-xl font-bold mb-2">{element.title}</div>
              <div className="text-gray-300 mb-2 text-sm italic">
                {element.organization + " | " + element.location}
              </div>
              {element.description && <div className="mb-2 text-left">{element.description}</div> }
              <div className="flex flex-wrap justify-center">
                {element.tech.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              {/* <a
                className={`${color} text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white`}
              >
                {element.buttonText}
              </a> */}
            </div>
            <div className="absolute flex items-center h-full w-full">
              <div className={`mx-auto border-l-2 h-full ${borderColors[index % 5]} z-1 opacity-30`}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;