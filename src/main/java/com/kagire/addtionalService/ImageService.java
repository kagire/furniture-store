package com.kagire.addtionalService;

import com.kagire.exception.ImageCreationException;
import com.kagire.exception.ImageNotFoundException;
import org.apache.commons.io.FileUtils;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

public class ImageService {

    public static List<String> getImagesBase64(int id, String name){
        int counter = 1;
        List<String> images = new ArrayList<>();
        String path = "images/" + id + "_" + name.replaceAll("\\s", "_") + "_";
        try {
            while(new ClassPathResource(path + counter + ".jpg").exists()){
                byte[] fileContent = FileUtils.readFileToByteArray(new ClassPathResource(path + counter + ".jpg").getFile());
                images.add(Base64.getEncoder().encodeToString(fileContent));
                counter++;
            }
        } catch (Exception ex){
            ex.printStackTrace();
            throw new ImageNotFoundException(id, name + "_" + counter);
        }
        return images;
    }

    public static void saveImages(MultipartFile[] multipartFiles, int id, String name){
        int counter = 1;
        for(MultipartFile multipartFile : multipartFiles) {
            try {
                Path path = Files.createFile(Paths.get(Paths.get("").toAbsolutePath() + "\\src\\main\\resources\\images\\"
                        + id + "_" + name.replaceAll("\\s", "_") + "_" +counter +".jpg"));

                multipartFile.transferTo(path.toFile());
            } catch (Exception ex) {
                ex.printStackTrace();
                throw new ImageCreationException();
            }
            counter++;
        }
    }
}
