package com.kagire.controller;

import com.kagire.addtionalService.TransactionService;
import com.kagire.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotNull;

@CrossOrigin
@Controller
@RequestMapping("admin")
public class AdminController {

    @Autowired
    TransactionService transactionService;

    @GetMapping("/product")
    public final String addImagePage(Model model) {
        return "add_image_form";
    }

    @PostMapping("product")
    public final String addImage(@NotNull @RequestParam("images") MultipartFile[] multipartFiles,
                                 @RequestParam("name") String name,
                                 @RequestParam("price") int price,
                                 @RequestParam("info") String info,
                                 @RequestParam("attributes") String attributes) {

        transactionService.saveProduct(new Product(name, info, price), multipartFiles, attributes);
        return "add_image_form";
    }
}
