// frontend/src/components/EntradasList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EntradasList() {
  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    axios.get('/api/entradas')
      .then(response => setEntradas(response.data))
      .catch(error => console.error("Erro ao buscar entradas:", error));
  }, []);

  return (
    <div>
      <h2>Lista de Entradas</h2>
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
          {entradas.map(entrada => (
            <tr key={entrada.id}>
              <td>{entrada.id}</td>
              <td>{entrada.mercadoria.nome}</td>
              <td>{entrada.quantidade}</td>
              <td>{new Date(entrada.data_hora).toLocaleString()}</td>
              <td>{entrada.local}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EntradasList;
