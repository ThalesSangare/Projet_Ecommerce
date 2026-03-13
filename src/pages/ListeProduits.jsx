import { useState, useEffect } from "react";
import CardsProduits from "./CardsProduits";
import api from "../API/api";
import Recherche from "../components/recherche/Recherche";

function ListeProduits({ limite, voirRecherche = false }) {
  //  State pour stocker tous les produits récupérés depuis l'API
  const [produits, setProduits] = useState([]);

  //  State pour gérer le texte saisi dans la barre de recherche
  const [rechercheTerme, setRechercheTerme] = useState("");

  //  State pour gérer le chargement
  const [loading, setLoading] = useState(true);

  //  useEffect pour fetch les produits depuis FakeStoreAPI au montage
  useEffect(() => {
    api
      .get("/") // URL de l'API
      .then((res) => {
        // On formate les produits pour ne garder que les champs utiles
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

  //  Affichage pendant le chargement
  if (loading) {
    return <div className="text-center py-20">Chargement des produits...</div>;
  }

  //  Filtrage des produits selon la recherche
  const produitsFiltres = produits
    .filter((p) =>
      p.nom.toLowerCase().includes(rechercheTerme.trim().toLowerCase()),
    )
    .slice(0, limite || produits.length); // appliquer la limite si besoin

  return (
    <div className="w-full max-w-6xl mx-auto mt-4 mb-6">
      {/* ========================= */}
      {/* Barre de recherche */}
      {/* ========================= */}
      {voirRecherche && (
        <Recherche
          rechercheTerme={rechercheTerme} // texte de recherche
          setRechercheTerme={setRechercheTerme} // fonction pour modifier le texte
          produits={produits} // liste complète pour suggestions
        />
      )}

      {/* ========================= */}
      {/* Affichage des produits */}
      {/* ========================= */}
      <div
        className="grid gap-4 justify-center 
      grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 "
      >
        {produitsFiltres.length === 0 ? (
          // Aucun produit trouvé
          <p className="col-span-full text-center text-gray-500">
            Aucun produit trouvé
          </p>
        ) : (
          // Afficher les produits filtrés
          produitsFiltres.map((produit) => (
            <CardsProduits key={produit.id} produits={produit} />
          ))
        )}
      </div>
    </div>
  );
}

export default ListeProduits;
