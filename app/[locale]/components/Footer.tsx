import React from 'react';
import Image from 'next/image';

import discordImage from '@public/socials/icons8-discord-new.svg';
import ytImage from '@public/socials/icons8-youtube.svg';
import facebookImage from '@public/socials/icons8-facebook.svg';
import instagramImage from '@public/socials/icons8-instagram.svg';
import xImage from '@public/socials/icons8-x.svg';

// rework to not stick to bottom
// dont need to have it always visible

const CustomFooter = () => {
  return (
    <>
      <footer className='sticky bottom-8 flex h-10 w-full bg-sky-400 p-1'>
        <div className='grid grid-cols-5 gap-4'>
          <div className='flex grid-cols-2 gap-4'>Follow us!</div>
          <div className='flex'>
            <Image
              src={discordImage}
              alt='discord link'
              data-testid='discordLink'
              className=''
            ></Image>
            <Image
              src={ytImage}
              alt='youtube link'
              data-testid='ytLink'
            ></Image>
            <Image
              src={facebookImage}
              alt='facebook link'
              data-testid='fbLink'
            ></Image>
            <Image
              src={instagramImage}
              alt='instagram link'
              data-testid='instaLink'
            ></Image>
            <Image
              src={xImage}
              alt='X, formely twitter, link'
              data-testid='xLink'
            ></Image>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CustomFooter;
