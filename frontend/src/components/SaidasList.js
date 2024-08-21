// frontend/src/components/SaidasList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SaidasList() {
  const [saidas, setSaidas] = useState([]);

  useEffect(() => {
    axios.get('/api/saidas')
      .then(response => setSaidas(response.data))
      .catch(error => console.error("Erro ao buscar saídas:", error));
  }, []);

  return (
    <div>
      <h2>Lista de Saídas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Mercadoria</th>
            <th>Quantidade</th>
            <th>Data e Hora</th>
            <th>Local</th>
          </tr>
        </thead>
        <tbody>
          {saidas.map(saida => (
            <tr key={saida.id}>
              <td>{saida.id}</td>
              <td>{saida.mercadoria.nome}</td>
              <td>{saida.quantidade}</td>
              <td>{new Date(saida.data_hora).toLocaleString()}</td>
              <td>{saida.local}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SaidasList;
