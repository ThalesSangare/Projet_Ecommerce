import { HandCoins, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const liens = [
  { nom: "Accueil", url: "/" },
  { nom: "Produits", url: "/produits" },
  { nom: "A propos", url: "/produits" },
  { nom: "Contact", url: "/contact" },
  { nom: "Connexion", url: "/contact" },
];

function NavBar() {
  // etat du menu pour gerer l'affichage sur mobile
  const [menuOuvert, setMenuOuvert] = useState(false);
  return (
    <div className="relative max-w-7xl mx-auto flex items-center px-6 py-4 mb-8">
      {/* LOGO */}
      <div className="flex-1 flex">
        <HandCoins />
        <h1 className="ml-2 text-sm md:text-xl text-accent font-bold">
          SmartMarket
        </h1>
      </div>

      {/* LIENS */}
      <div className="flex-1 flex justify-center">
        <ul className="hidden md:flex gap-4">
          {liens.map((lien) => (
            <li
              key={lien.nom}
              className="hover:text-accent transition duration-300 cursor-pointer"
            >
              <Link to={lien.url}>{lien.nom}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/*ICONES  */}
      <div className="flex-1 flex justify-end ">
        <ul className="flex gap-4">
          <li>
            <a href="#" className="hover:text-accent transition duration-300">
              <Search />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-accent transition duration-300">
              <ShoppingCart />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-accent transition duration-300">
              <UserRound />
            </a>
          </li>
        </ul>
      </div>

      {/* btn menu pour petit ecran */}
      <div className="md:hidden flex items-center ml-4">
        <button
          className="btn btn-square"
          onClick={() => setMenuOuvert(!menuOuvert)}
        >
          <Menu />
        </button>
      </div>
      {/* menu deroulant sur petit ecrna */}
      {menuOuvert && (
        <div className="absolute top-full left-0 w-full bg-base-100 shadow-md flex flex-col items-center py-4">
          {liens.map((lien) => (
            <Link
              to={lien.url}
              key={lien.nom}
              className="hover:text-accent transition duration-300 cursor-pointer"
            >
              {lien.nom}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
export default NavBar;
