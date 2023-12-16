import Layout from "../components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement } from "react"; // Import ReactElement

function App({ Component, pageProps }: AppProps): ReactElement { // Explicitly define Component as ReactElement
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
