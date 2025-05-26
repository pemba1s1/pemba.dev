
import { SOCIALS } from '../data/socials';
import SocialLinks from './social-link';
import { useEffect, useState } from 'react';

const navLinks = {
  "home": "./",
  "about": "./about-me",
  "experience": "./experience",
  "projects": "./projects",
  // "skills": "./skills",
}

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.7 * window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const isLg = window.innerWidth >= 1024;
      const yOffset = isLg ? -window.innerHeight * 0.10 : -window.innerHeight * 0.05; // 10vh for lg, 5vh otherwise
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className='min-h-screen' id="home">
      <header className={`flex justify-between items-center h-[5vh] 2xl:h-[10vh] text-lg sm:text-2xl 2xl:text-4xl z-20 ${isFixed ? 'xl:fixed top-0 left-0 bg-zinc-950 px-20 w-full' : 'xl:sticky top-0'}`}>
        <div className="flex gap-2 text-neutral-500 hover:text-zinc-200 transition items-center cursor-pointer">
          <p className='font-bold text-lg sm:text-xl lg:text-3xl'>&lt;&gt;</p>
          <p>pemba.dev</p>
        </div>
        <div className="flex gap-4">
          {
            SOCIALS.map((social) => (
              <SocialLinks
                key={social.label}
                aria-label={`Follow on ${social.label}`}
                href={social.href}
                icon={social.icon}
                iconClassName="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
              />
            ))
          }
        </div>
      </header>
      <div className="flex flex-col items-center justify-evenly h-[80vh]">
        <div className='flex flex-col items-center gap-5'>
          <img src='/me.jpg' alt="Pemba Sherpa" className='max-h-[300px] max-w-[300px] rounded-full mx-auto' />
          <p className="text-lg sm:text-3xl">Software Engineer</p>
          <p className="text-2xl sm:text-5xl font-bold">Pemba Norsang Sherpa</p>
        </div>

        <div className={`flex gap-10 sm:gap-25 sm:text-xl 2xl:text-3xl justify-center w-full xl:w-auto lg:px-20 h-[5vh] 2xl:h-[10vh] items-center z-30 ${isFixed ? 'fixed top-0 bg-zinc-950' : 'sticky top-0'}`}>
          {Object.entries(navLinks).map(([path, label]) => (
            <button
              key={path}
              onClick={() => handleLinkClick(path.replace('/', ''))}
              className={`text-neutral-500 transition-all hover:text-gray-100 cursor-pointer`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
