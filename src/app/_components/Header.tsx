/* src/app/_/Navbar.tsx */

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
export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="pt-4 pb-2 flex items-center justify-between border-b border-white fixed bg-black_a  top-0 z-10 w-full">
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
      </nav>
    </header>
  );
}
