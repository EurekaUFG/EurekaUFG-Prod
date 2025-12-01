// src/pages/Contact/index.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
//   const [formData, setFormData] = useState({
//     nome: '',
//     email: '',
//     assunto: '',
//     mensagem: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Aqui você conectaria com o backend para enviar o email
//     alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
//     setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
//   };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      
      {/* 1. CABEÇALHO AZUL (Padrão das outras páginas) */}
      <div className="bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Fale Conosco</h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Dúvidas sobre um item? Sugestões para o sistema? Ou precisa saber onde fica nossa central?
        </p>
      </div>

      {/* 2. CONTEÚDO PRINCIPAL (Grid de 2 Colunas) */}
      <div className="container mx-auto px-4 -mt-10 mb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            
            {/* COLUNA DA ESQUERDA: Informações de Contato */}
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Informações de Atendimento</h2>
                
                <div className="space-y-6">
                    {/* Item: Endereço */}
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 text-xl">📍</div>
                        <div>
                            <h3 className="font-bold text-gray-800">Central de Achados e Perdidos</h3>
                            <p className="text-gray-600 text-sm">Prédio da Segurança Universitária</p>
                            <p className="text-gray-600 text-sm">Câmpus Samambaia - Goiânia, GO</p>
                            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-blue-600 text-sm font-bold hover:underline mt-1 inline-block">
                                Ver no Google Maps &rarr;
                            </a>
                        </div>
                    </div>

                    {/* Item: Email */}
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 text-xl">✉️</div>
                        <div>
                            <h3 className="font-bold text-gray-800">Email Oficial</h3>
                            <p className="text-gray-600 text-sm">achados@ufg.br</p>
                            <p className="text-gray-500 text-xs mt-1">Respondemos em até 24h úteis.</p>
                        </div>
                    </div>

                    {/* Item: Telefone */}
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 text-xl">📞</div>
                        <div>
                            <h3 className="font-bold text-gray-800">Telefone / WhatsApp</h3>
                            <p className="text-gray-600 text-sm">(62) 3521-0000</p>
                            <p className="text-gray-600 text-sm">Ramal: 1234</p>
                        </div>
                    </div>

                    {/* Item: Horário */}
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 text-xl">🕒</div>
                        <div>
                            <h3 className="font-bold text-gray-800">Horário de Funcionamento</h3>
                            <p className="text-gray-600 text-sm">Segunda a Sexta: 08:00 às 18:00</p>
                            <p className="text-gray-500 text-xs">Exceto feriados.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* COLUNA DA DIREITA: Formulário de Mensagem */}
            {/* <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Envie uma Mensagem</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                            <input 
                                type="text" name="nome" required 
                                value={formData.nome} onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Seu nome"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input 
                                type="email" name="email" required 
                                value={formData.email} onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="seu@email.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                        <select 
                            name="assunto" 
                            value={formData.assunto} onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                        >
                            <option value="">Selecione um assunto...</option>
                            <option value="duvida">Dúvida sobre item</option>
                            <option value="sugestao">Sugestão / Reclamação</option>
                            <option value="parceria">Outros assuntos</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                        <textarea 
                            name="mensagem" rows="4" required 
                            value={formData.mensagem} onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                            placeholder="Como podemos te ajudar?"
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition duration-200">
                        Enviar Mensagem
                    </button>
                </form>
            </div> */}

        </div>
      </div>

      {/* Botão Voltar */}
      <div className="text-center">
        <Link to="/" className="text-blue-600 font-bold hover:underline">
            &larr; Voltar para o Início
        </Link>
      </div>

    </div>
  );
};

export default Contact;