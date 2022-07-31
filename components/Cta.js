import Image from "next/image";

export const Cta = ({ image, heading, subHeading, buttonText }) => {
  return (
    <div className="flex justify-end bg-fg-pink px-4 pb-4 relative">
      <div className="bg-white p-4 bg-opacity-20 text-white flex flex-col md:flex-row items-center w-full md:w-auto text-center md:text-left rounded shadow-lg relative z-0">
        { image?
          <div className="rounded-md z-10 h-full relative w-[80px]">
            <Image src={image} alt="" layout="fill" objectFit="cover" />
          </div>
          :
          null
        }
        <div className="block md:mr-12 mb-4 md:mb-0">
          <p className="font-sans text-3xs tracking-widest font-medium uppercase opacity-60">{heading}</p>
          <p className="font-sans uppercase tabular-nums font-bold md:text-xl text-sm tracking-wider">{subHeading}</p>
        </div>
        <div className="md:ml-auto w-full md:w-auto">
          <a className="lg:px-6 py-3 px-4 group flex items-center justify-center w-full shadow-lg lg:text-base text-2xs uppercase duration-300 cursor-pointer font-bold tracking-wider transform text-fg-pink bg-white" href="https://opensea.io/collection/beanzofficial" target="_blank" rel="noreferrer">
            <span className="block lg:hidden">{buttonText}</span>
            <span className="hidden lg:block">{buttonText}</span>
            <span className="hidden lg:block pl-4 duration-300 transform translate-x-0 lg:group-hover:translate-x-2">
              <svg className="fill-fg-pink lg:h-4 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m13.025 1-2.847 2.828 6.176 6.176H0v3.992h16.354l-6.176 6.176L13.025 23 24 12z"/></svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};


