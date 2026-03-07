package com.komah.ecommerce_backend.Services;

import com.komah.ecommerce_backend.entities.Categorie;

import java.util.List;

public interface CategorieService {

    Categorie saveCategorie(Categorie categorie);
    Categorie updateCategorie(Categorie categorie);
    void deleteCategorie(Categorie categorie);
    void deleteCategorieId(Long id);
    Categorie getCategorieById(Long id);
    List<Categorie> getAllCategorie();
}
