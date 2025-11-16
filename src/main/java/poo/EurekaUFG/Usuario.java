package poo.EurekaUFG;

public record Usuario( Long id,
                       String nome,
                       String email,
                       String matricula){

    public Usuario(String nome,
                   String email,
                   String matricula){
        this(null,
                nome,
                email,
                matricula);
    }
}