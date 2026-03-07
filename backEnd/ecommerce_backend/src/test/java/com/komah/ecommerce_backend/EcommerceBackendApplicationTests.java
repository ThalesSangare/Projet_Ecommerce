package com.komah.ecommerce_backend;

import com.komah.ecommerce_backend.entities.Produit;
import com.komah.ecommerce_backend.repository.ProduitRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

@SpringBootTest
class EcommerceBackendApplicationTests {

	@Autowired
	private ProduitRepository produitRepository;
	@Test
	public void testCreateProduit(){
		Produit prod = new Produit(null,"Montre", 50000L, new Date(), "Montre de luxe",null);
		produitRepository.save(prod);
}

    @Test
    public void listeProdNom(){
        List<Produit> prods = produitRepository.findByNomProd("Montre");
        for (Produit p : prods)
            System.out.println(p);
    }

    @Test
    public void listeProdNomContains(){
        List<Produit> prods = produitRepository.findByNomProdContains("tre");
        for (Produit p : prods)
            System.out.println(p);
    }



}
