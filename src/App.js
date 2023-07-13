import React from 'react';
import axios from 'axios';
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

  const handleSubmit = () => {
    axios.post('http://localhost:8080/api/extrato', formData)
        .then((response) => {
          const responseData = response.data;
          setTableData(responseData);
        })
        .catch((error) => {
          console.error(error);
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
            <h1>Banco Supera</h1>
            <Form onSubmit={handleSubmit} onChange={handleChange} values={formData} />
            <Table data={tableData} />
        </div>
    );
}

export default App;
