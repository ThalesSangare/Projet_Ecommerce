import {
  ArrowRight,
  House,
  Laptop,
  ShoppingBag,
  ShoppingBasket,
  Smartphone,
  Video,
} from "lucide-react";
import React from "react";
import ListeProduits from "./ListeProduits";
import imgLivraison from "../assets/icones/livraison.png";
import imgPaiement from "../assets/icones/paiement.png";
import imgSupport from "../assets/icones/support.png";
const categories = [
  {
    id: 1,
    nom: "Telephone",
    image: <Smartphone size={24} />,
  },
  { id: 2, nom: "Ordinateur", image: <Laptop size={24} /> },
  { id: 3, nom: "Accessoires", image: <Video size={24} /> },
  { id: 4, nom: "Vetement", image: <ShoppingBag size={24} /> },
  { id: 5, nom: "Chaussure", image: <ShoppingBasket size={24} /> },
  { id: 6, nom: "Maison", image: <House size={24} /> },
];

const services = [
  {
    id: 1,
    nom: "Livraison Rapide",
    description: "Livraison gratuite en France, Livraison en 24/48h",
    image: imgLivraison,
  },
  {
    id: 2,
    nom: "Paiement Sécurisé",
    description: "Transactions 100% sécurisées par carte ou PayPal.",
    image: imgPaiement,
  },
  {
    id: 3,
    nom: "Support 24/7",
    description: "Notre équipe est disponible 24h/24 et 7j/7.",
    image: imgSupport,
  },
];

function Home() {
  return (
    <div>
      <div>{/* un petit slide avec des img de produits */}</div>
      <div className="grid grid-cols-2 md:flex md:justify-center gap-2 px-4">
        {/* une section avec les produits par categorie */}
        {categories.map((categorie) => (
          <div
            key={categorie.id}
            className="flex flex-col items-center justify-center
                 text-center h-20 md:h-30 md:w-30
                 border border-zinc-200
                 rounded-xl
                 shadow-md hover:shadow-accent
                 transition-all duration-300
                 p-4"
          >
            {categorie.image}
            <h3 className="items-center justify-center">{categorie.nom}</h3>
          </div>
        ))}
      </div>
      {/* =============== */}

      <div className="flex flex-col">
        {/* une section avec les produits les plus vendus */}
        <div className="flex items-center px-6 py-4">
          <h3 className="flex text-2xl">Nos produits </h3>
          <button className="btn hover:btn-accent justify-end ml-auto">
            Voir les produits <ArrowRight />
          </button>
        </div>
        <ListeProduits limite={8} />
      </div>
      <div>
        {/* une section avec les produits en promotion ou des nouveaux */}
      </div>
      <div>
        {/* une section Nos Services qui aura 3 boite(Livraison RApide - Paiement securisé - Support 24/7)*/}
        <div className="flex flex-col items-center px-6 py-4 mt-6">
          <h3 className="text-2xl ">Nos Services</h3>
          <span className="ml-4 text-gray-600">
            Nous nous engageons à vous offrir la meilleure expérience d'achat
            possible
          </span>
        </div>

        <div className="flex flex-wrap justify-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center
                 w-60 h-60
                 border border-zinc-200
                 rounded-xl
                 shadow-lg hover:shadow-accent
                 transition-shadow duration-300
                 m-4 p-6"
            >
              <img
                src={service.image}
                alt={service.nom}
                className="w-20 h-20 object-contain mb-4"
              />

              <div>
                <h4 className="text-lg font-semibold mb-2">{service.nom}</h4>

                <p className="text-sm text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>{/* une section avec les avis des clients */}</div>
      <div></div>
    </div>
  );
}

export default Home;
