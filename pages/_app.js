import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Custom404 from "./Custom404";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Component {...pageProps} /> */}
      <Custom404 />
    </>
  );
}
