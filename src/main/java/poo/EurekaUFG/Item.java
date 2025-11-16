package poo.EurekaUFG;

import java.time.LocalDate;

public record Item (Long id,
                    String nome,
                    String descricao,
                    String localAchou,
                    LocalDeixou localDeixou,
                    LocalDate data,
                    StatusItem statusItem,
                    Usuario usuarioAchou,
                    Usuario usuarioPerdeu) {

    public Item (String nome,
                 String descricao,
                 String localAchou,
                 LocalDeixou localDeixou,
                 LocalDate data,
                 StatusItem statusItem,
                 Usuario usuarioAchou,
                 Usuario usuarioPerdeu) {

        this(null,
                nome,
                descricao,
                localAchou,
                localDeixou,
                data,
                StatusItem.ENCONTRADO,
                usuarioAchou,
                null);
    }
}