package com.kagire.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String info;
    private int price;

    public Product() {}

    public Product(String name, String info, int price) {
        this.name = name;
        this.info = info;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "{" +
                "\"id\":" + this.id +
                ", \"name\":\"" + this.name + "\"" +
                ", \"info\":\"" + this.info + "\"" +
                ", \"price\":\"" + this.price + "\"" +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.name, this.info, this.price);
    }
}
