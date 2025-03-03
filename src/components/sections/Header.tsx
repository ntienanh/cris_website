'use client';

// react icons
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';

const HeaderSection = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className='border-b border-gray-100'>
      <div className='relative mx-auto flex h-16 w-full max-w-[1615px] items-center justify-between px-6'>
        <img
          onClick={() => router.push('/')}
          src='/images/Bun-logo.png'
          alt='logo'
          className='h-[64px] w-[155px] cursor-pointer'
        />

        <ul className='hidden items-center gap-[20px] text-[1rem] text-[#424242] md:flex'>
          <li className='relative cursor-pointer capitalize transition-all duration-300 before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:rounded-full before:bg-[#3B9DF8] before:transition-all before:duration-300 hover:text-[#3B9DF8] hover:before:w-full'>
            <Link href={'/hooks'}>About me</Link>
          </li>

          <li className='relative cursor-pointer capitalize transition-all duration-300 before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:rounded-full before:bg-[#3B9DF8] before:transition-all before:duration-300 hover:text-[#3B9DF8] hover:before:w-full'>
            <Link href={'/hooks'}>Contact</Link>
          </li>
          <li className='relative cursor-pointer capitalize transition-all duration-300 before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:rounded-full before:bg-[#3B9DF8] before:transition-all before:duration-300 hover:text-[#3B9DF8] hover:before:w-full'>
            Project
          </li>
          <li className='relative cursor-pointer capitalize transition-all duration-300 before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:rounded-full before:bg-[#3B9DF8] before:transition-all before:duration-300 hover:text-[#3B9DF8] hover:before:w-full'>
            <Link href={'/hooks'}>Hooks</Link>
          </li>
        </ul>

        {/* user account */}
        <div className='flex items-center gap-[15px]'>
          <div
            className='relative flex cursor-pointer items-center gap-[10px]'
            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
          >
            <div className='relative'>
              <img
                src='https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740'
                alt='avatar'
                className='h-[35px] w-[35px] rounded-full object-cover'
              />
              <div className='absolute bottom-[0px] right-0 h-[10px] w-[10px] rounded-full border-2 border-white bg-green-500'></div>
            </div>

            <h1 className='hidden text-[1rem] font-[400] text-gray-600 sm:block'>Nguyễn Tiến Ánh</h1>
          </div>

          <CiMenuFries
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className='text-[#424242]c flex cursor-pointer text-[1.8rem] md:hidden'
          />
        </div>

        {/* mobile sidebar */}
        <aside
          className={` ${mobileSidebarOpen ? 'z-20 translate-x-0 opacity-100' : 'z-[-1] translate-x-[200px] opacity-0'} absolute right-0 top-[55px] w-full rounded-md bg-white p-4 text-center transition-all duration-300 sm:w-[300px] md:hidden`}
        >
          <ul className='flex flex-col items-start gap-[20px] text-[1rem] text-gray-600'>
            <li className='cursor-poin ter capitalize transition-all duration-500 hover:text-[#3B9DF8]'>Features</li>
            <li className='cursor-pointer capitalize transition-all duration-500 hover:text-[#3B9DF8]'>Support</li>
          </ul>
        </aside>
      </div>
    </nav>
  );
};

export default HeaderSection;
