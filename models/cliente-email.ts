import { Cliente } from "../models/cliente.ts"; 

export class ClienteEmail {
  constructor(private cliente: Cliente) {}

  envioRemocaoConta(): boolean {
    console.log("Envio de email de remoção de " + this.cliente.nome);
    return true;
  }
}