package com.kagire.entity;

import com.kagire.addtionalService.ImageService;

import java.util.ArrayList;
import java.util.List;

public class ProductImage {

    Product product;
    List<String> images;
    List<ProductAttribute> productAttributes;

    public ProductImage(Product product, List<String> images, List<ProductAttribute> productAttributes) {
        this.product = product;
        this.images = images;
        this.productAttributes = productAttributes;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public List<ProductAttribute> getProductAttributes() {
        return productAttributes;
    }

    public void setProductAttributes(List<ProductAttribute> productAttributes) {
        this.productAttributes = productAttributes;
    }

    public static ProductImage getImagesToProduct(Product product, List<ProductAttribute> productAttributes){
        return new ProductImage(product, ImageService.getImagesBase64(product.getId(), product.getName()), productAttributes);
    }
}
