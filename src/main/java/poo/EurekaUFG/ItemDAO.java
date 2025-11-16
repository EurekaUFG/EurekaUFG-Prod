package poo.EurekaUFG;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class ItemDAO {

    public void salvar(Item item, Usuario usuario_achou) throws Exception{
        var sql = "insert into item (nome, descricao, local_achou, local_deixou, data, status_item, usuario_achou_id, usuario_perdeu_id) values (?, ?, ?, ?, ?, ?, ?, ?)";

        try (var conexao = Conexao.getConnection();
             var stmt = conexao.prepareStatement(sql)){
                stmt.setString(1, item.nome());
                stmt.setString(2, item.descricao());
                stmt.setString(3, item.localAchou());
                stmt.setString(4, item.localDeixou().name());  // enum -> String
                stmt.setDate(5, java.sql.Date.valueOf(item.data()));
                stmt.setString(6, item.statusItem().name());   // enum -> String
                stmt.setLong(7, usuario_achou.id());
                stmt.setNull(8, java.sql.Types.BIGINT); // informa o db que o campo é NULL

                stmt.executeUpdate();
        } catch (SQLException e){
            throw new Exception(e);
        }
    }


    public List<Item> listTodos() throws Exception{
        var sql = "select * from item";
        List<Item> itens = new ArrayList<>();

        try (var conexao = Conexao.getConnection();
             var stmt = conexao.prepareStatement(sql)){


            try(ResultSet rs = stmt.executeQuery()){
                UsuarioDAO usuarioDAO = new UsuarioDAO();
                while (rs.next()){

                    Item item = new Item(  rs.getLong("id"),
                                            rs.getString("nome"),
                                            rs.getString("descricao"),
                                            rs.getString("local_achou"),
                                            LocalDeixou.valueOf(rs.getString("local_deixou")),
                                            rs.getDate("data").toLocalDate(),
                                            StatusItem.valueOf(rs.getString("status_item")),
                                            usuarioDAO.getUsuarioById(rs.getLong("usuario_achou_id")),
                                            usuarioDAO.getUsuarioById(rs.getLong("usuario_perdeu_id")));

                    itens.add(item);
                }
            }
        } catch (SQLException e){
            throw new Exception(e);
        }
        return itens;
    }




}
