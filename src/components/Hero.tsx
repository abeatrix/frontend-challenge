interface dataProps {
  header: string;
  content: string;
  cta: string;
  src: string;
}

const Hero: React.FC<dataProps> = ({ header, content, cta, src }) => {
  return (
    <div className="md:flex max-w-md mx-auto md:max-w-4xl p-2">
      <div className="flex-initial h-full p-5 md:pr-44 sm:text-left text-center">
        <p className="font-sans text-xl sm:text-4xl font-extrabold">{header}</p>
        <p className="pt-2 md:pt-5 sm:pr-20 text-sm sm:text-lg font-light">
          {content}
        </p>

        <div className="mt-2 md:mt-20">
          <button className="py-3 md:px-9 px-3 font-sans md:text-base text-xs md:shadow-yellow rounded text-white hover:text-yellow-100 bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-2xl hover:bg-yellow-500">
            {cta}
          </button>
        </div>
      </div>
      <div className="flex w-full bg-starmap relative bg-clip-content text-center border-8 border-black">
        <div className="absolute w-full h-full bg-hero bg-center starmap-circle rounded-full border-2 border-white"></div>
        <div className="flex-auto bg-starmap p-2">
          <div className="flex h-full bg-white p-0.5">
            <div className="flex w-full bg-starmap items-end">
              <div className="w-full text-white text-2xs font-thin whitespace-pre-line uppercase mb-5" >
              <p className="text-white">A TWINKLE IN TIME</p>
              <p className="text-white">DECEMBER 29, 2020</p>
              <p className="text-white">NEW YORK, NY, USA</p>
              <p className="text-white">40.713°N/74.006°W</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
