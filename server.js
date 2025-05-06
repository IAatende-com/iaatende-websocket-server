import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
  res.send('IAatende WebSocket ativo!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
