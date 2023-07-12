import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Form = ({ onSubmit, onChange, values }) => {
    return (
        <div>
            <div className="p-grid">
                <div className="p-col">
                    <label>Data de Início:</label>
                    <InputText
                        name="dataInicio"
                        value={values.dataInicio}
                        onChange={onChange}
                    />
                </div>
                <div className="p-col">
                    <label>Data de Fim:</label>
                    <InputText
                        name="dataFim"
                        value={values.dataFim}
                        onChange={onChange}
                    />
                </div>
                <div className="p-col">
                    <label>Nome do Operador Transacionado:</label>
                    <InputText
                        name="nomeOperador"
                        value={values.nomeOperador}
                        onChange={onChange}
                    />
                </div>
                <div className="p-col">
                    <Button label="Pesquisar" onClick={onSubmit} />
                </div>
            </div>
        </div>
    );
};

export default Form;