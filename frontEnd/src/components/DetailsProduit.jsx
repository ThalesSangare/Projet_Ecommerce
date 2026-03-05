import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailsProduit() {
  const { id } = useParams();
  const [produit, setProduit] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduit(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération du produit :", error),
      );
  }, [id]);

  if (!produit) {
    return <div>Chargement...</div>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{produit.title}</h1>
      <img
        src={produit.image}
        alt={produit.title}
        className="w-64 h-64 object-contain mb-4"
      />
      <p className="text-lg font-semibold mb-2">Prix : ${produit.price}</p>
      <p>{produit.description}</p>
    </div>
  );
}

export default DetailsProduit;
