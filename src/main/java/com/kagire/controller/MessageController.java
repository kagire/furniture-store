package com.kagire.controller;

import com.kagire.addtionalService.JournalLogger;
import com.kagire.entity.Message;
import com.kagire.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("message")
public class MessageController {

    @Autowired
    JournalLogger journalLogger;

    @Autowired
    MessageRepository messageRepository;

    @PostMapping
    public ResponseEntity<Message> sendMessage(@RequestBody Message message){
        message = messageRepository.save(message);
        journalLogger.logMessageSent(message);
        for(Message message1 : messageRepository.findAll()) System.out.println(message1);
        return new ResponseEntity<>(message, HttpStatus.CREATED);
    }
}
