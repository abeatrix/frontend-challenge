interface dataProps {
  header: string;
  content: string;
  cta: string;
  src: string;
}

const Hero: React.FC<dataProps> = ({ header, content, cta, src }) => {
  return (
    <div className=" relative mh-1/3 h-full flex md:items-center justify-center">
      <video
        className="object-cover w-full h-full bg-black z-0"
        autoPlay
        loop
        muted
        src="/images/video.mp4"
      />
      <div className="z-30 mw-full absolute p2 flex-col items-center">
        <div className="md:flex max-w-md mx-auto md:max-w-4xl p-2">
          <div className="flex-initial h-full p-5 md:pr-44 sm:text-left text-center">
            <p className="font-sans text-xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
              {header}
            </p>
            <p className="pt-5 sm:pr-20 text-sm sm:text-lg font-light text-white">
              {content}
            </p>

            <div className="mt-8 md:mt-20">
              <button className="py-3 md:px-9 px-3 font-sans md:text-base text-xs rounded text-white bg-gradient-to-b from-yellow-400 to-yellow-200 shadow-2xl transform hover:scale-110 motion-reduce:transform-none">
                {cta}
              </button>
            </div>
          </div>
          <div className="md:flex w-full h-full hidden md:block">
            <img
              alt="image"
              src={src}
              className="border-8 border-black object-cover w-full transform hover:scale-110 motion-reduce:transform-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
