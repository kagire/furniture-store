package com.kagire.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.sql.SQLException;

@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(EmailSendingException.class)
    public ResponseEntity<Object> handleEmailSendingException(EmailSendingException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler({ImageCreationException.class, ImageNotFoundException.class})
    public ResponseEntity<Object> handleImageExceptions(Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(SQLException.class)
    public ResponseEntity<Object> handleSQLException(Exception e) {
        return new ResponseEntity<>("Database exception", HttpStatus.INTERNAL_SERVER_ERROR);
    }

}