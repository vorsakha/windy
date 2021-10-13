import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

// Context
import AlertProvider from "../context/AlertContext";

import Layout from "../components/Layout";
import TemperatureProvider from "../context/TemperatureContext";
import LocalDataProvider from "../context/LocalDataContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalDataProvider>
      <AlertProvider>
        <TemperatureProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TemperatureProvider>
      </AlertProvider>
    </LocalDataProvider>
  );
}
export default MyApp;
