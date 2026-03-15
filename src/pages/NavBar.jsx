import {
  HandCoins,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
  UserRound,
} from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FavorisContext } from "../components/context/FavorisContext";
import { PanierContext } from "../components/context/PanierContext";

const liens = [
  { nom: "A propos", url: "/propos" },
  { nom: "Homme", url: "/produits" },
  { nom: "Femme", url: "/produits" },
  { nom: "Contact", url: "/contact" },
  { nom: "Connexion", url: "/login" }, //a retirer plustard
];

// a rempli via base de donnee plustard
const categorieLien = [
  { nom: "Nouveautés", url: "/categorie/nouveautes" },
  { nom: "Chaussures", url: "/categorie/chaussures" },
  { nom: "Vêtements", url: "/categorie/vetements" },
  { nom: "Sacs", url: "/categorie/sacs" },
  { nom: "Montres", url: "/categorie/montres" },
  { nom: "Accessoires", url: "/categorie/accessoires" },
  { nom: "Sports & Loisirs", url: "/categorie/sports-loisirs" },
];

function NavBar() {
  // compteur de favoris
  const { favoris } = useContext(FavorisContext);

  // compteur de panier
  const { cart } = useContext(PanierContext);

  // etat du menu pour gerer l'affichage sur mobile
  const [menuOuvert, setMenuOuvert] = useState(false);
  // etat de la recherche pour filtrer les produits
  return (
    <div className="bg-white shadow-md px-4 py-2  items-center mb-5 sticky top-0 z-50">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        {/* Ligne du haut */}
        <div className="flex items-center justify-between w-full md:flex-1">
          {/* bouton menu burger visible seulement sur mobile */}
          <div className="md:hidden flex items-center ml-4">
            <button
              className="btn btn-square"
              onClick={() => setMenuOuvert(true)} // ouvre le menu
            >
              <Menu />
            </button>
          </div>
          {/* LOGO */}
          <div className="flex items-center">
            <HandCoins />
            <h1 className="ml-2 text-sm md:text-xl text-accent font-bold">
              SmartMarket
            </h1>
          </div>

          {/* ICONES */}
          <div className="flex items-center gap-4 md:justify-end md:flex-1">
            <a
              href="#"
              className="hidden md:block hover:text-accent transition"
            >
              Besoin d'aide ?
            </a>

            {/*  Favoris */}
            <Link to="/favoris" className="relative">
              <Heart className="cursor-pointer hover:text-accent transition" />

              {favoris.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                  {favoris.length}
                </span>
              )}
            </Link>

            <Link to="/panier" className="relative">
              <ShoppingCart className="cursor-pointer hover:text-accent transition" />

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs  rounded-full px-1.5 py-0.5">
                  {cart.length}
                </span>
              )}
            </Link>

            <UserRound className="cursor-pointer hover:text-accent transition" />
          </div>
        </div>
        {/* Barre de recherche */}
        {/* <div className="w-full md:flex-1 md:px-6">
          <Recherche />
        </div> */}
      </div>

      {/* LIENS */}
      <div className="flex-1 flex justify-center">
        <ul className="hidden md:flex gap-10">
          {liens.map((lien) => (
            <li
              key={lien.nom}
              className="uppercase tracking-wide hover:text-accent transition duration-300 cursor-pointer"
            >
              <Link to={lien.url}>{lien.nom}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* OVERLAY sombre derrière le menu */}
      {menuOuvert && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOuvert(false)} // cliquer sur le fond ferme le menu
        ></div>
      )}

      {/* MENU LATERAL  */}
      <div
        className={`
    fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50
    transform transition-transform duration-300
    ${menuOuvert ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        {/* header du menu */}
        <div className="bg-accent text-white p-4 font-bold">
          <span className="flex flex-row gap-3">
            <User />
            Bonjour, Identifiez-vous
          </span>
        </div>

        {/* liste des liens */}
        <ul className="flex flex-col p-6 gap-4">
          {liens.map((lien) => (
            <li key={lien.nom}>
              <Link
                to={lien.url}
                onClick={() => setMenuOuvert(false)} // ferme le menu quand on clique
                className="text-lg hover:text-accent transition"
              >
                {lien.nom}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* lieste des categories  */}
      <div className="hidden md:flex justify-center border-t border-b border-gray-400 p-5 m-4">
        <ul className="flex gap-17 ">
          {categorieLien.map((categori) => (
            <li
              key={categori.nom}
              className="uppercase tracking-wide hover:text-accent transition duration-300 cursor-pointer"
            >
              {categori.nom}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
