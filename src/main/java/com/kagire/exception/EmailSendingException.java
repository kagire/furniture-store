package com.kagire.exception;

public class EmailSendingException extends RuntimeException{

    public EmailSendingException(Exception exception) {
        super("Exception occurred while sending email. Exception name: \"" + exception.getClass()
                + "\", message: \"" + exception.getMessage() + "\"");
    }
}
