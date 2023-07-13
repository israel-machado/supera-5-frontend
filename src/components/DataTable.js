import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Table = ({ data }) => {
    return (
        <div className="table-wrapper">
            <h2 className="table-name">Extrato</h2>

            <DataTable value={data} className="custom-table">
                <Column field="dataTransferencia" header="Data" />
                <Column field="valor" header="Valor" />
                <Column field="tipo" header="Tipo" />
                <Column
                    field="nomeOperadorTransacao"
                    header="Nome do Operador Transacionado"
                />
            </DataTable>
        </div>
    );
};

export default Table;