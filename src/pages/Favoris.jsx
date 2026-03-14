import { useEffect, useState } from "react";
import api from "../API/api";
import CardsProduits from "./CardsProduits";
import { Heart } from "lucide-react";

function Favoris() {
  const [produits, setProduits] = useState([]);
  const [favorisIds, setFavorisIds] = useState([]);

  useEffect(() => {
    // récupérer les ids favoris
    const favoris = JSON.parse(localStorage.getItem("favoris")) || [];
    setFavorisIds(favoris);

    // récupérer tous les produits
    api.get("/").then((res) => {
      const produitsFormates = res.data.map((p) => ({
        id: p.id,
        nom: p.title,
        prix: p.price,
        description: p.description,
        image: p.image,
      }));

      setProduits(produitsFormates);
    });
  }, []);

  // filtrer les produits favoris
  const produitsFavoris = produits.filter((p) => favorisIds.includes(p.id));

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 flex gap-4">
        Mes Produit favoris <Heart className="fill-red-500 text-red-500" />
      </h2>

      <div
        className="grid gap-6 justify-items-center 
        grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {produitsFavoris.length === 0 ? (
          <p>Aucun produit en favoris</p>
        ) : (
          produitsFavoris.map((produit) => (
            <CardsProduits key={produit.id} produits={produit} />
          ))
        )}
      </div>
    </div>
  );
}

export default Favoris;
