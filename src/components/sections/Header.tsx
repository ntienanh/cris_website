'use client';

import clsx from 'clsx';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import VietNamFlag from '../../../public/images/VietNamFlag.webp';
import { FadeDown } from './FramerMotion/FadeDown';
import { FadeLeft } from './FramerMotion/FadeLeft';
import { FadeRight } from './FramerMotion/FadeRight';

export const menuNav: { href: string; label: string }[] = [
  { href: '/about', label: 'About me' },
  { href: '/projects', label: 'Projects' },
  { href: '/hooks', label: 'Hooks' },
  { href: '/fplanner', label: 'FPlanner' },
];

const HeaderSection = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className='fixed top-0 z-[99999] w-full bg-white/95'>
      <div
        className={`fixed inset-0 z-10 transition-opacity duration-500 ease-in-out ${
          mobileSidebarOpen
            ? 'pointer-events-auto bg-gray-900/30 opacity-30 backdrop-blur-sm'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileSidebarOpen(false)}
      />

      <nav className='relative border-b border-gray-100'>
        <div className='relative mx-auto flex h-16 w-full max-w-[1615px] items-center justify-between px-6'>
          <FadeRight>
            <img
              onClick={() => router.push('/')}
              src='/images/Bun-logo.png'
              alt='logo'
              className='h-[64px] w-[155px] cursor-pointer'
            />
          </FadeRight>

          <FadeDown>
            <ul className='hidden items-center gap-[20px] text-[1rem] !text-[#424242] md:flex'>
              {menuNav.map(({ href, label }) => (
                <li
                  key={href}
                  className={`relative cursor-pointer capitalize transition-all duration-300 before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:rounded-full before:bg-[#0072F5] before:transition-all before:duration-300 after:absolute after:left-0 after:top-[-2px] after:h-[2px] after:rounded-full after:bg-[#0072F5] after:transition-all after:duration-300 ${
                    pathname === href ? 'before:w-full after:w-full' : 'before:w-0 after:w-0 hover:before:w-full'
                  }`}
                >
                  <Link
                    href={href}
                    className={clsx(
                      'hover:!text-[#0072F5]',
                      pathname === href ? 'font-semibold !text-[#0072F5]' : '!text-[#666666]',
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeDown>

          <FadeLeft>
            <div className='flex items-center gap-[15px]'>
              <div
                className='relative flex items-center gap-[10px]'
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

                <div className='relative aspect-video h-7 w-fit overflow-hidden !rounded-md'>
                  <Image src={VietNamFlag} alt='gg svg' fill className='object-cover' />
                </div>
              </div>

              <CiMenuFries
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                className='flex cursor-pointer text-[1.8rem] text-[#424242] md:hidden'
              />
            </div>
          </FadeLeft>

          <aside
            className={`fixed right-0 top-0 z-20 h-full w-[250px] bg-slate-100 p-4 shadow-lg transition-all duration-500 ease-in-out ${mobileSidebarOpen ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-[100%] opacity-0'}`}
          >
            <img
              onClick={() => router.push('/')}
              src='/images/Bun-logo.png'
              alt='logo'
              className='h-[132px] w-full cursor-pointer'
            />

            <NavigationMenu onClick={() => setMobileSidebarOpen(false)} isCol pathname={pathname} />
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;

const NavigationMenu = ({ pathname, isCol, onClick }: { pathname: string; isCol?: boolean; onClick?: () => void }) => {
  return (
    <ul
      style={{
        flexDirection: isCol ? 'column' : 'row',
      }}
      className='flex items-center gap-[20px] text-[1rem] text-[#424242] md:flex'
    >
      {menuNav.map(({ href, label }) => (
        <li
          onClick={onClick ? onClick : undefined}
          key={href}
          className={`relative cursor-pointer capitalize transition-all duration-300 before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:rounded-full before:bg-[#0072F5] before:transition-all before:duration-300 ${pathname === href ? 'text-[#0072F5] before:w-full' : 'before:w-0 hover:text-[#0072F5] hover:before:w-full'}`}
        >
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
};
