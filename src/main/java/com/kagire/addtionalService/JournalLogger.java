package com.kagire.addtionalService;

import com.kagire.entity.Journal;
import com.kagire.entity.Message;
import com.kagire.entity.Order;
import com.kagire.entity.Product;
import com.kagire.repository.JournalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Component
public class JournalLogger {

    @Autowired
    JournalRepository journalRepository;

    public void logProductAdd(Product product){
        journalRepository.save(new Journal(getDate() + " new product added: id \"" + product.getId() +
                "\", name:" + product.getName()));
    }

    public void logOrderMade(Order order){
        journalRepository.save(new Journal(getDate() + " new order: id \"" + order.getId() +
                "\", customer phone:" + order.getPhone()));
    }

    public void logMessageSent(Message message){
        journalRepository.save(new Journal(getDate() + " new message: id \"" + message.getId() +
                "\", customer email:" + message.getEmail()));
    }

    private String getDate(){
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy.MM.dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        return dtf.format(now);
    }
}
