import React from 'react';
import axios from 'axios';
import Table from './components/DataTable';
import Form from './components/Form';
import logo from './logo.svg';
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
      <div className="App">
        <header className="App-header">
          <p>
            Extrato do Banco Supera
          </p>
            <div className={""}>
              <Form onSubmit={handleSubmit} onChange={handleChange} values={formData} />
              <Table data={tableData} />
            </div>
        </header>
      </div>
  );
}

export default App;
