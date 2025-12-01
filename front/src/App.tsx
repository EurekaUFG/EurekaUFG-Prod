import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Devolvidos from "./pages/devolvidos";
import Como_Funciona from "./pages/outras_pages/como_funciona";
import FAQ from "./pages/outras_pages/FAQ";
import Contatos from "./pages/outras_pages/contatos";

function App() {
    return(
        <Router>
            <Routes>

                {/* Redireciona a rota raiz (/) para /home */}
                <Route path="/" element={<Navigate to="/home" replace />} />

                {/* Rota 1: Tela Inicial (Login/Cadastro) */}
                <Route path="/home" element={<Home />} />

                {/* Adicionei o Login, caso você queira usá-lo */}
                <Route path="/login" element={<Login />} />

                <Route path="/minha-conta" element={<Profile />} />

                <Route path="/devolvidos" element={<Devolvidos />} />

                <Route path="/como-funciona" element={<Como_Funciona/>}/>

                <Route path="/contatos" element={<Contatos/>}/>

                <Route path="/FAQ" element={<FAQ/>}/>
            </Routes>
        </Router>
    );
}

export default App;