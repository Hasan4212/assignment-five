 
import logoText from '../assets/logo-text.png';

const Nav = () => {
    return (
       <nav className='flex justify-between items-center  container  mt-4 mx-20'> 
        <img src={logoText} alt="" />
         <div>
            <ul className='flex items-center gap-4 font-light'>
                <li className='text-red-400'>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div> 
        <div className='flex items-center font-light mr-20 gap-6'>
<button>Sign In</button>
<button className=' text-white bg-pink-500 rounded-4xl py-3 px-5'>Sign Up</button>
        </div>
       </nav>
    );
};

export default Nav;