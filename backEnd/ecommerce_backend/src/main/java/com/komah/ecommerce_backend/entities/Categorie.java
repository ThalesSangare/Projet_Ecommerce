package com.komah.ecommerce_backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.komah.ecommerce_backend.Services.CategorieService;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Categorie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCat;
    private String nomCat;
    private String descriptionCat;


    @JsonIgnore
    @OneToMany(mappedBy = "categorie")
    private List<Produit> produits;
}
