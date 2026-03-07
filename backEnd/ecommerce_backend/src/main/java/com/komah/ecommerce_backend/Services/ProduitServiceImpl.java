package com.komah.ecommerce_backend.Services;

import com.komah.ecommerce_backend.entities.Produit;
import com.komah.ecommerce_backend.repository.ProduitRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProduitServiceImpl implements ProduitService {

    private final ProduitRepository produitRepository;

    public ProduitServiceImpl(ProduitRepository produitRepository) {
        this.produitRepository = produitRepository;
    }

    @Override
    public Produit saveProduit(Produit p) {
        return produitRepository.save(p);
    }

    @Override
    public Produit updateProduit(Produit produit) {
        return produitRepository.save(produit);
    }

    @Override
    public void deleteProduit(Produit p) {
        produitRepository.delete(p);
    }

    @Override
    public void deleteProduitById(Long id) {
        produitRepository.deleteById(id);
    }

    @Override
    public Produit getProduit(Long id) {
        return produitRepository.findById(id).get();
    }

    @Override
    public List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }

    @Override
    public List<Produit> getProduitByNomProd(String nom) {
        return produitRepository.findByNomProd(nom);
    }

    @Override
    public List<Produit> getProduitContainsNomProd(String nom) {
        return produitRepository.findByNomProdContains(nom);
    }

    @Override
    public List<Produit> getByNomPrix(String nom, Long prix) {
        return produitRepository.getByNomPrix(nom, prix);
    }

    @Override
    public List<Produit> findByCategorieIdCat(Long id) {
        return produitRepository.findByCategorieIdCat(id);
    }


}
