// react icons
import { Icons } from '@/constant/icons';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { CgFacebook } from 'react-icons/cg';

const DATA = {
  contact: {
    email: 'hello@example.com',
    tel: '+123456789',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://dub.sh/dillion-github',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://dub.sh/dillion-linkedin',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://dub.sh/dillion-twitter',
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: 'Youtube',
        url: 'https://dub.sh/dillion-youtube',
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },
};

const Footer = () => {
  return (
    <footer className='border border-gray-100'>
      <div className='mx-auto mt-auto w-full max-w-[1615px] bg-white p-6 md:p-9'>
        <div className='flex w-full flex-wrap justify-center gap-[30px] sm:px-32'>
          <div className='flex w-full flex-wrap justify-center gap-[30px] sm:justify-between'>
            <p className='cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8]'>
              Service
            </p>
            <p className='cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8]'>
              Features
            </p>
            <p className='cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8]'>
              Our Team
            </p>
            <p className='cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8]'>
              Portfolio
            </p>
            <p className='cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8]'>
              Blog
            </p>
            <p className='cursor-pointer text-[0.9rem] text-[#424242] transition-all duration-200 hover:text-[#3B9DF8]'>
              Contact Us
            </p>
          </div>

          <div className='flex flex-wrap items-center gap-[10px] text-[#424242]'>
            <a className='cursor-pointer rounded-full p-1.5 text-[1.3rem] transition-all duration-300 hover:bg-[#3B9DF8] hover:text-white'>
              <CgFacebook />
            </a>
            <a className='cursor-pointer rounded-full p-1.5 text-[1.2rem] transition-all duration-300 hover:bg-[#3B9DF8] hover:text-white'>
              <BsTwitter />
            </a>
            <a className='cursor-pointer rounded-full p-1.5 text-[1.2rem] transition-all duration-300 hover:bg-[#3B9DF8] hover:text-white'>
              <BsInstagram />
            </a>
            <a className='cursor-pointer rounded-full p-1.5 text-[1.2rem] transition-all duration-300 hover:bg-[#3B9DF8] hover:text-white'>
              <BsLinkedin />
            </a>
          </div>

          {/* <div className='pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex h-full max-h-14 origin-bottom'>
            <div className='bg-background dark:bg-background fixed inset-x-0 bottom-0 h-16 w-full to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]'></div>
            <Dock className='bg-background pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'>
              {Object.entries(DATA.contact.social)
                .filter(([_, social]) => social.navbar)
                .map(([name, social]) => (
                  <DockIcon key={name}>
                    <Link href={social.url}>
                      <social.icon className='size-4' />
                      <p>{name}</p>
                    </Link>
                  </DockIcon>
                ))}
            </Dock>
          </div> */}

          <div className='flex w-full flex-wrap items-center justify-center gap-[20px] border-t border-gray-200 pt-[20px]'>
            <p className='text-[0.8rem] text-gray-600 sm:text-[0.9rem]'>© 2024 ZenUI Library. All Rights Reserved. </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
