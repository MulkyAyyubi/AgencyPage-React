const Hero = () => {
  return (
    <section
    id="hero"
    className="flex justify-center"
  >
    <div className="flex h-screen items-center">
        <div className="relative text-white max-w-7xl px-6 md:px-[260px] py-10 flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <h1 className=" text-4xl md:text-[80px] leading-[80px] font-bold pb-10 text-center">Build Your Awesome Platform</h1>
            <p className="pb-24 text-xs text-center font-thin md:text-xl">
            Enver studio is a digital studio that offers several services <br /> such as UI/UX Design to developers, we will provide <br /> the best service for those of you who use our services.
            </p>
          </div>
            <div className="flex justify-center">
              <button className="bg-indigo-500  hover:bg-indigo-300 text-white hover:text-indigo-500 px-8 py-4 rounded-lg">Our Services 👉🏼</button>
           </div>
        </div>
    </div>
  </section>    
  );
};

export default Hero;
