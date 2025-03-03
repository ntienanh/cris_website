'use client';

import { Link } from 'next-view-transitions';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';

const HeaderSection = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();



  return (
    <>
      <div
        className={`fixed inset-0 z-10 transition-opacity duration-500 ease-in-out ${
          mobileSidebarOpen
            ? 'opacity-30 bg-gray-900/30 backdrop-blur-sm pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileSidebarOpen(false)}
      />

      <nav className='border-b border-gray-100 relative'>
        <div className='relative mx-auto flex h-16 w-full max-w-[1615px] items-center justify-between px-6'>
          <img
            onClick={() => router.push('/')}
            src='/images/Bun-logo.png'
            alt='logo'
            className='h-[64px] w-[155px] cursor-pointer'
          />

          <ul className='hidden items-center gap-[20px] text-[1rem] text-[#424242] md:flex'>
            {[
              { href: '/about', label: 'About me' },
              { href: '/projects', label: 'Projects' },
              { href: '/hooks', label: 'Hooks' }
            ].map(({ href, label }) => (
              <li
                key={href}
                className={`relative cursor-pointer capitalize transition-all duration-300 
                  before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] 
                  before:rounded-full before:bg-[#3B9DF8] before:transition-all before:duration-300
                  ${pathname === href ? 'text-[#3B9DF8] before:w-full' : 'before:w-0 hover:text-[#3B9DF8] hover:before:w-full'}`}
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>

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
              className='text-[#424242] flex cursor-pointer text-[1.8rem] md:hidden'
            />
          </div>

          <aside
          className={`fixed right-0 top-0 h-full w-[250px] shadow-lg p-4 transition-all duration-500 ease-in-out z-20 bg-slate-100
          ${mobileSidebarOpen ? 'translate-x-0 opacity-100' : 'translate-x-[100%] opacity-0 pointer-events-none'}`}
        >
          <img
            onClick={() => router.push('/')}
            src='/images/Bun-logo.png'
            alt='logo'
            className='h-[132px] w-full cursor-pointer'
          />

          <NavigationMenu onClick={() => setMobileSidebarOpen(false)} isCol pathname={pathname}/>
          
        </aside>
        </div>
      </nav>
    </>
  );
};

export default HeaderSection;

const NavigationMenu = ({ pathname ,isCol,onClick}: { pathname: string, isCol?: boolean ,onClick?: () => void}) => {
  return (
    <ul style={{
      flexDirection: isCol ? 'column' : 'row'
    }} className='flex items-center gap-[20px] text-[1rem] text-[#424242] md:flex'>
      {[
        { href: '/about', label: 'About me' },
        { href: '/projects', label: 'Projects' },
        { href: '/hooks', label: 'Hooks' }
      ].map(({ href, label }) => (
        <li
          onClick={onClick?onClick:undefined}
          key={href}
          className={`relative cursor-pointer capitalize transition-all duration-300 
          before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] 
          before:rounded-full before:bg-[#3B9DF8] before:transition-all before:duration-300
          ${pathname === href ? 'text-[#3B9DF8] before:w-full' : 'before:w-0 hover:text-[#3B9DF8] hover:before:w-full'}`}
        >
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
};
