import React from "react";
import Link from "next/link";
import Alert from "../common/Alert";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Alert />
      <header>
        <nav>
          <div>
            <Link href="/">WINDY</Link>
          </div>
          <div>
            <Link href="/favoritas">Favoritas</Link>
            {/* <Link href="/procurar">Favoritas</Link> */}
          </div>
        </nav>
      </header>
      {children}
      <footer>
        <p className="text-center text-gray-500 text-xs">
          &copy;2021 Windy. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
