import "./item.css";

interface ItemProps {
    nome: string;
    descricao: string;
    imagem: string;
}

export function Item({ nome, descricao, imagem }: ItemProps) {
  return (
    <div className="item">
      <img src={`http://localhost:8080/${imagem}`} alt={nome} />
      <h2>{nome}</h2>
      <p><b>Descrição:</b> {descricao}</p>
    </div>
  );
}
