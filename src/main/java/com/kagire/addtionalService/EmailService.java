package com.kagire.addtionalService;

import com.aspose.cells.*;
import com.kagire.entity.Order;
import com.kagire.entity.Product;
import com.kagire.exception.EmailSendingException;
import com.kagire.repository.OrderRepository;
import com.kagire.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@PropertySource(value = "email.properties")
@Service
public class EmailService {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ProductRepository productRepository;

    @Value("${email.username}")
    private String username;
    @Value("${email.password}")
    private String password;
    @Value("${email.host}")
    private String host;
    @Value("${email.port}")
    private String port;

    private final Properties prop = new Properties();

    public EmailService() {}

    public void sendMail(Order order, Product product){
        prop.put("mail.smtp.auth", true);
        prop.put("mail.smtp.starttls.enable", "true");
        prop.put("mail.smtp.host", host);
        prop.put("mail.smtp.port", port);
        prop.put("mail.smtp.ssl.trust", host);

        Session session = Session.getInstance(prop, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try{
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("feeltheradiance@gmail.com"));
            message.setSubject("New order");

            String msg = "Order received from <b style='color:red;'>"+ order.getPhone() + "</b>";

            MimeBodyPart mimeBodyPart = new MimeBodyPart();
            mimeBodyPart.setContent(msg, "text/html; charset=utf-8");

            String msgStyled = "Product: " + product.getId() + ", name: " + product.getName();
            MimeBodyPart mimeBodyPartWithStyledText = new MimeBodyPart();
            mimeBodyPartWithStyledText.setContent(msgStyled, "text/html; charset=utf-8");

            MimeBodyPart attachmentBodyPart = new MimeBodyPart();
            createExcelReport();
            File file = getFile();
            attachmentBodyPart.attachFile(file);

            Multipart multipart = new MimeMultipart();
            multipart.addBodyPart(mimeBodyPart);
            multipart.addBodyPart(mimeBodyPartWithStyledText);
            multipart.addBodyPart(attachmentBodyPart);

            message.setContent(multipart);

            //Transport.send(message);
            Path fileToDeletePath = Paths.get("src/main/resources/report.xlsx");
            Files.delete(fileToDeletePath);
        }
        catch (Exception ex){
            ex.printStackTrace();
            throw new EmailSendingException(ex);
        }
    }

    private void createExcelReport(){
        Workbook workbook = new Workbook();
        Worksheet worksheet = workbook.getWorksheets().get(0);
        worksheet.getCells().get("A1").putValue("Product name");
        worksheet.getCells().get("B1").putValue("Times ordered");
        worksheet.getCells().setColumnWidth(0, 20);
        worksheet.getCells().setColumnWidth(1, 20);

        Style style = worksheet.getCells().get("A1").getStyle();
        style.setBorder(BorderType.TOP_BORDER, CellBorderType.THICK, Color.getBlack());
        style.setBorder(BorderType.BOTTOM_BORDER, CellBorderType.THICK, Color.getBlack());
        style.setBorder(BorderType.LEFT_BORDER, CellBorderType.THICK, Color.getBlack());
        style.setBorder(BorderType.RIGHT_BORDER, CellBorderType.THICK, Color.getBlack());
        worksheet.getCells().get("A1").setStyle(style);
        worksheet.getCells().get("B1").setStyle(style);

        Set<String> originalSet = new TreeSet<>();
        int counter = 2;

        for (Order order : orderRepository.findAll()){
            if(originalSet.contains(productRepository.findById(order.getProductId()).get().getName())) continue;
            originalSet.add(productRepository.findById(order.getProductId()).get().getName());
            worksheet.getCells().get("A" + counter).putValue(productRepository.findById(order.getProductId()).get().getName());
            worksheet.getCells().get("B" + counter).putValue(productRepository.getProductPopularity(order.getProductId()));
            counter++;
        }

        // Chart
        int chartIndex = worksheet.getCharts().add(ChartType.PIE, counter, 0, counter+10, 2);
        Chart chart = worksheet.getCharts().get(chartIndex);

        // Set chart data source as the range "A1:C4"
        chart.setChartDataRange("A1:C" + (counter-1), true);
        try {
            workbook.save("src/main/resources/report.xlsx", SaveFormat.XLSX);
        } catch (Exception e) {
            throw new EmailSendingException(e);
        }

    }

    private File getFile() throws URISyntaxException {
        URI uri = this.getClass()
                .getClassLoader()
                .getResource("report.xlsx")
                .toURI();
        return new File(uri);
    }
}
