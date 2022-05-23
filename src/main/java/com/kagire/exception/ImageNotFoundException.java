package com.kagire.exception;

public class ImageNotFoundException extends RuntimeException{

    public ImageNotFoundException(int id, String name) {
        super("Image with name \"" + id + "_" + name.replaceAll("\\s","_") + ".jpg\" not found");
    }
}
