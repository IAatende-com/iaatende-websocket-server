import express from 'express';
import { WebSocketServer } from 'ws';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`IAatende WebSocket rodando na porta ${port}`);
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Cliente WebSocket conectado.');

  ws.on('message', async (data) => {
    console.log('Mensagem recebida:', data);

    const resposta = 'Olá! Aqui é a IAatende, posso te ajudar!';
    ws.send(resposta);
  });

  ws.on('close', () => {
    console.log('Conexão encerrada.');
  });
});
