import Link from 'next/link';
import React from 'react';
import Banner from './Banner';
import { getInitialProps } from 'react-i18next';

const { initialLanguage } = getInitialProps();
const intlUrl = `/${initialLanguage}`;
const navBarLinks = {
  home: intlUrl,
  darkage: `${intlUrl}/darkage`,
  galactic: `${intlUrl}/galactic`,
};
const Navbar = () => {
  return (
    <>
      <header className='sticky top-0 h-20 w-full bg-emerald-800'>
        <nav className='container mx-auto h-full px-4'>
          <div className='flex h-full items-center justify-evenly lg:gap-x-12'>
            <Link
              href={navBarLinks.home}
              className='text-sm/6 font-semibold text-white'
            >
              Home
            </Link>
            <Link
              href={navBarLinks.darkage}
              className='text-sm/6 font-semibold text-white'
            >
              Darkage - Current Event
            </Link>
            <Link
              href={navBarLinks.galactic}
              className='text-sm/6 font-semibold text-white'
            >
              Old Event - Galactic
            </Link>
            <Link href='#' className='text-sm/6 font-semibold text-white'>
              About Us
            </Link>
          </div>
        </nav>
        <Banner />
      </header>
    </>
  );
};

export default Navbar;
