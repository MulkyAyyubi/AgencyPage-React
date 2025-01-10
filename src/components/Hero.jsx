const Hero = () => {
  return (
    <section
    id="hero"
  >
    <div className="flex h-screen items-center">
        <div className="relative text-white max-w-5xl px-6 md:px-[260px] py-10 ">
            <h1 className="text-4xl md:text-[80px] leading-[80px] font-bold pb-10 ">Build Your Awesome Platform</h1>
            <p className="pb-24 text-lg font-thin md:text-xl">
            Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.
            </p>
            <button className="bg-indigo-500 px-8 py-4 rounded-lg">Our Services 👉🏼</button>
        </div>
    </div>
  </section>    
  );
};

export default Hero;
