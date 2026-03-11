// Version avec fetch depuis FakeStoreAPI

import { useState, useEffect } from "react";
import CardsProduits from "./CardsProduits";
import api from ".././API/api";

function ListeProduits({ limite }) {
  //  State pour stocker les produits récupérés depuis l'API
  const [produits, setProduits] = useState([]);

  //  State pour gérer le chargement
  const [loading, setLoading] = useState(true);

  //  useEffect pour fetch les produits une seule fois au montage
useEffect(() => {
  api
    .get("/") // URL de FakeStoreAPI
    .then((res) => {
      // FakeStoreAPI a les champs : id, title, price, description, image
      const produitsFormates = res.data.map((p) => ({
        id: p.id,
        nom: p.title,
        prix: p.price,
        description: p.description,
        image: p.image,
      }));

      setProduits(produitsFormates);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Erreur lors de la récupération des produits :", err);
      setLoading(false);
    });
}, []);

  if (loading) {
    //  Affichage pendant le chargement
    return <div className="text-center py-20">Chargement des produits...</div>;
  }
  //  Si limite existe = on slice
  const produitsAffiches = limite ? produits.slice(0, limite) : produits;

  return (
    //  Flex wrap pour que la grille s'adapte à l'écran
    // <div className="flex gap-4 justify-center flex-wrap">
    //   {produitsAffiches.map((produit) => (
    //     //  On passe chaque produit à CardsProduits
    //     <CardsProduits key={produit.id} produits={produit} />
    //   ))}
    // </div>

    // je veux
    <div
      className="grid gap-4 justify-center 
                grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      {produitsAffiches.map((produit) => (
        <CardsProduits key={produit.id} produits={produit} />
      ))}
    </div>
  );
}

export default ListeProduits;
