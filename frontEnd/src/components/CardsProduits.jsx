import { ShoppingCart } from "lucide-react";

function CardsProduits({ produits }) {
  return (
    <div
      className="border border-gray-200 rounded-2xl shadow-md 
                    hover:shadow-xl transition duration-300 
                    flex flex-col overflow-hidden w-64"
    >
      {/* <div className="aspect-square overflow-hidden"> */}
      <div className="h-48 w-full flex items-center justify-center bg-gray-100 p-2 rounded">
        <img
          src={produits.image}
          alt={produits.nom}
          // max-h-full max-w-full object-contain pour que l'image s'adapte à son conteneur sans être déformée"
          className="max-h-full max-w-full object-contain hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-lg truncate">{produits.nom}</h3>
        <p className="text-gray-500 text-sm line-clamp-2">
          {produits.description}
        </p>

        <div className="mt-auto">
          <p className="text-accent font-bold text-xl mb-3">
            {produits.prix.toLocaleString()} €
          </p>

          <button
            className="flex gap-2 justify-center w-full bg-black text-white 
                             py-2 rounded-lg 
                             hover:bg-gray-800 transition"
          >
            <ShoppingCart className="ml-2" />
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardsProduits;
