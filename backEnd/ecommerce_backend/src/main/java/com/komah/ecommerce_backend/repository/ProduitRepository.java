package com.komah.ecommerce_backend.repository;

import com.komah.ecommerce_backend.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
    List<Produit> findByNomProd(String nom);
    List<Produit> findByNomProdContains(String nom);

    @Query("select p from Produit p where p.nomProd like %:nom and p.prixProd > :prix")
    List<Produit> getByNomPrix(@Param("nom") String nom , @Param("prix") Long prix);

    List<Produit> findByCategorieIdCat(Long id);
}
