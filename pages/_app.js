import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="max-w-screen-md m-auto overflow-auto p-5">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
