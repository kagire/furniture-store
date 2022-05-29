package com.kagire.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "journal")
public class Journal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String record;

    public Journal(String record) {
        this.record = record;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRecord() {
        return record;
    }

    public void setRecord(String record) {
        this.record = record;
    }

    @Override
    public String toString() {
        return "{" +
                "\"id\":" + this.id +
                ", \"record\":\"" + this.record + "\"" +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.record);
    }
}
