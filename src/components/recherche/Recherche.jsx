import { Search } from "lucide-react";
import { useState } from "react";

function Recherche({ rechercheTerme, setRechercheTerme, produits }) {
  //  State local pour gérer l'affichage des suggestions
  const [showSuggestions, setShowSuggestions] = useState(false);

  //  On filtre les produits pour les suggestions (limité à 5)
  const produitsFiltres = produits
    .filter((p) =>
      p.nom.toLowerCase().includes(rechercheTerme.trim().toLowerCase()),
    )
    .slice(0, 5);

  return (
    <div className="relative w-full max-w-6xl mx-auto mb-6">
      {/* ========================= */}
      {/* Input de recherche */}
      {/* ========================= */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder="Que recherchez-vous ?"
          value={rechercheTerme} // valeur centrale depuis ListeProduits
          onChange={(e) => {
            setRechercheTerme(e.target.value); // mise à jour du texte
            setShowSuggestions(true); // afficher les suggestions
          }}
          // onBlur avec timeout pour laisser le clic sur suggestion se déclencher
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition shadow-sm"
        />

        {/* ========================= */}
        {/* Suggestions */}
        {/* ========================= */}
        {showSuggestions && rechercheTerme && produitsFiltres.length > 0 && (
          <div className="absolute w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50">
            {produitsFiltres.map((prod) => (
              <div
                key={prod.id}
                //  onMouseDown pour que le clic remplisse l'input avant le blur
                onMouseDown={() => setRechercheTerme(prod.nom)}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
              >
                <img
                  src={prod.image}
                  alt={prod.nom}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-sm">{prod.nom}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ========================= */}
      {/* Compteur de résultats */}
      {/* ========================= */}
      {rechercheTerme && (
        <p className="mt-2 text-sm text-gray-500">
          {
            produits.filter((p) =>
              p.nom.toLowerCase().includes(rechercheTerme.trim().toLowerCase()),
            ).length
          }{" "}
          produit(s) trouvé(s) pour "
          <span className="font-semibold">{rechercheTerme}</span>"
        </p>
      )}
    </div>
  );
}

export default Recherche;
