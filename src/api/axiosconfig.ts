import axios from 'axios';

const instance = axios.create({
//   baseURL: 'http://25.97.166.11:5000', // Substitua pela URL do seu servidor backend
  baseURL: 'http://localhost:5000', // Substitua pela URL do seu servidor backend
  timeout: 300000, // Tempo máximo de espera para uma requisição (opcional)
  headers: {
    // Configuração de headers (opcional)
  },
});

export default instance;