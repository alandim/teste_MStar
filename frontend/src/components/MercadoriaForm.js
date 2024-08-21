import React, { useState } from 'react';
import axios from 'axios';

function MercadoriaForm() {
  const [formData, setFormData] = useState({
    nome: '',
    numero_registro: '',
    fabricante: '',
    tipo: '',
    descricao: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/mercadorias', formData)
      .then(response => alert(response.data.message))
      .catch(error => alert("Erro ao cadastrar mercadoria."));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" required />
      <input name="numero_registro" value={formData.numero_registro} onChange={handleChange} placeholder="Número de Registro" required />
      <input name="fabricante" value={formData.fabricante} onChange={handleChange} placeholder="Fabricante" required />
      <input name="tipo" value={formData.tipo} onChange={handleChange} placeholder="Tipo" required />
      <textarea name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Descrição" />
      <button type="submit">Cadastrar Mercadoria</button>
    </form>
  );
}

export default MercadoriaForm;
