package poo.EurekaUFG.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import poo.EurekaUFG.model.dto.ItemRequestDTO;
import poo.EurekaUFG.model.entity.Item;
import poo.EurekaUFG.model.entity.StatusItem;
import poo.EurekaUFG.repositories.ItemRepository;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/itens")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    @GetMapping
    public List<Item> getAll() {
        return itemRepository.findAll();
    }

    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<String> createItem(@ModelAttribute ItemRequestDTO data) throws IOException {

        MultipartFile imagemFile = data.imagem();

        // Pasta para salvar as imagens
        String uploadDir = "uploads/";
        File dir = new File(uploadDir);
        if (!dir.exists()) dir.mkdirs();

        // Nome único
        String fileName = UUID.randomUUID() + "_" + imagemFile.getOriginalFilename();
        Path filePath = Paths.get(uploadDir, fileName);
        Files.copy(imagemFile.getInputStream(), filePath);

        // Cria o item usando construtor que recebe o caminho da imagem
        Item item = new Item(data, filePath.toString());

        itemRepository.save(item);

        return ResponseEntity.ok("Item cadastrado com sucesso!");
    }
}
