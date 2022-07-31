import "../styles/globals.css";
import "../styles/animation.scss";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
