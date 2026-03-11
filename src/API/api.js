// import axios from "axios";
// // Création d'une instance d'Axios avec une URL de base pour les requêtes API
// const api = axios.create({
//   baseURL: "http://localhost:8080/api/produits",
// });
// export default api;

// Avec ça, appels GET, POST, PUT, DELETE se feront sur /api/produits/...

import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

export default api;
