import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Saidas() {
  const [formData, setFormData] = useState({
    mercadoria_id: '',
    quantidade: '',
    data_hora: '',
    local: ''
  });

  const [mercadorias, setMercadorias] = useState([]);

  useEffect(() => {
    const fetchMercadorias = async () => {
      const result = await axios.get('http://localhost:5000/mercadorias');
      setMercadorias(result.data);
    };

    fetchMercadorias();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.mercadoria_id || !formData.quantidade || !formData.data_hora || !formData.local) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/saidas', formData);
      alert('Saída cadastrada com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar saída.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="mercadoria_id" value={formData.mercadoria_id} onChange={handleChange} required>
        <option value="">Selecione uma mercadoria</option>
        {mercadorias.map((mercadoria) => (
          <option key={mercadoria.id} value={mercadoria.id}>
            {mercadoria.nome}
          </option>
        ))}
      </select>
      <input name="quantidade" value={formData.quantidade} onChange={handleChange} placeholder="Quantidade" required />
      <input name="data_hora" type="datetime-local" value={formData.data_hora} onChange={handleChange} required />
      <input name="local" value={formData.local} onChange={handleChange} placeholder="Local" required />
      <button type="submit">Cadastrar Saída</button>
    </form>
  );
}

export default Saidas;
