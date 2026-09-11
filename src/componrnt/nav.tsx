// import logo from '../assets/banner-stack.png'; 
import logoText from '../assets/logo-text.png';

const Nav = () => {
    return (
       <nav> 
        <img src={logoText} alt="" />
         <div>
            <ul>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div> 
        <div>
<li>Sign In</li> 
<button>Sign Up</button>
        </div>
       </nav>
    );
};

export default Nav;