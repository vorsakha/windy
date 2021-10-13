import React from "react";
import Link from "next/link";
import Alert from "../Alert";

import { WiStrongWind as LogoIcon } from "@react-icons/all-files/wi/WiStrongWind";
import { useRouter } from "next/dist/client/router";

const Layout: React.FC = ({ children }) => {
  const router = useRouter();

  const isHome = router.pathname === "/";
  const isFavs = router.pathname === "/favs";

  return (
    <div className="min-w-screen">
      <Alert />
      <header className="min-w-screen h-14 px-4">
        <nav className="w-full flex flex-row justify-between items-center m-auto h-14 max-w-screen-lg border-b border-gray-200">
          <div>
            <Link href="/">
              <a className="flex items-center font-bold text-3xl text-blue-400">
                Windy
                <LogoIcon className="text-5xl" />
              </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a
                className={`${
                  isHome ? "text-blue-400" : "text-black"
                } py-4 mr-6 font-bold hover:text-blue-400`}
              >
                Home
              </a>
            </Link>
            <Link href="/favs">
              <a
                className={`${
                  isFavs ? "text-blue-400" : "text-black"
                } py-4 font-bold hover:text-blue-400`}
              >
                Favoritas
              </a>
            </Link>
          </div>
        </nav>
      </header>

      <div className="flex flex-col justify-center m-auto max-w-screen-lg min-h-total px-4 z-0">
        {children}
      </div>
      <footer className="flex items-center justify-center w-full h-14">
        <p className="text-center text-gray-500 text-xs">
          &copy;2021 Windy. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
