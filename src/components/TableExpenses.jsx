import React from 'react';
import BodyTable from './BodyTable';

class TableExpenses extends React.Component {
  render() {
    return (
      <table border="1" className="table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <BodyTable />
      </table>
    );
  }
}

export default TableExpenses;
