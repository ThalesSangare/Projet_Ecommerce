package com.komah.ecommerce_backend.repository;

import com.komah.ecommerce_backend.entities.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategorieRepository extends JpaRepository<Categorie, Long> {
}
