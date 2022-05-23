package com.kagire.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "product_attributes")
public class ProductAttribute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int product_id;
    private String attribute_name;
    private String attribute;

    public ProductAttribute() {}

    public ProductAttribute(int product_id, String attribute_name, String attribute) {
        this.product_id = product_id;
        this.attribute_name = attribute_name;
        this.attribute = attribute;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public String getAttribute_name() {
        return attribute_name;
    }

    public void setAttribute_name(String attribute_name) {
        this.attribute_name = attribute_name;
    }

    public String getAttribute() {
        return attribute;
    }

    public void setAttribute(String attribute) {
        this.attribute = attribute;
    }

    @Override
    public String toString() {
        return "{" +
                "\"id\":" + this.id +
                ", \"product_id\":\"" + this.product_id + "\"" +
                ", \"attribute_name\":\"" + this.attribute_name + "\"" +
                ", \"attribute\":\"" + this.attribute + "\"" +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.attribute, this.attribute_name, this.product_id);
    }
}
