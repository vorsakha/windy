import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

// Context
import AlertProvider from "../context/AlertContext";

import Layout from "../components/Layout";
import TemperatureProvider from "../context/TemperatureContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider>
      <TemperatureProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TemperatureProvider>
    </AlertProvider>
  );
}
export default MyApp;
