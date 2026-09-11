
import logo from '../assets/banner-stack.png';

const Banner = () => {
    return (
       <section className='flex justify-between items-center container mx-20'>
        <div className=''>
            <h2 className='text-6xl font-bold'>
                Build Your Ideal <br /> <span className='bg-gradient-to-r from-[#FB512B] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span> 
            </h2> 
            <p className='font-light my-5'>
                Explore frontend, backend, database, and tooling options, <br />
compare them side by side, and put together the stack that fits your <br />
next project.
            </p> 
            <div className=' font-light '> 
                <button className='mr-3 bg-gradient-to-r from-[#FB512B] to-[#7C3AED] text-white px-5 py-2 rounded-lg '>Explore Technologies</button>
                <button className='rounded-lg border border-black px-10 py-2 '>Learn More</button>
            </div>
        </div> 
        <img src={logo} alt="" className='w-100 mr-40'/>
       </section>

    );
};

export default Banner;