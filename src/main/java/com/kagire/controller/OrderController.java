package com.kagire.controller;

import com.kagire.addtionalService.EmailService;
import com.kagire.addtionalService.JournalLogger;
import com.kagire.entity.Order;
import com.kagire.repository.OrderRepository;
import com.kagire.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("order")
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    EmailService emailService;

    @Autowired
    JournalLogger journalLogger;

    @PostMapping
    public ResponseEntity<Order> makeOrder(@RequestBody Order order1){
        Order order = orderRepository.save(order1);
        emailService.sendMail(order, productRepository.findById(order.getProductId()).get());
        journalLogger.logOrderMade(order);
        return new ResponseEntity<>(order1, HttpStatus.CREATED);
    }
}
