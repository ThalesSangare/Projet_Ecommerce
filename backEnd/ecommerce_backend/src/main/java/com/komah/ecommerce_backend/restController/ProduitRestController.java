package com.komah.ecommerce_backend.restController;

import com.komah.ecommerce_backend.Services.ProduitService;
import com.komah.ecommerce_backend.entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProduitRestController {

    @Autowired
    private ProduitService produitService;

    @GetMapping()
    public List<Produit> getAllProduits() {
        return produitService.getAllProduits();
    }

    @GetMapping("/{id}")
    public Produit getProduitById(@PathVariable("id") Long id) {
        return produitService.getProduit(id);
    }

    @PostMapping()
    public Produit createProduit(@RequestBody Produit produit){
        return produitService.saveProduit(produit);
    }

    @PutMapping()
    public Produit updateProduit(@RequestBody Produit produit){
        return produitService.updateProduit(produit);
    }

    @DeleteMapping("/{id}")
    public void deleteProduit(@PathVariable("id") Long id){
         produitService.deleteProduitById(id);
    }

    @GetMapping("/prodscat/{idCat}")
    public List<Produit> getProduitByIdCat(@PathVariable("idCat") Long idCat){
        return produitService.findByCategorieIdCat(idCat);
    }



}
