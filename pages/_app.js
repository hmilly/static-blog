import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="max-w-screen-md m-auto overflow-auto .py-0 .px-10px">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
