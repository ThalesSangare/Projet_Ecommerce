// ====================== Version avec données statiques  ========================================================

// import CardsProduits from "./CardsProduits";
// import img1 from "../assets/1.webp";
// import img2 from "../assets/2.webp";
// import img3 from "../assets/3.webp";
// import img4 from "../assets/4.webp";
// import img5 from "../assets/5.webp";

// const produits = [
//   {
//     id: 1,
//     nom: "Produit 1",
//     prix: 10000,
//     description: "Description du produit 1",
//     image: img1,
//   },
//   {
//     id: 2,
//     nom: "Produit 2",
//     prix: 20000,
//     description: "Description du produit 2",
//     image: img2,
//   },
//   {
//     id: 3,
//     nom: "Produit 3",
//     prix: 30000,
//     description: "Description du produit 3",
//     image: img3,
//   },
//   {
//     id: 4,
//     nom: "Produit 4",
//     prix: 40000,
//     description: "Description du produit 4",
//     image: img4,
//   },
//   {
//     id: 5,
//     nom: "Produit 5",
//     prix: 50000,
//     description: "Description du produit 5",
//     image: img5,
//   },
//   {
//     id: 6,
//     nom: "Produit 6",
//     prix: 60000,
//     description: "Description du produit 6",
//     image: img3,
//   },
//   {
//     id: 7,
//     nom: "Produit 7",
//     prix: 70000,
//     description: "Description du produit 7",
//     image: img4,
//   },
//   {
//     id: 8,
//     nom: "Produit 6",
//     prix: 60000,
//     description: "Description du produit 6",
//     image: img1,
//   },
//   {
//     id: 9,
//     nom: "Produit 7",
//     prix: 70000,
//     description: "Description du produit 7",
//     image: img2,
//   },
//   {
//     id: 10,
//     nom: "Produit 6",
//     prix: 60000,
//     description: "Description du produit 6",
//     image: img3,
//   },
//   {
//     id: 11,
//     nom: "Produit 7",
//     prix: 70000,
//     description: "Description du produit 7",
//     image: img4,
//   },
//   {
//     id: 12,
//     nom: "Produit 6",
//     prix: 60000,
//     description: "Description du produit 6",
//     image: img5,
//   },
//   {
//     id: 13,
//     nom: "Produit 7",
//     prix: 70000,
//     description: "Description du produit 7",
//     image: img4,
//   },
// ];

// function ListeProduits() {
//   return (
//     <div className="flex gap-4 justify-center flex-wrap">
//       {produits.map((produit) => (
//         <CardsProduits key={produit.id} produits={produit} />
//       ))}
//     </div>
//   );
// }
// export default ListeProduits;
// =======================================================================================================================================

// Version avec fetch depuis FakeStoreAPI

import { useState, useEffect } from "react";
import CardsProduits from "./CardsProduits";

function ListeProduits({ limite }) {
  //  State pour stocker les produits récupérés depuis l'API
  const [produits, setProduits] = useState([]);

  //  State pour gérer le chargement
  const [loading, setLoading] = useState(true);

  //  useEffect pour fetch les produits une seule fois au montage
  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // URL de FakeStoreAPI
      .then((res) => res.json()) // conversion en JSON
      .then((data) => {
        //  FakeStoreAPI a les champs : id, title, price, description, category, image
        // On les mappe pour correspondre à mes composant CardsProduits
        const produitsFormates = data.map((p) => ({
          id: p.id,
          nom: p.title, // correspond à 'nom' utilisé dans CardsProduits
          prix: p.price, // correspond à 'prix'
          description: p.description,
          image: p.image,
        }));

        setProduits(produitsFormates); // mise à jour du state
        setLoading(false); // chargement terminé
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
    <div className="flex gap-4 justify-center flex-wrap">
      {produitsAffiches.map((produit) => (
        //  On passe chaque produit à CardsProduits
        <CardsProduits key={produit.id} produits={produit} />
      ))}
    </div>
  );
}

export default ListeProduits;
