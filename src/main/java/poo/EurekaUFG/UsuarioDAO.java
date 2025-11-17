package poo.EurekaUFG;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UsuarioDAO {

    //ADICIONA UM USUÁRIO NO BANCO DE DADOS
    public void salvar(Usuario usuario) throws Exception {

       var sql = "insert into usuario (nome, email, matricula) values (?, ?, ?)";

        try (var conexao = Conexao.getConnection();
             var stmt = conexao.prepareStatement(sql)) {

            stmt.setString(1, usuario.nome());
            stmt.setString(2, usuario.email());
            stmt.setString(3, usuario.matricula());
            stmt.executeUpdate();

        } catch (SQLException e) {
            throw new Exception(e);
        }
    }

    //LISTA TODOS OS USUÁRIOS
    public List<Usuario> listTodos() throws Exception{
        var sql = "select * from usuario";
        List<Usuario> usuarios = new ArrayList<>();

        try (var conexao = Conexao.getConnection();
             var stmt = conexao.prepareStatement(sql)){

            try(ResultSet rs = stmt.executeQuery()){
                while (rs.next()){
                    Usuario usuario = new Usuario( rs.getString("nome"),rs.getString("email"),rs.getString("matricula"));
                    usuarios.add(usuario);
                }
            }
        } catch (SQLException e){
            throw new Exception(e);
        }
        return usuarios;
    }

    //BUSCA POR UM USUÁRIO ESPECÍFICO
    public Usuario buscarPorId(Long id) throws Exception {
       var sql = "select * from usuario where id = ?";

        try (var conexao = Conexao.getConnection();
             var stmt = conexao.prepareStatement(sql)) {

             stmt.setLong(1, id);
            try (ResultSet rs = stmt.executeQuery()) {

                if (rs.next()) {
                    return new Usuario(
                            rs.getLong("id"),
                            rs.getString("nome"),
                            rs.getString("email"),
                            rs.getString("matricula")
                    );
                }
            }
        }
        return null;
    }

    //EXCLUI UM USUÁRIO
    public void excluir(Long id) throws Exception{
        var sql = "delete from usuario where id = ?";

        try (var conexao = Conexao.getConnection();
             var stmt = conexao.prepareStatement(sql)){
            stmt.setLong(1, id);
            stmt.executeUpdate();
        } catch (SQLException e){
            throw new Exception(e);
        }
    }
}
