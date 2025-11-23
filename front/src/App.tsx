import { useState } from "react";
import "./App.css";
import { Item } from "./components/item/item";
import { useItemData } from "./hooks/useItemData";
import { CreateModal } from "./components/item/create-modal/create-modal";

function App() {
  const { data } = useItemData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container">
      <h1>Itens Perdidos</h1>

      <div className="item-grid">
        {data?.map(item => (
          <Item
            key={item.id}
            nome={item.nome}
            descricao={item.descricao}
            imagem={item.imagem}
          />
        ))}
      </div>

      {isModalOpen && <CreateModal closeModal={closeModal} />}

      <button onClick={openModal}>Novo</button>
    </div>
  );
}

export default App;
