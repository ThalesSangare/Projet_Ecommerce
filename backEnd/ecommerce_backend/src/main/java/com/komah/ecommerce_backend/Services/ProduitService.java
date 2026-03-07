package com.komah.ecommerce_backend.Services;

import com.komah.ecommerce_backend.entities.Produit;

import java.util.List;

public interface ProduitService {
    Produit saveProduit(Produit p);
    Produit updateProduit(Produit produit);
    void deleteProduit(Produit p);
    void deleteProduitById(Long id);
    Produit getProduit(Long id);
    List<Produit> getAllProduits();
    List<Produit> getProduitByNomProd(String nom);
    List<Produit> getProduitContainsNomProd(String nom);

    List<Produit> getByNomPrix(String nom, Long prix);
    List<Produit> findByCategorieIdCat(Long id);
}
