/* src/app/_components/Footer.tsx */

import siteMetadata from '@/_data/siteMetadata';
import LinkIcon from '@/_components/_icons/LinksIcons';
import Link from 'next/link';
import SectionContainer from '@/_components/SectionContainer';

export default function Footer() {
  return (
    <SectionContainer>
      <footer>
        <div className="pt-3 pb-5 border-t border-white px-2 md:px-1 flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
          <div className="flex justify-center items-center">
            <h6 className="font-serif text-xl text-orange">
              site stack <span className="px-2">|</span>
            </h6>
            <ul className="flex gap-3">
              <li>
                <LinkIcon kind="react" href="https://legacy.reactjs.org/" size={2} color="orange" />
              </li>
              <li>
                <LinkIcon kind="nextjs" href="https://nextjs.org/" size={2} color="orange" />
              </li>
              <li>
                <LinkIcon kind="tailwind" href="https://tailwindcss.com/" size={2} color="orange" />
              </li>
              <li>
                <LinkIcon kind="vercel" href="https://vercel.com/" size={2} color="orange" />
              </li>
            </ul>
          </div>
          <div className="flex">
            <LinkIcon kind="github" href={siteMetadata.github} size={2} color="white" />
            <Link href={siteMetadata.github} className="font-serif italic text-white text-md ml-3">
              site code →
            </Link>
          </div>
        </div>
      </footer>
    </SectionContainer>
  );
}
