import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fantasy Garage</title>
        <meta name="description" content="The OG NFT project for car enthusiasts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed w-full top-0 lg:px-8 px-5 lg:pt-8 pt-5 z-70">
        <div className="flex h-full border-b border-white items-center justify-center max-w-11xl mx-auto border-opacity-0">
          <div className="flex-grow">
            <div className="flex">
              <a className="w-min-content">
                <img src="/../images/logo.svg" alt="Fantasy Garage NFT" className="h-7 p-2 rounded hover:bg-red-600 bg-red-700" />
              </a>
            </div>
          </div>
          <div className="items-center hidden lg:flex">
            <ul className="flex space-x-2">
              <li>
                <a href="/allowlist" className="bg-opacity-20 text-black opacity-80 items-center relative h-7 items-center font-mono tracking-wider pt-0.5 first::pt-0 duration-1000 uppercase text-2xs font-500 padding-huge bg-white duration-200 items-center px-4 hover:bg-opacity-70 rounded  flex justify-center flex-row">Allowlist</a>
              </li>
              <li>
                <a href="/map" className="bg-opacity-20 text-black opacity-80 items-center relative h-7 items-center font-mono tracking-wider pt-0.5 first::pt-0 duration-1000 uppercase text-2xs font-500 padding-huge bg-white duration-200 items-center px-4 hover:bg-opacity-70 rounded  flex justify-center flex-row">Map</a>
              </li>
              <li>
                <a href="/garage" className="bg-opacity-20 text-black opacity-80 items-center relative h-7 items-center font-mono tracking-wider pt-0.5 first::pt-0 duration-1000 uppercase text-2xs font-500 padding-huge bg-white duration-200 items-center px-4 hover:bg-opacity-70 rounded  flex justify-center flex-row">Garage</a>
              </li>
              <li>
                <div className="bg-opacity-20 text-black opacity-80 items-center relative h-7 items-center font-mono tracking-wider pt-0.5 first::pt-0 duration-1000 uppercase text-2xs padding-huge bg-white duration-200 items-center px-4 rounded  flex justify-center flex-row cursor-eye">
                  Shop
                  <span className="absolute whitespace-nowrap -top-2 -right-1 flex items-center text-4xs tracking-wide w-auto left-1/2s transforms -translate-x-1/2s bg-white shadow pt-0.5 px-2 rounded-sm text-red-500">Soon</span>
                </div>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-opacity-20 text-black opacity-80 items-center relative h-7 items-center font-mono tracking-wider pt-0 first::pt-0 duration-1000 uppercase text-2xs font-500 padding-huge bg-white duration-200 items-center px-4 hover:bg-opacity-70 rounded  flex justify-center flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current stroke-current h-4 w-4" viewBox="0 0 40 40"><path d="M38.526 8.625a15.199 15.199 0 0 1-4.373 1.198 7.625 7.625 0 0 0 3.348-4.211 15.25 15.25 0 0 1-4.835 1.847 7.6 7.6 0 0 0-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 0 1-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 0 1-3.438.13 7.618 7.618 0 0 0 7.112 5.286A15.306 15.306 0 0 1 1.42 31.79a21.55 21.55 0 0 0 11.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 0 0 3.799-3.941z"/></svg>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-opacity-20 text-black opacity-80 items-center relative h-7 items-center font-mono tracking-wider pt-0 first::pt-0 duration-1000 uppercase text-2xs font-500 padding-huge bg-white duration-200 items-center px-4 hover:bg-opacity-70 rounded  flex justify-center flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current stroke-current h-4 w-4" viewBox="0 0 40 40"><path d="M27.524 1.79c3.334.17 5.899 1.11 7.694 2.992 1.796 1.88 2.822 4.36 2.993 7.694 0 1.314.078 3.651.085 7.089v2.108c-.002 2.768-.014 4.702-.085 5.85-.171 3.335-1.112 5.9-2.993 7.695-1.88 1.796-4.36 2.822-7.694 2.993-1.15.071-3.143.083-5.88.085h-3.317c-2.768-.002-4.702-.014-5.85-.085-3.335-.171-5.9-1.112-7.695-2.993-1.796-1.795-2.822-4.36-2.993-7.694-.065-1.04-.08-2.771-.084-5.118v-4.812c.004-2.347.02-4.078.084-5.118.171-3.334 1.112-5.899 2.993-7.694 1.795-1.796 4.36-2.822 7.694-2.993 1.04-.065 2.771-.08 5.118-.084h4.847c2.361.004 4.043.02 5.083.084Zm-7.61 8.805c-2.65 0-4.873.94-6.668 2.736C11.45 15.212 10.51 17.35 10.51 20c0 2.65.94 4.873 2.736 6.669 1.88 1.795 4.018 2.736 6.668 2.736 2.65 0 4.874-.94 6.67-2.736 1.795-1.881 2.735-4.019 2.735-6.669 0-2.65-.94-4.873-2.736-6.669-1.795-1.88-4.018-2.736-6.669-2.736Zm0 3.25c1.71 0 3.164.598 4.36 1.795A6.076 6.076 0 0 1 26.07 20c0 1.624-.598 3.078-1.795 4.275-1.197 1.197-2.65 1.795-4.36 1.795-1.71 0-3.164-.598-4.36-1.795-1.198-1.112-1.796-2.565-1.796-4.275 0-1.71.598-3.163 1.795-4.36 1.197-1.197 2.65-1.796 4.36-1.796Zm9.833-5.9c-.599 0-1.112.257-1.54.684-.427.427-.683.94-.683 1.539 0 .598.256 1.111.684 1.539.427.427.94.684 1.539.684.598 0 1.111-.257 1.538-.684.428-.428.684-.94.684-1.54 0-.598-.256-1.11-.684-1.538-.427-.427-.94-.684-1.538-.684Z"/></svg>
                </a>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noreferrer" className="bg-opacity-20 text-black opacity-80 items-center relative h-7 items-center font-mono tracking-wider pt-0 first::pt-0 duration-1000 uppercase text-2xs font-500 padding-huge bg-white duration-200 items-center px-4 hover:bg-opacity-70 rounded  flex justify-center flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current stroke-current h-4 w-4" viewBox="0 0 40 40"><path d="M33.567 7.554a32.283 32.283 0 0 0-7.969-2.472.12.12 0 0 0-.128.06 22.623 22.623 0 0 0-.992 2.039 29.804 29.804 0 0 0-8.95 0 20.625 20.625 0 0 0-1.008-2.038.126.126 0 0 0-.128-.06 32.194 32.194 0 0 0-7.968 2.47.114.114 0 0 0-.053.046C1.296 15.18-.095 22.577.588 29.88c.003.036.023.07.05.092 3.349 2.459 6.593 3.952 9.776 4.941a.127.127 0 0 0 .137-.045 23.203 23.203 0 0 0 2-3.253.124.124 0 0 0-.068-.172A21.379 21.379 0 0 1 9.43 29.99a.126.126 0 0 1-.012-.209c.205-.153.41-.313.607-.475a.121.121 0 0 1 .126-.017c6.407 2.925 13.343 2.925 19.675 0a.12.12 0 0 1 .128.015c.196.162.4.324.608.477a.126.126 0 0 1-.011.209c-.975.57-1.99 1.051-3.055 1.454a.125.125 0 0 0-.067.173 26.052 26.052 0 0 0 1.998 3.252.125.125 0 0 0 .138.046c3.199-.99 6.442-2.482 9.79-4.941a.126.126 0 0 0 .052-.09c.816-8.445-1.368-15.78-5.789-22.283a.1.1 0 0 0-.05-.046zm-20.06 17.88c-1.928 0-3.517-1.771-3.517-3.946 0-2.175 1.558-3.946 3.518-3.946 1.975 0 3.549 1.787 3.518 3.946 0 2.175-1.558 3.946-3.518 3.946zm13.01 0c-1.93 0-3.52-1.771-3.52-3.946 0-2.175 1.56-3.946 3.52-3.946 1.974 0 3.548 1.787 3.517 3.946 0 2.175-1.543 3.946-3.518 3.946z"/></svg>
                </a>
              </li>
              <li>
                <a href="https://opensea.io" target="_blank" rel="noreferrer" className="bg-opacity-20 text-black opacity-80 items-center relative h-7 items-center font-mono tracking-wider pt-0 first::pt-0 duration-1000 uppercase text-2xs font-500 padding-huge bg-white duration-200 items-center px-4 hover:bg-opacity-70 rounded  flex justify-center flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current stroke-current h-4 w-4" viewBox="0 0 40 40"><path d="M20 1C9.508 1 1 9.508 1 20s8.508 19 19 19 19-8.508 19-19S30.496 1 20 1Zm-9.625 19.638.08-.129 4.943-7.733a.17.17 0 0 1 .297.023c.824 1.85 1.539 4.153 1.204 5.586-.14.589-.532 1.387-.973 2.124a3.808 3.808 0 0 1-.186.316.168.168 0 0 1-.14.072h-5.081a.168.168 0 0 1-.144-.259Zm22.028 2.66a.172.172 0 0 1-.102.16c-.384.163-1.695.768-2.239 1.524-1.39 1.934-2.45 4.7-4.826 4.7h-9.902c-3.512 0-6.354-2.853-6.354-6.376v-.114a.17.17 0 0 1 .171-.167h5.518c.11 0 .19.099.182.209-.042.357.027.726.198 1.06a1.94 1.94 0 0 0 1.74 1.08h2.732V23.24H16.82a.175.175 0 0 1-.14-.273 20.887 20.887 0 0 0 1.083-1.714c.247-.433.486-.897.68-1.36.038-.084.068-.171.103-.255.053-.148.106-.289.144-.426.038-.117.072-.239.103-.353.09-.395.129-.813.129-1.246 0-.171-.008-.35-.023-.517a6.939 6.939 0 0 0-.053-.559c-.015-.163-.046-.327-.076-.494a10.282 10.282 0 0 0-.156-.74l-.023-.096c-.045-.17-.087-.33-.14-.501a18.721 18.721 0 0 0-.521-1.54 8.252 8.252 0 0 0-.224-.562c-.114-.281-.232-.536-.338-.775a5.642 5.642 0 0 1-.149-.312c-.053-.114-.106-.228-.163-.338-.038-.083-.084-.163-.114-.24l-.334-.615c-.046-.083.03-.186.121-.16l2.09.567h.015l.274.08.304.083.11.03V9.688c0-.6.479-1.087 1.076-1.087.296 0 .566.122.756.32.194.197.315.467.315.767v1.843l.224.06c.016.008.035.016.05.027.053.038.133.099.232.175.08.06.163.137.262.217a17.06 17.06 0 0 1 .908.798c.338.315.718.684 1.083 1.094.103.118.201.232.304.357.099.126.209.247.3.369.126.163.255.334.373.513.053.083.117.17.167.254.152.225.281.456.406.688.054.107.107.224.152.338.141.312.251.627.32.947.022.068.038.14.045.209v.015c.023.091.03.19.038.292.03.323.015.65-.053.977a4.37 4.37 0 0 1-.114.407c-.05.133-.095.27-.156.402-.118.27-.254.544-.418.795-.053.095-.118.193-.178.288-.069.1-.141.194-.202.285a6.16 6.16 0 0 1-.273.35 3.694 3.694 0 0 1-.263.33c-.129.156-.254.3-.387.441-.076.092-.16.187-.247.27-.084.095-.171.179-.247.255-.133.133-.24.232-.33.319l-.217.194a.16.16 0 0 1-.114.045h-1.665v2.132h2.094c.467 0 .912-.163 1.273-.471.122-.106.657-.57 1.292-1.27a.15.15 0 0 1 .08-.049l5.78-1.672a.17.17 0 0 1 .216.164v1.223Z"/></svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:hidden z-50">
            <div className="single-small">
              <button className="hamburger single-small single-small--magnetic" type="button">
                <div className="inner transition ease-in-out duration-500">
                  <span className="before:bg-black after:bg-black bar transition ease-in-out duration-500"></span>
                  <span className="before:bg-black after:bg-red-400 bg-gray-400 bar"></span>
                  <span className="before:bg-black after:bg-black bar transition ease-in-out duration-500"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <main>
        <img className="min-w-screen w-full lg:block bottom-0 transform h-screen object-cover absolute top-0 left-0 object-center overlay-item -z-10" src="/../images/beanzwashere.jpeg" alt="" />
        <img className="w-full bg-olive lg:hidden bottom-0 transform h-screen object-cover  object-center overlay-item -z-10" src="/../images/mobilemeep.jpeg" alt="" />
        <div className="fixed h-24 bottom-0 left-0 w-full">
          <div className="grid grid-cols-1 h-24 w-full">
            <div className="fixed h-20 lg:bottom-8 lg:right-8 bottom-4 lg:px-0 px-4 lg:w-full lg:max-w-2xl w-full">
              <div className="bg-[#bb3647] w-full text-white rounded relative items-center lg:pr-3 pr-3 h-20 flex items-center shadow-lg">
                <img className="rounded-md z-100 h-full" src="/../images/bean_pod_FINAL2.gif" alt="" />
                <div className="block lg:mr-4 mr-auto lg:ml-4 ml-0">
                  <p className="font-sans text-3xs tracking-widest font-400 uppercase opacity-50">Something is coming</p>
                  <p className="font-sans uppercase tabular-nums font-700 md:text-xl text-sm">Beanz</p>
                </div>
                <div className="ml-auto">
                  <a className="lg:px-6 px-4 group flex shadow-lg items-center justify-center lg:text-base text-2xs uppercase lg:h-12 h-12 duration-300 cursor-pointer font-600 transform border border-none text-gray-800 hover:text-black bg-white" href="https://opensea.io/collection/beanzofficial" target="_blank" rel="noreferrer">
                    <span className="block lg:hidden">Opensea</span>
                    <span className="hidden lg:block">Opensea</span>
                    <span className="hidden lg:block pl-4 duration-300 transform  translate-x-0 lg:group-hover:translate-x-2">
                      <svg className="fill-current lg:h-4 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m13.025 1-2.847 2.828 6.176 6.176H0v3.992h16.354l-6.176 6.176L13.025 23 24 12z"/></svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};