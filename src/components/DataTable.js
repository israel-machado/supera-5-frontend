import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';

const Table = ({ data }) => {
    const [first, setFirst] = React.useState(0);
    const [rows, setRows] = React.useState(4);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const totalRecords = data.length;

    const slicedData = data.slice(first, first + rows);

    return (
        <div className="table-wrapper">
            <h2 className="table-name">Extrato</h2>

            <DataTable value={slicedData} className="custom-table">
                <Column field="dataTransferencia" header="Data" />
                <Column field="valor" header="Valor" />
                <Column field="tipo" header="Tipo" />
                <Column field="nomeOperadorTransacao" header="Nome do Operador Transacionado" />
            </DataTable>

            <Paginator
                first={first}
                rows={rows}
                totalRecords={totalRecords}
                onPageChange={onPageChange}
                className="paginator"
            />
        </div>
    );
};

export default Table;