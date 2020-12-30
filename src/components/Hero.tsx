interface dataProps {
  header: string;
  content: string;
  cta: string;
  src: string;
}

const Hero: React.FC<dataProps> = ({ header, content, cta, src }) => {
  return (
    <div className="flex space-x-0 p-2 max-w-screen-md">
      <div className="grid grid-cols-3">
        <div className="col-span-2 h-full p-5 md:pr-44">
          <p className="font-sans text-base md:text-4xl font-extrabold">
            {header}
          </p>
          <p className="pt-1 md:pt-3 text-sm md:text-lg font-light">
            {content}
          </p>

          <div className="mt-5 md:mt-10">
            <button className="py-3 md:px-9 px-3 font-sans md:text-base text-xs shadow-yellow rounded text-white hover:text-yellow-100 bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-2xl hover:bg-yellow-500">
              {cta}
            </button>
          </div>
        </div>
        <div className="sm:p-2 sm:bg-black">
          <img alt="image" src={src} className="object-cover w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
