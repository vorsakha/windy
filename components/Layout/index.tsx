import React from "react";
import Link from "next/link";
import Alert from "../Alert";
import SearchBar from "../SearchBar";

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
            <Link href="/favs">Favoritas</Link>
            <SearchBar />
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
