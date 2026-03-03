import { Clock4, Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

const contact = [
  { id: 1, img: Mail, nom: "Email", texte: "support@boutique.com " },
  { id: 2, img: Phone, nom: "Téléphone", texte: "+33 1 23 45 67 89" },
  {
    id: 3,
    img: MapPin,
    nom: "Adresse",
    texte: "123 Rue de la Boutique, Lille, France",
  },
  { id: 4, img: Clock4, nom: "Horaires", texte: "Lundi - Vendredi : 9h - 18h" },
  // {id: 5,img: Mail, nom: "Réseaux sociaux", email: "Suivez-nous sur Facebook, Twitter, Instagram"},
];

// ======================================================================================
const faqData = [
  {
    question: "Comment passer une commande ?",
    answer:
      "Pour passer une commande, ajoutez vos produits au panier, puis cliquez sur 'Valider la commande'. Remplissez vos informations et confirmez.",
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer:
      "Nous acceptons les cartes bancaires (Visa, Mastercard), PayPal et les virements bancaires.",
  },
  {
    question: "Comment suivre ma commande ?",
    answer:
      "Après validation de la commande, vous recevrez un email avec un numéro de suivi et un lien pour suivre votre colis.",
  },
];
// ======================================================================================

function Contact() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici pour send les données au backend
    console.log("Formulaire soumis:", formData);
    alert("Merci ! Votre message a été envoyé.");
    setFormData({ nom: "", email: "", sujet: "", message: "" });
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-4 gap-4">
        <h1 className="text-2xl md:text-5xl font-bold">Contactez-nous</h1>
        <p className="text-center text-gray-600">
          Notre équipe est là pour vous aider. N'hésitez pas à nous contacter
          pour toute question concernant nos produits ou services.{" "}
        </p>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-4">
          {contact.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-64 h-48 items-center gap-2 border-0 bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <item.img size={32} className="text-accent" />
              <h2 className="text-lg font-semibold">{item.nom}</h2>
              <p className="text-gray-600 text-center">{item.texte}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Formulaire de contacct */}
      <div className="max-w-xl mx-auto p-6 bg-gray-100 shadow-md rounded-md mt-8">
        <form onSubmit={handleSubmit} className="space-y-4 ">
          {/* Nom */}
          <div>
            <label className="block mb-1 font-semibold">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Votre nom"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="exemple@mail.com"
            />
          </div>

          {/* Sujet */}
          <div>
            <label className="block mb-1 font-semibold">
              Sujet <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="sujet"
              value={formData.sujet}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Sujet de votre message"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-semibold">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Votre message..."
            />
          </div>

          {/* Bouton envoyer */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-accent text-white px-6 py-2 rounded-md hover:bg-accent-dark transition-colors"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
      {/* FAQ */}
      <div className="max-w-3xl mx-auto p-6 bg-gray-100 shadow-md rounded-md mt-8">
        <h2 className="text-3xl font-bold mb-6 text-center">FAQ</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border rounded-md shadow-sm">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                {item.question}
                <span className="ml-2">{openIndex === index ? "▲" : "▼"}</span>
              </button>

              {/* Réponse */}
              {openIndex === index && (
                <div className="px-4 py-3 border-t bg-gray-50">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
