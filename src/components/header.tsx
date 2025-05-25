
import { Link } from 'react-router-dom';
import { SOCIALS } from '../data/socials';
import SocialLinks from './social-link';
import { useEffect, useState } from 'react';

const navLinks = {
  "/": "./",
  "/about": "./about-me",
  "/experience": "./experience",
  "/projects": "./projects",
  "skills": "./skills",
}

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.8 * window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className='h-screen'>
      <header className="flex justify-between items-center pt-12 pb-7 text-4xl">
        <div className="flex gap-2 text-neutral-500 hover:text-zinc-200 transition items-center">
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
              />
            ))
          }
        </div>
      </header>
      <div className="flex flex-col items-center justify-evenly h-[80%]">
        <div className='flex flex-col items-center gap-5'>
          <img src='/public/me.jpg' alt="Pemba Sherpa" className='max-h-[300px] max-w-[300px] rounded-full mx-auto' />
          <p className="text-3xl">Software Engineer</p>
          <p className="text-5xl font-bold">Pemba Norsang Sherpa</p>
        </div>

        <div className={`flex gap-15 text-3xl justify-center w-full h-[10vh] items-center z-50 ${isFixed ? 'fixed top-0 px-20 bg-zinc-950' : 'sticky top-0'}`}>
          {Object.entries(navLinks).map(([path, label]) => (
            <Link
              key={path}
              to={path}
              className={`text-neutral-500 transition-all hover:text-gray-100`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
