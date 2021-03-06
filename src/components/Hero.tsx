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
      <div className="md:flex-auto  w-full h-full">
        <img
          alt="image"
          src={src}
          className="border-8 border-black object-cover w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
