import React, { useState } from 'react';
import axios from 'axios';

function Mercadorias() {
  const [formData, setFormData] = useState({
    nome: '',
    numero_registro: '',
    fabricante: '',
    tipo: '',
    descricao: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validação básica
    if (!formData.nome || !formData.numero_registro || !formData.fabricante || !formData.tipo) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }
    try {
      await axios.post('http://localhost:5000/mercadorias', formData);
      alert('Mercadoria cadastrada com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar mercadoria.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" required />
      <input name="numero_registro" value={formData.numero_registro} onChange={handleChange} placeholder="Número de Registro" required />
      <input name="fabricante" value={formData.fabricante} onChange={handleChange} placeholder="Fabricante" required />
      <input name="tipo" value={formData.tipo} onChange={handleChange} placeholder="Tipo" required />
      <textarea name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Descrição" />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Mercadorias;
