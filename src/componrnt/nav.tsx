import { useState } from 'react';
import logoText from '../assets/logo-text.png';

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='container mx-auto mt-4 px-5 sm:px-10'>

            <div className='flex justify-between items-center'>

                <img src={logoText} alt="" />

                {/* Desktop Menu */}
                <div className='hidden lg:block'>
                    <ul className='jakarta flex items-center gap-4 font-light'>
                        <li className='text-red-400'>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Desktop Buttons */}
                <div className='hidden lg:flex items-center font-light mr-20 gap-6'>
                    <button>Sign In</button>
                    <button className='text-white bg-pink-500 rounded-4xl py-2 px-5'>
                        Sign Up
                    </button>
                </div>

                {/* Mobile Right Side */}
                <div className='flex lg:hidden items-center gap-4'>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='text-2xl'
                    >
                        ☰
                    </button>

                    <button>Sign In</button>

                    <button className='text-white bg-pink-500 rounded-4xl py-2 px-5'>
                        Sign Up
                    </button>

                </div>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='lg:hidden mt-5'>
                    <ul className='jakarta flex flex-col items-center gap-4 font-light'>
                        <li className='text-red-400'>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            )}

        </nav>
    );
};

export default Nav;