package poo.EurekaUFG;

public class Match {
    private int id;
    private ItemPerdido itemPerdido;
    private ItemEncontrado itemEncontrado;
    private double grauSimilaridade;
    
    // public void calcularSimilaridade(){

    // }

    // public void confirmarMatch(){

    // }


    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public ItemPerdido getItemPerdido() {
        return itemPerdido;
    }
    public void setItemPerdido(ItemPerdido itemPerdido) {
        this.itemPerdido = itemPerdido;
    }
    public ItemEncontrado getItemEncontrado() {
        return itemEncontrado;
    }
    public void setItemEncontrado(ItemEncontrado itemEncontrado) {
        this.itemEncontrado = itemEncontrado;
    }
    public double getGrauSimilaridade() {
        return grauSimilaridade;
    }
    public void setGrauSimilaridade(double grauSimilaridade) {
        this.grauSimilaridade = grauSimilaridade;
    }
}