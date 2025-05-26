
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
      const yOffset = -window.innerHeight * 0.10; // 10vh offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className='h-screen' id="home">
    <header className={`flex justify-between items-center h-[10vh] text-4xl z-20 ${isFixed ? 'fixed top-0 left-0 bg-zinc-950 px-20 w-full' : 'sticky top-0'}`}>
        <div className="flex gap-2 text-neutral-500 hover:text-zinc-200 transition items-center cursor-pointer">
          <p className='font-bold text-3xl'>&lt;&gt;</p>
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
                iconClassName="h-10 w-10"
              />
            ))
          }
        </div>
      </header>
      <div className="flex flex-col items-center justify-evenly h-[80%]">
        <div className='flex flex-col items-center gap-5'>
          <img src='/me.jpg' alt="Pemba Sherpa" className='max-h-[300px] max-w-[300px] rounded-full mx-auto' />
          <p className="text-3xl">Software Engineer</p>
          <p className="text-5xl font-bold">Pemba Norsang Sherpa</p>
        </div>

        <div className={`flex gap-25 text-3xl justify-center px-20 h-[10vh] items-center z-30 ${isFixed ? 'fixed top-0 bg-zinc-950' : 'sticky top-0'}`}>
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
