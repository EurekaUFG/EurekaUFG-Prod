// src/pages/FAQ/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  // Lista de Perguntas e Respostas (Fácil de editar no futuro)
  const faqItems = [
    {
      pergunta: "Quanto tempo os itens ficam guardados?",
      resposta: "Os itens permanecem no setor de Achados e Perdidos por até 90 dias (3 meses). Após esse período, itens de valor não reclamados podem ser doados para instituições de caridade ou leiloados, e documentos são encaminhados aos órgãos emissores (Correios/Polícia)."
    },
    {
      pergunta: "Onde fica o ponto de coleta principal?",
      resposta: "Cada faculdade/bloco possui uma secretaria que recebe itens temporariamente, mas a Central Unificada fica no Prédio da Segurança (ao lado da Reitoria). Funciona das 08:00 às 18:00."
    },
    {
      pergunta: "Preciso pagar alguma taxa para retirar meu objeto?",
      resposta: "Não! O serviço de Achados e Perdidos da UFG é totalmente gratuito para alunos, servidores e comunidade externa."
    },
    {
      pergunta: "Não tenho matrícula. ainda posso pegar meu item sem problema?",
      resposta: "Sim, se você é só um visitante, ou não tem matrícula para poder retirar seu item perdido, você ainda pode retira-lo, mas com alguma forma de identificação pessoal, de preferência um documento oficial com foto. (Ex.: CPF)."
    },
    {
      pergunta: "O que é necessário levar para retirar um objeto?",
      resposta: "Caso seja discente ou doscente poderá retira-lo somente informando sua matrícula e dependendo do item como celular ou tablet, deve desbloquea-lo na frente do funcionário responsável pelo local."
    },
    {
      pergunta: "Encontrei algo no campus, sou obrigado a cadastrar?",
      resposta: "Não, não é norma, mas seria de grande ajuda, caso não queira criar conta no site ou cadastrar o item em si, ao menos leve o item até um 'achados e perdidos' mais próximo que lá eles cadastram para você."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      
      {/* 1. CABEÇALHO AZUL (Idêntico ao 'Como Funciona') */}
      <div className="bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Perguntas Frequentes</h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Tire suas dúvidas sobre prazos, locais de retirada e regras do nosso sistema.
        </p>
      </div>

      {/* 2. CONTEÚDO PRINCIPAL (Lista de Perguntas) */}
      <div className="max-w-3xl mx-auto px-4 -mt-10 mb-20 relative z-10">
        
        <div className="space-y-4">
            {faqItems.map((item, index) => (
                <details 
                    key={index} 
                    className="group bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition duration-200"
                >
                    {/* A Pergunta (Sempre visível) */}
                    <summary className="flex justify-between items-center font-bold text-gray-800 text-lg list-none outline-none">
                        <span>{item.pergunta}</span>
                        
                        {/* Ícone de Seta que gira quando abre (Usando classes do Tailwind) */}
                        <span className="transition-transform group-open:rotate-180 text-blue-600">
                            ▼
                        </span>
                    </summary>

                    {/* A Resposta (Aparece ao clicar) */}
                    <div className="mt-4 text-gray-600 leading-relaxed border-t pt-4 border-gray-100 animate-fade-in">
                        {item.resposta}
                    </div>
                </details>
            ))}
        </div>

      </div>

      {/* 3. BOTÃO DE VOLTAR (Fixo no canto ou no final) */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link to="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-xl transition transform hover:scale-105 flex items-center gap-2">
                🏠 Voltar para o Início
            </button>
        </Link>
      </div>

    </div>
  );
};

export default FAQ;