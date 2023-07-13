import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Form = ({ onSubmit, onChange, values }) => {
    return (
        <div className="form-wrapper">
            <h1 style={{ textAlign: 'center' }}>Banco Supera</h1>
            <div className="p-grid form-row">
                <div className="p-col">
                    <label htmlFor="dataInicio">Data Início:</label>
                    <InputText
                        id="dataInicio"
                        name="dataInicio"
                        value={values.dataInicio}
                        onChange={onChange}
                    />
                </div>
                <div className="p-col">
                    <label htmlFor="dataFim">Data Fim:</label>
                    <InputText
                        id="dataFim"
                        name="dataFim"
                        value={values.dataFim}
                        onChange={onChange}
                    />
                </div>
                <div className="p-col">
                    <label htmlFor="nomeOperador">Nome do Operador Transacionado:</label>
                    <InputText
                        id="nomeOperador"
                        name="nomeOperador"
                        value={values.nomeOperador}
                        onChange={onChange}
                        className="inputtext-large"
                    />
                </div>
                <div className="p-col button" style={{ textAlign: 'right' }}>
                    <Button label="Pesquisar" onClick={onSubmit} />
                </div>
            </div>
        </div>
    );
};

export default Form;