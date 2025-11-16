package poo.EurekaUFG;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexao {
    private static final String URL = "jdbc:mysql://localhost:3306/eurekadb";
    private static final String USER = "diogo";
    private static final String PASSWORD = "SenhaForte123!";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL,USER,PASSWORD);
    }
}
