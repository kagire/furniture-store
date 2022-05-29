package com.kagire.addtionalService;

import com.kagire.entity.Product;
import com.kagire.repository.ProductAttributeRepository;
import com.kagire.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
public class TransactionService {

    @Autowired
    ProductAttributeRepository productAttributeRepository;

    @Autowired
    ProductRepository productRepository;

    JournalLogger journalLogger = new JournalLogger();

    @Transactional
    public void saveProduct(Product newProduct, MultipartFile[] multipartFiles, String attributes){

        Product product = productRepository.save(newProduct);
        ImageService.saveImages(multipartFiles, product.getId(), product.getName());
        productAttributeRepository.saveAll(StringParser.parseProductAttributes(newProduct.getId(), attributes));
        journalLogger.logProductAdd(product);
    }
}
