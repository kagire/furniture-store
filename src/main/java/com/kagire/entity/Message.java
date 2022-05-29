package com.kagire.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "message")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String subject;
    private String message;
    

    public Message() {}

    public Message(String name, String email, String subject, String message) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "{" +
                "\"id\":" + this.id +
                ", \"name\":\"" + this.name + "\"" +
                ", \"email\":\"" + this.email + "\"" +
                ", \"subject\":\"" + this.subject + "\"" +
                ", \"message\":\"" + this.message + "\"" +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.name, this.email, this.subject, this.message);
    }
}
