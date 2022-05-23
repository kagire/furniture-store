package com.kagire.controller;

import com.kagire.entity.Order;
import com.kagire.repository.OrderRepository;
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

    @PostMapping
    public ResponseEntity<Order> getAllProducts(@RequestBody Order order){

        return new ResponseEntity<>(orderRepository.save(order), HttpStatus.CREATED);
    }
}
