import dotenv from "dotenv";
import Server from './models/server';

// Configurar .ENV
dotenv.config();

const server = new Server();

server.listen();