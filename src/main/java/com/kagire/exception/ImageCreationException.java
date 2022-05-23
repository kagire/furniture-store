package com.kagire.exception;

public class ImageCreationException extends RuntimeException{

    public ImageCreationException(){
        super("Error while saving image");
    }
}
