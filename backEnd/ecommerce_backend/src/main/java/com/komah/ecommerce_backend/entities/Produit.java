package com.komah.ecommerce_backend.entities;

import com.komah.ecommerce_backend.Services.CategorieService;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Produit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProd;
    private String nomProd;
    private Long prixProd;
    private Date dateCreation;
    private String description;

    @ManyToOne
    private Categorie categorie;


}
