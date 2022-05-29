package com.kagire.repository;

import com.kagire.entity.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {

    @Query(value = "SELECT * FROM product ORDER BY id", nativeQuery = true)
    List<Product> findAll();

    @Query(value = "SELECT * FROM select_popular_products()", nativeQuery = true)
    List<Product> findPopularProducts();

    @Query(value = "SELECT COUNT(id) FROM client_order WHERE product_id = ?1", nativeQuery = true)
    int getProductPopularity(int id);
}
