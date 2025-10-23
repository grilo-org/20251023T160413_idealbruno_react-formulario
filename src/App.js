import React, { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    idade: '',
    bairro: '',
    estado: '',
    
  });

  const handleChange = (e) => {
    const { name, value,} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Aqui você pode enviar os dados para um backend, se quiser.
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <h2>Perfil do Usuário</h2>

      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Idade:</label>
        <input
          type="number"
          name="idade"
          value={formData.idade}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Bairro:</label>
        <input
          type="bairro"
          name="bairro"
          value={formData.bairro}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Estado:</label>
        <input
          type="estadp"
          name="estado"
          value={formData.Estado}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
