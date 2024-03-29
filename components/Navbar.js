import Image from "next/image";
import Instagram from "./Icons/Instagram.js";
import Discord from "./Icons/Discord.js";
import Twitter from "./Icons/Twitter.js";
import Hamburger from "./Icons/MobileNav.js";
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return <>
    <nav className='w-full top-0 pt-5 md:pt-8 z-10 lg:px-8 lg:right-8'>
      <ul className="flex h-full lg:px-8 px-4 items-center justify-center landscape:justify-between md:justify-between max-w-11xl mx-auto relative">
        <Link href="/" passHref>
          <li className="flex relative border-box md:top-0 top-9 landscape:top-0 w-52 h-36 md:w-44 md:h-36">
            <h1 className="relative w-52 h-36 md:w-44 md:h-36">
              <Image
                src="/images/logo-stacked-white.svg"
                alt="Fantasy Garage - Project E30 NFT"
                priority
                fill
                sizes="100%"
                as="other" />
            </h1>
          </li>
        </Link>
        <li>
          <button
            className='p-3 bg-white bg-opacity-20 rounded md:hidden ml-auto outline-none z-30 fixed right-4 top-4'
            onClick={handleClick}
          >
            <Hamburger className="w-6 h-6 stroke-white"/>
          </button>
        </li>
        <li className="hidden md:flex flex-col pt-0 relative">
          <ul className="flex flex-col md:flex-row items-center justify-center">
            <li className="max-w-50per w-full md:w-auto my-3 md:my-auto md:mx-2">
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="flex bg-opacity-20 bg-white duration-200 py-2 px-4 hover:bg-opacity-30 rounded">
                <Discord className="fill-white stroke-white h-4 w-4" />
              </a>
            </li>
            <li className="max-w-50per w-full md:w-auto my-3 md:my-auto md:mx-2">
              <a href="https://twitter.com/fntsygaragexyz" target="_blank" rel="noreferrer" className="flex bg-opacity-20 bg-white duration-200 py-2 px-4 hover:bg-opacity-30 rounded">
                <Twitter className="fill-white stroke-white h-4 w-4" />
              </a>
            </li>
            <li className="max-w-50per w-full md:w-auto my-3 md:my-auto md:ml-2">
              <a href="https://instagram.com/fantasygarage.xyz" target="_blank" rel="noreferrer" className="flex bg-opacity-20 bg-white duration-200 py-2 px-4 hover:bg-opacity-30 rounded">
                <Instagram className="fill-white stroke-white h-4 w-4" />
              </a>
            </li>
          </ul>
        </li>
      </ul>



      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={ `${
          active ? '' : 'hidden'
        } md:hidden w-full bg-black bg-opacity-90 fixed left-0 right-0 top-0 bottom-0 u-100vh z-20 overscroll-none` }
      >
        <ul className="md:hidden flex flex-col items-center justify-center u-100vh">
          <li className="max-w-50per w-full md:w-auto my-3 md:my-auto md:mx-2">
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="md:bg-opacity-20 bg-white duration-200 py-4 px-4 md:py-2 w-full rounded flex flex-col items-center justify-center">
              <Discord className="fill-fg-pink md:fill-white stroke-fg-pink md:stroke-white h-4 w-4" />
              <span className="text-fg-pink font-bold">Discord</span>
            </a>
          </li>
          <li className="max-w-50per w-full md:w-auto my-3 md:my-auto md:mx-2">
            <a href="https://twitter.com/fntsygaragexyz" target="_blank" rel="noreferrer" className="md:bg-opacity-20 bg-white duration-200 py-4 px-4 w-full  rounded flex flex-col items-center justify-center">
              <Twitter className="fill-fg-pink md:fill-white stroke-fg-pink md:stroke-white h-4 w-4" />
              <span className="text-fg-pink font-bold">Twitter</span>
            </a>
          </li>
          <li className="max-w-50per w-full md:w-auto my-3 md:my-auto md:ml-2">
            <a href="https://instagram.com/fantasygarage.xyz" target="_blank" rel="noreferrer" className="md:bg-opacity-20 bg-white duration-200 py-4 md:py-2 px-4 w-full rounded flex flex-col items-center justify-center">
              <Instagram className="fill-fg-pink  md:fill-white stroke-fg-pink md:stroke-white h-4 w-4" />
              <span className="text-fg-pink font-bold">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </>;
};


