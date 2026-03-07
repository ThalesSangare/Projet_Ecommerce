package com.komah.ecommerce_backend.Services;

import com.komah.ecommerce_backend.entities.Categorie;
import com.komah.ecommerce_backend.repository.CategorieRepository;

import java.util.List;

public class CategorieServiceImpl implements CategorieService{

    private final CategorieRepository categorieRepository;

    public CategorieServiceImpl(CategorieRepository categorieRepository) {
        this.categorieRepository = categorieRepository;
    }

    @Override
    public Categorie saveCategorie(Categorie categorie) {
        return categorieRepository.save(categorie);
    }

    @Override
    public Categorie updateCategorie(Categorie categorie) {
        return categorieRepository.save(categorie);
    }

    @Override
    public void deleteCategorie(Categorie categorie) {
        categorieRepository.delete(categorie);
    }

    @Override
    public void deleteCategorieId(Long id) {
        categorieRepository.deleteById(id);
    }

    @Override
    public Categorie getCategorieById(Long id) {
        return categorieRepository.findById(id).get();
    }

    @Override
    public List<Categorie> getAllCategorie() {
        return categorieRepository.findAll();
    }
}
