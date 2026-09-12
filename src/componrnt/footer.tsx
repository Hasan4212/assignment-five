import logo from '../assets/logo-text.png';

const Footer = () => {
    return (  
<section> 
       <div className='jakarta flex flex-col md:flex-row items-start align-middle justify-between mx-5 md:mx-20 my-20'> 
<div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10'>

    <div>   
        <img src={logo} alt="" />   
        <p className='my-4'>
            Curated tools, technologies, and resources for developers building <br />
            modern software.
        </p>   
        <ul className='flex items-center gap-4 mt-7'>  
            <li>GitHub</li>  
            <li>Twitter</li>  
            <li>LinkedIn</li>  
        </ul>  
    </div>  

    <div>   
        <h2 className='jakarta font-bold pb-3'>PRODUCT</h2>   
        <p>Home</p>  
        <p className='py-2'>Technologies</p>   
        <p>Projects</p>  
    </div>  

    <div>   
        <h2 className='jakarta font-bold pb-3'>COMPANY</h2>   
        <p>About</p>  
        <p className='py-2'>Contact</p>   
        <p>Careers</p>  
    </div>  

    <div>   
        <h2 className='jakarta font-bold pb-3'>LEGAL</h2>   
        <p className='pb-2'>Privacy Policy</p>  
        <p>Terms of Service</p>   
    </div>  

</div>
         
       </div>   
 
<div className='jakarta flex flex-col sm:flex-row items-center justify-between my-4 container mx-auto'> 
    <p>© 2026 Dev Stack. All rights reserved</p>  
 
    <ul className='flex items-center gap-4'> 
        <li>Privacy</li> 
        <li>Terms</li> 
    </ul> 
</div> 
 
</section> 
        
    ); 
}; 
 
export default Footer;