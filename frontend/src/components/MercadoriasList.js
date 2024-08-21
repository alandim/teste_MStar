// frontend/src/components/MercadoriasList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MercadoriasList() {
  const [mercadorias, setMercadorias] = useState([]);

  useEffect(() => {
    axios.get('/api/mercadorias')
      .then(response => setMercadorias(response.data))
      .catch(error => console.error("Erro ao buscar mercadorias:", error));
  }, []);

  return (
    <div>
      <h2>Lista de Mercadorias</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Número de Registro</th>
            <th>Fabricante</th>
            <th>Tipo</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {mercadorias.map(mercadoria => (
            <tr key={mercadoria.id}>
              <td>{mercadoria.id}</td>
              <td>{mercadoria.nome}</td>
              <td>{mercadoria.numero_registro}</td>
              <td>{mercadoria.fabricante}</td>
              <td>{mercadoria.tipo}</td>
              <td>{mercadoria.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MercadoriasList;
