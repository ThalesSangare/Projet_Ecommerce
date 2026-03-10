import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Truck, ShieldCheck, Eye, EyeOff } from "lucide-react";

export default function Inscription() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row from-green-50 to-gray-100">
      {/* cote gauche */}
      <div className="hidden md:flex w-1/2 flex-col justify-center items-center p-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Rejoignez-nous 🚀
        </h1>

        <p className="text-gray-600 text-lg max-w-md mb-10">
          Créez votre compte et profitez d'une expérience d'achat simple, rapide
          et sécurisée sur notre plateforme.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-3 text-gray-700">
            <ShoppingBag className="text-green-600" />
            <span>Des milliers de produits disponibles</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Truck className="text-green-600" />
            <span>Livraison rapide et fiable</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <ShieldCheck className="text-green-600" />
            <span>Paiement 100% sécurisé</span>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Créer un compte
          </h2>

          <div className="mb-4">
            <label className="block text-gray-600 mb-2">
              Nom d'utilisateur <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-2">
              Mot de passe <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="********"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 mb-2">
              Confirmer mot de passe <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="password"
                placeholder="********"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            S'inscrire
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Déjà un compte ?{" "}
            <Link
              to="/login"
              className="text-green-600 font-medium hover:underline"
            >
              Connexion
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
