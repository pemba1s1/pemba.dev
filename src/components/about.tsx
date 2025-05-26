import { LINKS } from "../data/links";
import { SOCIALS } from "../data/socials";
import SocialLinks from "./social-link";

function About() {
  return (
    <section id="about" className="flex flex-col h-[90vh] justify-center max-w-3xl mx-auto mb-15">
      <img src="/me.jpg" alt="Pemba Sherpa" className="h-[100px] w-[100px] rounded-full mb-5" />
      <h1 className="text-2xl font-bold">Pemba Norsang Sherpa</h1>

      <div className="text-gray-700 dark:text-gray-300">
        <p className="mt-4">
          I’m a full-stack software engineer specializing in building modern, 
          scalable web applications using cutting-edge JavaScript technologies 
          and AI-driven features. I also have experience developing cross-platform 
          mobile applications, bringing seamless experiences to both web and mobile 
          users. Currently, I’m diving deeper into Golang and Java to broaden my 
          backend proficiency.
        </p>
        <p className="mt-4 mb-4">
          Over the years, I’ve built and launched end-to-end products across 
          diverse domains including RPA, fundraising CRMs, donation management 
          platforms, and healthcare. I’ve also been an active contributor to 
          various open source projects, collaborating with global developer 
          communities.
        </p>

        <p className="mb-4">
          I'm currently open to new opportunities! If you have an
          exciting project or role that aligns with my expertise, please reach
          out at&nbsp;
          <a href="mailto:norsangpemba@gmail.com" className="border-b inline-block">
            norsangpemba@gmail.com
          </a>
          &nbsp;or through any of my social channels below.
        </p>
      </div>

      <div className="flex space-x-4 mb-2 mt-4">
        {SOCIALS.map((social) => (
          <SocialLinks
            key={social.label}
            aria-label={`Follow on ${social.label}`}
            href={social.href}
            icon={social.icon}
            iconClassName="h-8 w-8"
          />
        ))}
      </div>
      <p className="mt-4">
        <a href={LINKS.RESUME} target="_blank" rel="noopener noreferrer" className="border-b inline-block cursor-pointer">
          View Resume
        </a>
      </p>
    </section>
  );
}

export default About;
