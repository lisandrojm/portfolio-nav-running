/* src/app/_/Navbar.tsx */
'use client';

import styles from '@/_styles/_components/Header.module.css';
import siteMetadata from '@/_data/siteMetadata';
import headerNavLinks from '@/_data/headerNavLinks';
import Link from '@/_components/Link';
import HeaderMobileNav from '@/_components/HeaderMobileNav';
import ThemeSwitcher from '@/_components/ThemeSwitcher';
import LinkIcon from '@/_components/_icons/LinksIcons';

interface NavLink {
  title: string;
  href: string;
}
/* Gsap */
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Navbar() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const showAnim = gsap
      .from('.gsap-hide-nav', {
        yPercent: -100,
        paused: true,
        duration: 0.3,
      })
      .progress(1);

    ScrollTrigger.create({
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  });

  return (
    <div ref={container}>
      <header className="fixed top-0 bg-black_a w-full gsap-hide-nav">
        <nav>
          <div className="container mx-auto px-3 lg:px-20 ">
            <div className="flex items-center justify-between pt-6 pb-2 px-1 border-b border-white ">
              <div>
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center font-bold">
                      <div>
                        <h2 className="m-0 leading-5 text-white">FullStackDev</h2>
                        <h3>
                          <span className="text-sm text-orange">lisandrojm </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex items-center leading-5 ">
                {headerNavLinks
                  .filter((link: NavLink) => link.href !== '/')
                  .map((link: NavLink, index: number) => (
                    <div key={link.title} className="hidden lg:inline">
                      <div className="flex">
                        {index > 0 && <span className="text-white mx-3">|</span>}
                        <Link href={link.href} className="hidden text-white lg:inline">
                          {link.title}
                        </Link>
                      </div>
                    </div>
                  ))}
                <LinkIcon kind="github" href={siteMetadata.github} size={3} color="white" margin="ml-5 sm:ml-5" padding="" />
                <LinkIcon kind="linkedin" href={siteMetadata.linkedin} size={3} color="white" margin="ml-5 mr-4 sm:ml-5 sm:mr-5" padding="" />
                <ThemeSwitcher />
                <HeaderMobileNav />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
