import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants/index'
import { useState } from 'react';

const Nav = () => {
 const [showMenu, setShowMenu] = useState(false)

 const handleClick = (event) => {
    if (showMenu === false) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  return (
    <header className='padding-x py-5 absolute z-10 w-full max-lg:p-0'>
        {showMenu && (
            <div id='menu' className="flex absolute w-full p-5 h-screen m-0 m-auto  bg-black opacity-90 text-white justify-center items-center max-lg:block">  
              <span onClick={handleClick} className='cursor-pointer float-right'><i class="fi fi-br-cross"></i></span>
              <ul className='flex-1 flex flex-col justify-center items-center gap-16 mt-20 cursor-pointer'>
                {navLinks.map((item) => (
                   <li key={item.label} onClick={handleClick}>
                    <a href={item.href} className='font-montserrat leading-normal text-lg text-white'>{item.label}</a>
                   </li> 
                ))}
            </ul>
            </div>
        )
        }
        <nav className='flex justify-between max-lg:p-5 items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="logo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 z-auto max-lg:hidden'>
                {navLinks.map((item) => (
                   <li key={item.label}>
                    <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{item.label}</a>
                   </li> 
                ))}
            </ul>
            <div className='hidden  max-lg:block' onClick={handleClick}>
                <img src={hamburger} alt="Hamburger" width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav