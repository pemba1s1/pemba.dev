export interface experienceItem {
  startYear: string,
  endYear: string,
  title: string,
  organization: string,
  location: string,
  description?: string,
  tech: string[],
}

const experience: experienceItem[] = [
  {
    title: "Software Engineer Intern",
    organization: "Quickfox Consulting",
    location: "Kathmandu, Nepal",
    startYear: "Dec 2021",
    endYear: "Mar 2022",
    tech: ["JavaScript", "Electron.js", "React", "Java"],
  },
  {
    title: "Associate Software Engineer",
    organization: "Quickfox Consulting",
    location: "Kathmandu, Nepal",
    startYear: "Mar 2022",
    endYear: "Jul 2022",
    tech: ["JavaScript", "Electron.js", "React", "Java", "Solidity"],
  },
  {
    title: "Full Stack Developer",
    organization: "Keela",
    location: "Lalitpur, Nepal (Remote)",
    description: "Worked remotely as a full stack developer for Keela, a Canadian company",
    startYear: "Aug 2022",
    endYear: "Dec 2023",
    tech: ["Vue", "Node.js", "Meteor.js", "MongoDB"],
  },
  {
    title: "Software Developer Co-op",
    organization: "SMART Centre",
    location: "Cambridge, Ontario, Canada",
    startYear: "Sept 2024",
    endYear: "Dec 2024",
    tech: ["Python", "TypeScript", "React Native", "NSIS", "LLMs"],
  },
  {
    title: "Software Developer (Part-time)",
    organization: "SMART Centre",
    location: "Cambridge, Ontario, Canada",
    startYear: "Jan 2025",
    endYear: "Apr 2025",
    tech: ["Python", "TypeScript", "React Native", "NSIS", "LLMs"],
  },
];

export default experience.reverse(); 