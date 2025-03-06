'use client';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import Image from 'next/image';
import { useRef } from 'react';

const Banner = () => {
  const ref: any = useRef();
  const listMenu = [
    { id: 1, src: '/images/Banner1.webp' },
    { id: 2, src: '/images/Banner2.webp' },
    { id: 3, src: '/images/Banner3.webp' },
  ];

  const rightClick = () => {
    ref?.current?.next();
  };

  const leftClick = () => {
    ref?.current?.prev();
  };

  return (
    <section className='relative mx-auto mt-auto w-full max-w-[1615px] rounded-md px-6 py-4'>
      <Carousel
        ref={ref}
        autoplay
        autoplaySpeed={4000}
        swipeToSlide
        infinite={true}
        draggable
        initialSlide={1}
        slidesPerRow={1}
        slidesToScroll={1}
        slidesToShow={2}
        // arrows
        effect='scrollx'
        className='overflow-visible'
      >
        {listMenu.map((item, index) => {
          return (
            <div
              key={item.id}
              className='relative max-h-[392px] min-h-[292px] w-full cursor-pointer overflow-hidden shadow-2xl'
              style={{ aspectRatio: '16/9' }}
            >
              <Image
                src={item.src}
                alt='Franchise Opportunity'
                fill
                className='object-cover object-center !transition-all hover:scale-105'
                priority
                sizes='40vw'
              />
            </div>
          );
        })}
      </Carousel>

      <div
        onClick={leftClick}
        className='absolute left-8 top-[45%] z-50 flex size-12 cursor-pointer items-center justify-center !rounded-full border border-none bg-white p-2'
      >
        <LeftOutlined />
      </div>

      <div
        onClick={rightClick}
        className='absolute right-8 top-[45%] z-50 flex size-12 cursor-pointer items-center justify-center !rounded-full border border-none bg-white p-2'
      >
        <RightOutlined />
      </div>
    </section>
  );
};

export default Banner;
