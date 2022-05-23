package com.kagire.controller;

import com.kagire.entity.Product;
import com.kagire.entity.ProductImage;
import com.kagire.repository.ProductAttributeRepository;
import com.kagire.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("products")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProductAttributeRepository productAttributeRepository;

    @GetMapping
    public ResponseEntity<List<ProductImage>> getAllProducts() {

        List<ProductImage> productImageList = new ArrayList<>();
        for(Product product : productRepository.findAll()){
            productImageList.add(ProductImage.getImagesToProduct(product, productAttributeRepository.findAllByProductId(product.getId())));
        }
        return new ResponseEntity<>(productImageList, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<ProductImage> getProduct(@PathVariable int id){
        return new ResponseEntity<>(ProductImage.getImagesToProduct(productRepository.findById(id).get(),
                productAttributeRepository.findAllByProductId(id)), HttpStatus.OK);
    }
}
