import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EntradaForm() {
  const [mercadorias, setMercadorias] = useState([]);
  const [formData, setFormData] = useState({
    mercadoria_id: '',
    quantidade: '',
    data_hora: '',
    local: '',
  });

  useEffect(() => {
    axios.get('/api/mercadorias').then(response => {
      setMercadorias(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/entradas', formData)
      .then(response => alert(response.data.message))
      .catch(error => alert("Erro ao registrar entrada."));
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="mercadoria_id" value={formData.mercadoria_id} onChange={handleChange} required>
        <option value="">Selecione a Mercadoria</option>
        {mercadorias.map(mercadoria => (
          <option key={mercadoria.id} value={mercadoria.id}>{mercadoria.nome}</option>
        ))}
      </select>
      <input name="quantidade" value={formData.quantidade} onChange={handleChange} placeholder="Quantidade" required />
      <input name="data_hora" value={formData.data_hora} onChange={handleChange} placeholder="Data e Hora" required />
<input name="local" value={formData.local} onChange={handleChange} placeholder="Local" required />
<button type="submit">Registrar Entrada</button>
</form>
);
}
