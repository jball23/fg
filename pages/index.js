import { Cta } from '../components/Cta';

export default function Home() {
  return (
    <>
      <div className="animation-outer-wrapper flex items-center justify-center bg-fg-pink">
        <div className="animation-inner-wrapper">
          <div className="animation-frame"></div>
        </div>
      </div>
      <Cta
          heading="Get your keys"
          subHeading="Project E30"
          buttonText="Join Our Discord"
        />
    </>
  );
};