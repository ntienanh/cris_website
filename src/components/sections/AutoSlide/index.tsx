'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Banner1 from '../../../../public/images/Banner1.webp';

const items = [
  { label: 'ReactJS', url: '/booking' },
  { label: 'NextJS', url: '/services?category=0' },
  { label: 'ReactNative', url: '/services?category=2' },
  { label: 'Html', url: '/gift' },
  { label: 'Css', url: '/services?category=2' },
  { label: 'Javascript', url: '/booking' },
  { label: 'Typescript', url: '/services?category=0' },
];

interface AutoSlideProps {
  backgroundColor?: string;
  className?: string;
}

const AutoSlide: React.FC<AutoSlideProps> = ({ backgroundColor, className }) => {
  return (
    <div className={clsx(`relative m-auto w-full overflow-hidden ${backgroundColor || 'bg-zelene-yellow'}`, className)}>
      {/* Container chính */}
      <div className='animate-scroll flex w-max !border-none'>
        {/* Nhân đôi items để loop không bị đứt quãng */}
        {[...Array(2)].flatMap((_, loopIndex) =>
          items.map((item, itemIndex) => (
            <div
              key={`slide-${loopIndex}-${itemIndex}`}
              className='relative mx-3 flex h-[108px] w-[300px] items-center justify-center overflow-hidden rounded-2xl border border-white/5 shadow-md'
            >
              <Image src={Banner1} alt='gg svg' fill className='object-cover' sizes='320px' />
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default AutoSlide;
