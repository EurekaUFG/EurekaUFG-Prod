package poo.EurekaUFG;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UsuarioDAO {

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


    public Usuario getUsuarioById(Long id) throws Exception {
       var sql = "SELECT * FROM usuario WHERE id = ?";

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

        return null; // se não encontrar usuário
    }
}
