import React from 'react';
import axios from 'axios';
import { ProgressBar } from 'primereact/progressbar';
import Table from './components/DataTable';
import Form from './components/Form';
import './App.css';

function App() {
    const [formData, setFormData] = React.useState({
        dataInicio: '',
        dataFim: '',
        nomeOperador: '',
    });

    const [tableData, setTableData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const handleSubmit = () => {
        setLoading(true);
        setError(null);

        axios
            .post('http://localhost:8080/api/extrato', formData)
            .then((response) => {
                const responseData = response.data;
                setTableData(responseData);
            })
            .catch((error) => {
                setError('Ocorreu um erro ao obter os dados. Por favor, tente novamente.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="container">
            <Form onSubmit={handleSubmit} onChange={handleChange} values={formData} />
            {loading ? (
                <ProgressBar mode="indeterminate" style={{ height: '4px' }} />
            ) : (
                <Table data={tableData} />
            )}
            {error && <div className="error-message">{error}</div>}
        </div>
    );
}

export default App;