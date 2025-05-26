import { LINKS } from "../data/links";
import { SOCIALS } from "../data/socials";
import SocialLinks from "./social-link";

function About() {
  return (
    <section id="intro" className="flex flex-col h-[90vh] justify-center max-w-3xl mx-auto mb-15">
      <img src="/me.jpg" alt="Pemba Sherpa" className="h-[100px] w-[100px] rounded-full mb-5" />
      <h1 className="text-2xl font-bold">Pemba Norsang Sherpa</h1>

      <div className="text-gray-700 dark:text-gray-300">
        <p className="mt-4">
          I’m a fullstack software engineer specializing in building web
          applications powered by modern JavaScript technologies and AI-driven
          features.
        </p>
        <p className="mt-4 mb-4">
          Over the years, I&apos;ve worked on multiple startups to build and
          launch end-to-end products in insurance, iGaming, and video
          streaming domains, and have actively contributed to various open
          source projects.
        </p>

        <p className="mb-4">
          I&apos;m currently open to new opportunities! If you have an
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
