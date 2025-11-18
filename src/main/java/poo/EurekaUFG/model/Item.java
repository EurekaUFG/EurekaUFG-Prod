package poo.EurekaUFG.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "item")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String descricao;
    private String localAchou;

    @Enumerated(EnumType.STRING)
    private LocalDeixou localDeixou;

    private LocalDate data;

    @Enumerated(EnumType.STRING)
    private StatusItem statusItem;

    @ManyToOne
    @JoinColumn(name = "usuario_achou_id")
    private Usuario usuarioAchou;

    @ManyToOne
    @JoinColumn(name = "usuario_perdeu_id")
    private Usuario usuarioPerdeu;

    public Item() {}

    public Item(String nome, String descricao, String localAchou, LocalDeixou localDeixou,
                LocalDate data, StatusItem statusItem, Usuario usuarioAchou, Usuario usuarioPerdeu) {
        this.nome = nome;
        this.descricao = descricao;
        this.localAchou = localAchou;
        this.localDeixou = localDeixou;
        this.data = data;
        this.statusItem = statusItem;
        this.usuarioAchou = usuarioAchou;
        this.usuarioPerdeu = usuarioPerdeu;
    }

    // Getters e setters
    public Long getId() { return id; }
    public String getNome() { return nome; }
    public String getDescricao() { return descricao; }
    public String getLocalAchou() { return localAchou; }
    public LocalDeixou getLocalDeixou() { return localDeixou; }
    public LocalDate getData() { return data; }
    public StatusItem getStatusItem() { return statusItem; }
    public Usuario getUsuarioAchou() { return usuarioAchou; }
    public Usuario getUsuarioPerdeu() { return usuarioPerdeu; }

    public void setId(Long id) { this.id = id; }
    public void setNome(String nome) { this.nome = nome; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
    public void setLocalAchou(String localAchou) { this.localAchou = localAchou; }
    public void setLocalDeixou(LocalDeixou localDeixou) { this.localDeixou = localDeixou; }
    public void setData(LocalDate data) { this.data = data; }
    public void setStatusItem(StatusItem statusItem) { this.statusItem = statusItem; }
    public void setUsuarioAchou(Usuario usuarioAchou) { this.usuarioAchou = usuarioAchou; }
    public void setUsuarioPerdeu(Usuario usuarioPerdeu) { this.usuarioPerdeu = usuarioPerdeu; }
}
