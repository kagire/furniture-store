package com.kagire.addtionalService;

import com.kagire.entity.ProductAttribute;

import java.util.ArrayList;
import java.util.List;

public class StringParser {

    public static List<ProductAttribute> parseProductAttributes(int productId, String initialAttribute){

        List<ProductAttribute> productAttributes = new ArrayList<>();
        String[] attributes = initialAttribute.split("; ");
        for (String attribute : attributes){
            String[] temp = attribute.split("_");
            productAttributes.add(new ProductAttribute(productId, temp[0], temp[1]));
        }
        return productAttributes;
    }
}
