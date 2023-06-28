'use client';
import UserContext from '@contexts/UserContext';
import { listRemedios } from '@services/RemediosService';
import { useEffect, useState, useContext } from 'react';

const TabelaRemedio = (props) => {
  const reme = listRemedios(props.userId);
  return (
    <table>
      <thead>
        <tr>
          {props.exibirCheckbox && (
            <td>
              <input type="checkbox" name="deletar" id="check" className="checkbox" />
            </td>
          )}
          {remedios.map((remedio) => (
            <td>{remedio}</td>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default TabelaRemedio;
