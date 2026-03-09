import { Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  const footertexte = [
    {
      id: 1,
      text: "Mieux nous connaître",
      liste: [
        "A propos de nous",
        "Politique de confidentialité",
        "Conditions d'utilisation",
      ],
    },
    {
      id: 2,
      text: "Commandes & Retours",
      liste: ["Politique de retour", "Politique de livraison"],
    },
  ];

  return (
    <footer className="bg-base-200 mt-16 ">
      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Sections normales */}
        {footertexte.map((element) => (
          <div key={element.id} className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">{element.text}</h3>
            {element.liste.map((item, index) => (
              <a
                href="#"
                key={index}
                className="hover:text-accent transition duration-300 text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        ))}

        {/* Section Contact  */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Contactez-nous</h3>

          <div className="flex items-center gap-3 text-sm hover:text-accent transition">
            <Phone size={18} className="text-accent" />
            <span>+33 659 82 22 65</span>
          </div>

          <div className="flex items-center gap-3 text-sm hover:text-accent transition">
            <Mail size={18} className="text-accent" />
            <span>killarie7@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 text-sm hover:text-accent transition">
            <MapPin size={18} className="text-accent" />
            <span>123 Rue de la Boutique, Lille, France</span>
          </div>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="border-t border-base-300 text-center py-4 text-sm">
        © {new Date().getFullYear()} Thales - E-commerce — Tous droits réservés
      </div>
    </footer>
  );
}

export default Footer;
