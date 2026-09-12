import logo from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <section className="container mx-auto px-5 sm:px-10 py-10">

            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

                <div className="text-center lg:text-left">

                    <h2 className="inter text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Build Your Ideal <br />
                        <span className="bg-gradient-to-r from-[#FB512B] to-[#7C3AED] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h2>

                    <p className="jakarta font-light my-5">
                        Explore frontend, backend, database, and tooling options, <br className="hidden sm:block" />
                        compare them side by side, and put together the stack that fits your <br className="hidden sm:block" />
                        next project.
                    </p>

                    <div className="inter font-light flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">

                        <button className="bg-gradient-to-r from-[#FB512B] to-[#7C3AED] text-white px-5 py-2 rounded-lg">
                            Explore Technologies
                        </button>

                        <button className="rounded-lg border border-black px-10 py-2">
                            Learn More
                        </button>

                    </div>
                </div>

                <img
                    src={logo}
                    alt=""
                    className="w-64 sm:w-80 lg:w-100"
                />

            </div>
        </section>
    );
};

export default Banner;